#!/bin/bash

# MBTI 项目自动化更新与重启脚本

# 1. 进入项目目录 (根据实际路径修改)
# cd /path/to/your/mbti

echo "开始更新代码..."
# 2. 拉取最新代码
git pull origin master

echo "安装依赖..."
# 3. 安装依赖 (使用 npm install)
npm install

echo "开始构建项目..."
# 4. 构建项目
npm run build

echo "重启 PM2 服务..."
# 5. 重启 PM2 中的服务
# 如果服务还没启动过，可以使用: pm2 start npm --name "mbti-test" -- start
# 如果已经启动，直接 restart 即可
pm2 restart mbti-test

echo "服务重启完成！"
pm2 status
