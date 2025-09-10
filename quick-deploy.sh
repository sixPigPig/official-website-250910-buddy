#!/bin/bash

# TechApp 官网快速部署脚本
# 适用于腾讯云轻量应用服务器

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 项目配置
PROJECT_NAME="techapp-website"
CONTAINER_NAME="techapp-container"
IMAGE_NAME="techapp-website"
PORT=3000

echo -e "${BLUE}🚀 TechApp 官网快速部署脚本${NC}"
echo "=================================="

# 检查 Docker 是否安装
check_docker() {
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}❌ Docker 未安装${NC}"
        echo -e "${YELLOW}正在安装 Docker...${NC}"
        
        # 安装 Docker
        curl -fsSL https://get.docker.com -o get-docker.sh
        sudo sh get-docker.sh
        sudo systemctl start docker
        sudo systemctl enable docker
        sudo usermod -aG docker $USER
        
        echo -e "${GREEN}✅ Docker 安装完成${NC}"
        echo -e "${YELLOW}⚠️  请重新登录以使 Docker 权限生效${NC}"
        exit 0
    else
        echo -e "${GREEN}✅ Docker 已安装${NC}"
    fi
}

# 停止并删除旧容器
cleanup_old_deployment() {
    echo -e "${YELLOW}🧹 清理旧部署...${NC}"
    
    if docker ps -a | grep -q $CONTAINER_NAME; then
        docker stop $CONTAINER_NAME || true
        docker rm $CONTAINER_NAME || true
        echo -e "${GREEN}✅ 旧容器已清理${NC}"
    fi
    
    if docker images | grep -q $IMAGE_NAME; then
        docker rmi $IMAGE_NAME:latest || true
        echo -e "${GREEN}✅ 旧镜像已清理${NC}"
    fi
}

# 构建 Docker 镜像
build_image() {
    echo -e "${YELLOW}📦 构建 Docker 镜像...${NC}"
    echo -e "${BLUE}这可能需要几分钟时间，请耐心等待...${NC}"
    
    if docker build -t $IMAGE_NAME:latest . --no-cache; then
        echo -e "${GREEN}✅ Docker 镜像构建成功${NC}"
    else
        echo -e "${RED}❌ Docker 镜像构建失败${NC}"
        echo -e "${YELLOW}💡 提示：请检查网络连接和服务器内存是否足够${NC}"
        exit 1
    fi
}

# 运行容器
run_container() {
    echo -e "${YELLOW}🚀 启动应用容器...${NC}"
    
    docker run -d \
        --name $CONTAINER_NAME \
        --restart unless-stopped \
        -p 80:$PORT \
        -e NODE_ENV=production \
        $IMAGE_NAME:latest
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ 应用容器启动成功${NC}"
    else
        echo -e "${RED}❌ 应用容器启动失败${NC}"
        exit 1
    fi
}

# 检查部署状态
check_deployment() {
    echo -e "${YELLOW}🔍 检查部署状态...${NC}"
    
    sleep 5
    
    if docker ps | grep -q $CONTAINER_NAME; then
        echo -e "${GREEN}✅ 容器运行正常${NC}"
        
        # 获取服务器 IP
        SERVER_IP=$(curl -s ifconfig.me || curl -s ipinfo.io/ip || echo "localhost")
        
        echo ""
        echo -e "${GREEN}🎉 部署成功！${NC}"
        echo -e "${BLUE}访问地址: http://$SERVER_IP${NC}"
        echo ""
        echo -e "${YELLOW}📋 管理命令:${NC}"
        echo "  查看日志: docker logs -f $CONTAINER_NAME"
        echo "  停止服务: docker stop $CONTAINER_NAME"
        echo "  重启服务: docker restart $CONTAINER_NAME"
        echo "  删除服务: docker stop $CONTAINER_NAME && docker rm $CONTAINER_NAME"
        
    else
        echo -e "${RED}❌ 容器启动失败${NC}"
        echo "查看错误日志: docker logs $CONTAINER_NAME"
        exit 1
    fi
}

# 配置防火墙提醒
firewall_reminder() {
    echo ""
    echo -e "${YELLOW}⚠️  重要提醒:${NC}"
    echo "如果无法访问网站，请检查以下设置："
    echo "1. 腾讯云控制台 -> 轻量应用服务器 -> 防火墙"
    echo "2. 添加规则: HTTP(80) 端口，来源 0.0.0.0/0"
    echo "3. 如果使用域名，请配置 DNS 解析"
}

# 主函数
main() {
    echo -e "${BLUE}开始部署流程...${NC}"
    
    check_docker
    cleanup_old_deployment
    build_image
    run_container
    check_deployment
    firewall_reminder
    
    echo ""
    echo -e "${GREEN}🎊 部署完成！${NC}"
}

# 执行主函数
main