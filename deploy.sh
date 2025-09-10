#!/bin/bash

# 腾讯云部署脚本
# 使用前请确保已安装并配置好腾讯云CLI工具

set -e

echo "🚀 开始部署到腾讯云..."

# 配置变量
PROJECT_NAME="techapp-official"
REGION="ap-beijing"
IMAGE_NAME="techapp-website"
TAG="latest"

# 检查是否安装了Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 未安装，请先安装 Docker"
    exit 1
fi

# 构建Docker镜像
echo "📦 构建Docker镜像..."
docker build -t $IMAGE_NAME:$TAG .

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "✅ Docker镜像构建成功"
else
    echo "❌ Docker镜像构建失败"
    exit 1
fi

echo "🎉 部署准备完成！"
echo ""
echo "📋 接下来的步骤："
echo "1. 登录腾讯云控制台"
echo "2. 选择以下部署方式之一："
echo ""
echo "🔹 方式一：腾讯云轻量应用服务器"
echo "   - 创建轻量应用服务器实例"
echo "   - 安装Docker环境"
echo "   - 上传并运行镜像"
echo ""
echo "🔹 方式二：腾讯云容器服务TKE"
echo "   - 推送镜像到腾讯云容器镜像服务TCR"
echo "   - 在TKE中部署应用"
echo ""
echo "🔹 方式三：腾讯云Serverless"
echo "   - 使用云函数SCF部署"
echo "   - 配置API网关"
echo ""
echo "💡 推荐使用轻量应用服务器，性价比最高！"