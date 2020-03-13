
docker exec -it mnmc_prod /bin/bash

nginx 在容器外

进入文件中
        yarn start // 开启
        yarn stop
        yarn restart

在static中需要执行:
    yarn build
        build 后可在"dist/v_1_0_mc"中查看是否成功打包
    yarn font




重启 docker
    + systemctl start docker 

查看 docker 项目 
    + docker ps -a

启动 docker 项目 
    + docker start osec


-------------------------

mn-dm-poc01  蒙牛测试
mn-dm-prd01  蒙牛开发

---


# 开始学习 docker 2020-02-24

### 安装doker

+ `sudo apt-get install docker.io` // 安装
+ `source /etc/bash_completion.d/docker.io` // 更新配置
+ `sudo docker.io version` // 查看版本

> 安装docker维护版本

+ sudo apt-get install -y curl
+ curl -sSL https://get.docker.com/ubuntu/ | sudo sh // 其实只需要这一行就可以了，curl是工具

这两种方式都可以

---

## 在容器中部署静态网站

### 设置容器端口映射

`docker run -p 0.0.0.0:8080:80 -i -t ubuntu /bin/bash`
0.0.0.0 主机ip
8080    主机端口
80      容器端口

### 重启容器后，容器映射的端口号和ip都会改变

> PORTS
0.0.0.0:79167->80/tcp // 将主机的80端口映射到容器的79167中，访问网站时需要访问：http://主机:79167 或者 http://容器ip:80
 


### 查看端口映射情况

docker port 容器名

### nginx部署流程

+ 创建映射80端口的交互式容器
    + docker run -p 80 --name web -i -t ubuntu /bin/bash
+ 安装nginx
+ 安装文本编辑器vim
+ 创建静态页面
+ 修改nginx配置文件
+ 运行nginx
+ 验证网站访问


### 查看容器

+ `docker ps` 查看正在运行的
+ `docker ps -a` 查看所有的
+ `docker ps -l` 查看刚刚创建的
+ `docker inspect [id|name]` 查看详细的配置信息(IPADDress: 容器的ip地址),也可以查看镜像信息
    + docker inspect ubuntu:14.04.2


### 自定义容器名

+ `docker run --name=容器名 -i -t ubuntu /bin/bash`

> 创建交互式容器并命名

### 重新启动停止的容器

+ `docker start -i 容器名`


### 查看容器进程

docker top 容器名

### 启动进程(当服务关闭后重启，需要先查看下进程是否启动，没有启动则用下列方法启动)

docker exec 容器名 进程
docker exec web nginx

### 删除已经停止了的容器

`docker rm 容器名`

---

### 守护式容器

docker run -i -t IMAGE /bin/bash // 创建
ctrl+p+q // 退出docker(后台运行)

### 查看容器日志

docker logs -f // 一直查看
docker logs -t // 查看某一时间的(时间搓)
docker logs --tail // 数量，不指定时，返回所有的日志


### 在运行中的容器启动新进程

docker exec [-d][-i][-t] 容器名

docker exec -i -t 容器名 /bin/bash


### 停止守护式容器

docker stop 容器名
docker kill 容器名

---

### 查看docker镜像

docker images

### 删除镜像

docker rmi 
    + f 强制删除
    + no-prune 保留被打标签的副镜像
+ 删除某个镜像的标签
    + docker rmi ubuntu:14.04
+ 删除某个镜像
    + docker rmi 5d6sadsa6546 // 5d6sadsa6546(IMAGE ID)
+ 删除多个
    + docker rmi ubuntu:14.04 ubuntu:14.02
+ 删除ubuntu中所有的镜像
    + docker rmi $(docker images -q ubuntu)