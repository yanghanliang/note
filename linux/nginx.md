+ sudo apt-get install nginx // 安装nginx
+ nginx -v // 查看nginx的版本
+ whereis nginx // 查看nginx的安装目录


+ cd /etc/nginx/conf.d
+ sudo vi douban-com-8081.conf 
	+ 创建文件
	+ douban - 项目名
	+ com - 域名
	+ 8080 - 端口
	+ 这样命名只是一个好习惯

> 在文件中写入以下配置

```
upstream douban-demo { 			// douban-demo应用的名字
  server 127.0.0.1:8080;		// 本地的虚拟主机(不用apache)
}

server {
  listen 8080;
  server_name 123.207.139.237;   // 服务器的ip地址

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Nginx-Proxy true;

    proxy_pass http://douban-demo;	// douban-demo 应用名字
    proxy_redirect off;
  }
}

```

+ sudo nginx -t  // 检测配置是否配置成功
+ sudo nginx -s reload  // 重启nginx
+ 修饰(隐藏)nginx的版本
	+ cd /etc/nginx
	+ sudo vi nginx.conf
	+ server_tokens off  // 将他的#去掉,打开
	+ sudo service nginx reload  // 配置重载


pm2 start npm -- run dev   // pm2启动node项目


######################

upstream blog {
  server 127.0.0.1:8080;
}

server {
  listen 80;
  server_name www.zdxhn.top;

  location / {
    proxy_set_header X-Real-IP 123.207.139.237;
    proxy_set_header X-Forward-For 127.0.0.1 ;
    proxy_set_header Host 127.0.0.1;
    proxy_set_header X-Nginx-Proxy true;

    proxy_pass http://blog;
    proxy_redirect off;
  }
}


######################


server {
  listen   8089;
  server_name localhost;

  location / {  # 只有一个/后面没有路径，表示访问首页
    proxy_pass http://localhost:8080;
  }
}


必须添加安全组, 添加完成后 -> 需要关联实例


###

启动nginx
[root@mn-dm-poc01 conf]# cd /usr/local/nginx/sbin/
[root@mn-dm-poc01 sbin]# ./nginx -s reload


### 查看网站是否可以访问

curl http://127.0.0.1:8080


### windos 下操作nginx

start .\nginx.exe
.\nginx.exe -s reload
.\nginx.exe -v


### 方案一 

#### 1. 修改hosts文件
+ 在这个目录`C:\Windows\System32\drivers\etc`下，找到 HOSTS 文件

添加 `127.0.0.1 www.demo.com`

#### 2. 修改接口地址

+ 基地址改为: `http://www.demo.com/`

#### 3. nginx 配置

```
server {
  listen       80;
  server_name  www.demo.com;

  location  ^~/bookmark/ {
    proxy_pass http://localhost:3001/;
  }
}

```

重启nginx,强制刷新浏览器，防止缓存


