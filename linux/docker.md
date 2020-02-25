
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

重启 docker 项目 
    + docker start osec


-------------------------

mn-dm-poc01  蒙牛测试
mn-dm-prd01  蒙牛开发

---


# 开始学习 docker 2020-02-24

### 查看容器

+ `docker ps` 查看正在运行的
+ `docker ps -a` 查看所有的
+ `docker ps -l` 查看刚刚创建的
+ `docker inspect [id|name]` 查看详细的配置信息


### 自定义容器名

+ `docker run --name=容器名 -i -t ubuntu /bin/bash`

> 创建交互式容器并命名

### 重新启动停止的容器

+ `docker start -i 容器名`

### 删除已经停止了的容器

`docker rm 容器名`


---



