# echo 安装依赖
# npm install

echo 打包
npm run build

echo 发布
node ./upload.js

echo 发布完成