# 🚀 腾讯云部署指南

本指南将帮助您将 TechApp 官网部署到腾讯云上。我们提供了多种部署方案，推荐使用轻量应用服务器。

## 📋 部署前准备

### 1. 环境要求
- 腾讯云账号
- 本地安装 Docker
- 基本的 Linux 命令行知识

### 2. 项目文件检查
确保以下文件已创建：
- ✅ `Dockerfile` - Docker 镜像构建文件
- ✅ `.dockerignore` - Docker 忽略文件
- ✅ `next.config.js` - Next.js 配置
- ✅ `tencent-cloud-deploy.yml` - Docker Compose 配置
- ✅ `nginx.conf` - Nginx 反向代理配置
- ✅ `deploy.sh` - 部署脚本

## 🎯 推荐方案：腾讯云轻量应用服务器

### 步骤 1：创建轻量应用服务器

1. 登录 [腾讯云控制台](https://console.cloud.tencent.com/)
2. 进入 **轻量应用服务器** 产品页
3. 点击 **新建实例**
4. 选择配置：
   - **地域**：选择离用户最近的地域（如北京、上海、广州）
   - **镜像**：选择 `Ubuntu 20.04 LTS` 或 `CentOS 8.2`
   - **实例套餐**：推荐 `2核4GB` 或更高配置
   - **购买时长**：根据需要选择

### 步骤 2：配置服务器环境

连接到服务器后，执行以下命令：

```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装 Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 安装 Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker

# 将当前用户添加到 docker 组
sudo usermod -aG docker $USER
```

### 步骤 3：上传项目文件

有多种方式上传项目：

#### 方式 A：使用 Git（推荐）
```bash
# 如果项目已推送到 Git 仓库
git clone https://github.com/your-username/techapp-website.git
cd techapp-website
```

#### 方式 B：使用 SCP 上传
```bash
# 在本地执行，将项目打包上传
tar -czf techapp-website.tar.gz .
scp techapp-website.tar.gz lighthouse@your-server-ip:~/
```

### 步骤 4：构建和部署

```bash
# 进入项目目录
cd techapp-website

# 给部署脚本执行权限
chmod +x deploy.sh

# 构建 Docker 镜像
docker build -t techapp-website:latest .

# 使用 Docker Compose 启动服务
docker-compose -f tencent-cloud-deploy.yml up -d
```

### 步骤 5：配置防火墙

在腾讯云控制台中：
1. 进入轻量应用服务器实例详情
2. 点击 **防火墙** 标签
3. 添加规则：
   - **应用类型**：HTTP(80)
   - **端口**：80
   - **来源**：0.0.0.0/0

### 步骤 6：访问网站

在浏览器中访问：`http://your-server-ip`

## 🌟 高级配置

### 1. 配置域名和 SSL

#### 购买域名
1. 在腾讯云购买域名
2. 在 DNS 解析中添加 A 记录，指向服务器 IP

#### 配置 SSL 证书
```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 申请免费 SSL 证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo crontab -e
# 添加以下行：
# 0 12 * * * /usr/bin/certbot renew --quiet
```

### 2. 性能优化

#### 启用 CDN
1. 在腾讯云控制台开通 CDN 服务
2. 添加加速域名
3. 配置源站为服务器 IP

#### 数据库优化（如需要）
```bash
# 如果需要数据库，可以使用腾讯云数据库
# 在 docker-compose 中添加数据库服务
```

### 3. 监控和日志

```bash
# 查看容器状态
docker-compose -f tencent-cloud-deploy.yml ps

# 查看日志
docker-compose -f tencent-cloud-deploy.yml logs -f

# 查看资源使用情况
docker stats
```

## 🔧 其他部署方案

### 方案 2：腾讯云容器服务 TKE

适合大规模应用和需要自动扩缩容的场景。

1. 创建 TKE 集群
2. 推送镜像到腾讯云容器镜像服务 TCR
3. 创建 Kubernetes 部署文件
4. 部署到 TKE 集群

### 方案 3：腾讯云 Serverless

适合流量不稳定的应用，按需付费。

1. 使用腾讯云云函数 SCF
2. 配置 API 网关
3. 上传代码包

## 🚨 常见问题

### Q1: Docker 构建失败
```bash
# 检查 Docker 版本
docker --version

# 清理 Docker 缓存
docker system prune -a
```

### Q2: 端口访问不了
- 检查防火墙设置
- 确认容器是否正常运行
- 检查端口映射配置

### Q3: 内存不足
- 升级服务器配置
- 优化 Docker 镜像大小
- 使用多阶段构建

## 📞 技术支持

如果在部署过程中遇到问题：
1. 查看项目 Issues
2. 联系技术支持团队
3. 参考腾讯云官方文档

---

🎉 **恭喜！您的 TechApp 官网已成功部署到腾讯云！**

访问地址：`http://your-domain.com` 或 `http://your-server-ip`