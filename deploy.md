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

这是部署的关键步骤。我们需要配置 Nginx 来处理请求转发。

### 编辑配置文件
创建一个新的 Nginx 配置文件：
`sudo vim /etc/nginx/conf.d/my-mbti.conf`

### 写入以下内容
```nginx
server {
    listen 80;
    listen 443;
    server_name _; # 替换为你的域名或保持 _ 以匹配 IP 访问

    # 1. 直接访问 IP 或域名时返回指定字符串
    location = / {
        default_type text/plain;
        return 200 'i love you baby!';
    }

    # 2. 访问 /my-mbti 路径时转发到 Next.js 应用
    location /my-mbti {
        proxy_pass http://127.0.0.1:3000; # 对应 PM2 启动的默认端口
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # 传递真实客户端信息
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # 确保重定向时不会丢失路径前缀
        proxy_redirect off;
    }

    # 3. 处理 Next.js 静态资源 (可选，basePath 通常会自动处理)
    # 如果发现样式丢失，可以确保 _next 路径也能正确转发
    location /my-mbti/_next/ {
        proxy_pass http://127.0.0.1:3000/my-mbti/_next/;
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

- **访问根路径**：访问 `http://<Your-IP>/`，应看到文字：`i love you baby!`
- **访问测试应用**：访问 `http://<Your-IP>/my-mbti/`，应能看到 MBTI 测试页面。

## 6. 常见问题

- **404 错误**：如果访问 `/my-mbti` 返回 404，请检查 `next.config.mjs` 中的 `basePath` 是否确实设置为 `/my-mbti`。
- **端口冲突**：如果 3000 端口已被占用，可以在启动时指定端口：`PORT=3001 pm2 start npm --name "mbti-test" -- start`，并同步修改 Nginx 中的 `proxy_pass`。
