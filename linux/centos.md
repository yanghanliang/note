### 安装 node

### 1.下载 node

### 1.1 切换到安装目录

`cd /usr/local/`

### 1.2 下载

`wget -c https://nodejs.org/dist/v12.14.0/node-v12.14.0-linux-x64.tar.xz`

`-c` 断点下载： 如果下载中断，那么连接恢复时会从上次断点开始下载。


### 2.安装 node

#### 2.1 

> 解压

`tar -xvf node-v12.14.0-linux-x64.tar.xz`

> 重命名

`mv node-v12.14.0-linux-x64.tar.xz nodejs`

#### 2.2 建立软连接，变为全局

`ln -s /usr/local/nodejs/bin/npm /usr/local/bin/`
`ln -s /usr/local/nodejs/bin/node /usr/local/bin/`
`ln -s 实际的文件 当前文件`

> 查看安装的版本

`node -v`

### 3. 安装 git

`yum install -y git`

### 4. 安装 yarn

`npm install --global yarn`

> 创建软连接

`ln -s /usr/local/nodejs/bin/yarn /usr/local/bin/`

### 5. 设置 npm yarn 源

> 项目需要所以配置这个源

`npm set registry http://npm.svon.org`
`yarn config set registry http://npm.svon.org`


### 6. 



|分支名|端口|
|---|---|---
| master(正式) | 1000*|
| develop(开发 ) | 2000* |
| test(测试) | 3000*|
