# 🚀 快速部署到腾讯云

## 一键部署（推荐）

### 1. 准备腾讯云服务器
- 登录 [腾讯云控制台](https://console.cloud.tencent.com/)
- 购买轻量应用服务器（推荐 2核4GB Ubuntu 20.04）
- 配置防火墙开放 80 端口

### 2. 上传项目到服务器
```bash
# 方式1：使用 Git（推荐）
git clone https://github.com/your-repo/techapp-website.git
cd techapp-website

# 方式2：直接上传文件
# 将项目文件夹上传到服务器
```

### 3. 一键部署
```bash
# 运行快速部署脚本
./quick-deploy.sh
```

就这么简单！脚本会自动：
- ✅ 检查并安装 Docker
- ✅ 构建应用镜像
- ✅ 启动容器服务
- ✅ 配置端口映射

## 📱 访问网站

部署完成后，在浏览器访问：
- `http://你的服务器IP`
- 或者配置域名后访问 `http://你的域名.com`

## 🔧 管理命令

```bash
# 查看运行状态
docker ps

# 查看应用日志
docker logs -f techapp-container

# 重启应用
docker restart techapp-container

# 停止应用
docker stop techapp-container

# 更新应用
./quick-deploy.sh  # 重新运行部署脚本
```

## 🌟 高级配置

### 配置 HTTPS（可选）
```bash
# 安装 SSL 证书
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d 你的域名.com
```

### 配置 CDN（可选）
1. 开通腾讯云 CDN 服务
2. 添加加速域名
3. 配置源站为服务器 IP

## 📋 部署文件说明

- `Dockerfile` - Docker 镜像构建配置
- `quick-deploy.sh` - 一键部署脚本
- `nginx.conf` - Nginx 反向代理配置
- `DEPLOYMENT.md` - 详细部署指南

## 🆘 遇到问题？

1. **无法访问网站**
   - 检查腾讯云防火墙是否开放 80 端口
   - 确认容器是否正常运行：`docker ps`

2. **Docker 权限问题**
   - 重新登录服务器
   - 或使用 `sudo` 运行命令

3. **构建失败**
   - 检查服务器内存是否足够（推荐 4GB+）
   - 清理 Docker 缓存：`docker system prune -a`

## 💰 成本预估

**腾讯云轻量应用服务器**
- 2核4GB：约 ¥24/月
- 4核8GB：约 ¥50/月
- 包含流量包，性价比很高！

---

🎉 **恭喜！您的 TechApp 官网已成功部署到腾讯云！**