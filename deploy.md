# MBTI 项目 Ubuntu 部署教程

本项目是一个基于 Next.js 开发的 MBTI 性格测试应用。本文档详细说明如何在 Ubuntu 服务器上使用 Nginx 和 PM2 进行生产环境部署。

## 1. 环境准备

确保你的 Ubuntu 服务器已安装以下软件：

- **Node.js** (建议 v18+)
- **NPM**
- **Nginx**
- **PM2** (进程管理器)

### 安装 PM2
```bash
sudo npm install -g pm2
```

## 2. 项目打包

在部署之前，需要先安装依赖并构建项目。

```bash
# 进入项目目录
cd /path/to/your/mbti

# 安装依赖
npm install

# 构建项目
npm run build
```

## 3. 使用 PM2 启动应用

由于本项目配置了 `basePath: '/my-mbti'`，Next.js 会自动处理该前缀。

```bash
# 启动应用
# 在项目根目录下启动 Next.js 生产环境服务
pm2 start npm --name "mbti-test" -- start

# 保存 PM2 列表，确保开机自启
pm2 save
pm2 startup
```

## 4. Nginx 配置

将域名指向服务器，并配置 Nginx。
注意：现在应用部署在根路径 `/`。

### 编辑配置文件
创建一个新的 Nginx 配置文件：
`sudo vim /etc/nginx/conf.d/my-mbti.conf`

### 写入以下内容
```nginx
server {
    listen 80;
    server_name yourdomain.com; # 替换为你的域名

    # 根路径返回文本 (可选)
    # location = / {
    #    return 200 'i love you baby!';
    #    add_header Content-Type text/plain;
    # }

    # 转发所有请求到 Next.js 应用
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 启用配置并重启
```bash
# 检查语法是否正确
sudo nginx -t

# 重新加载 Nginx
sudo systemctl reload nginx
```

## 5. 验证部署

- **访问应用**：访问 `http://<Your-IP>/`，应能看到 MBTI 测试页面。

## 6. 常见问题

- **404 错误**：如果访问返回 404，请检查 Nginx 配置中的 `proxy_pass` 是否指向正确的端口（默认 3000）。
- **静态文件无法访问**：确保 `public` 目录下的 `.md` 文件已正确上传。
- **端口冲突**：如果 3000 端口已被占用，可以在启动时指定端口：`PORT=3001 pm2 start npm --name "mbti-test" -- start`，并同步修改 Nginx 中的 `proxy_pass`。
