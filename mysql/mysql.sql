#开启MySQL 服务器
--services.msc  (ctr+r)
--net start mysql  (cmd)

#登录mysql服务器
--mysql -h127.0.0.1 -P3306 -uroot -p;
--mysql -uroot -p;
--可以用 \G 来结束程序

-- \s 来查看服务器和客户端的相关信息(我在哪?)

-- 创建一个数据库
CREATE DATABASE `quanzhan5`;
-- 不能使用纯数字的名称
CREATE DATABASE  05;
-- 正确的采用纯数字的命名方法,需要用`` 包裹起来
create database `05`;

create database `jd`;

-- 创建一个中文名 的数据库
-- 需要给中文名用``包裹
create database 黑马;
-- 创建一个中文名 的数据库
-- 需要给中文名用``包裹
create database `黑马`;

-- 客户端告知服务器我们cmd的编码格式
-- 服务器会自动进行转码
set names gbk;


--显示所有的数据库
-- 显示所有的数据库
#我也是注释,我好用,用我吧
show databases;

-- 查看数据库的创建语句(库选项)
show create database `quanzhan5`;

-- 删除数据库
drop database `star`;-- ''

-- 把jd的默认的编码格式utf8 改成gbk
alter database `jd` charset=gbk;

#创建一个数据表,我们创建一个person
#学号,姓名
create table `person` (
	xuehao int,		-- int整形
	name varchar(20) -- varchar 字符串
);

#显示的指定一下数据库名
create table `quanzhan5`.`person` (
	xuehao int,		-- int整形
	name varchar(20) -- varchar 字符串
);

-- use 隐式指定数据库
-- 当我们使用use 指定了数据库之后,如果不切换数据库,
-- 默认会在当前的窗口中一直使用
use quanzhan5;

-- 创建一个什么字段都没有的表
create table person2();

#创建一个商品表
create table jd_goods(
	goods_name varchar(255),
	goods_jinhuo_price float,
	goods_lingshou_price float,
	goods_miaoshu text,
);

#错误的 最后一个字段不要加逗号
create table jd_goods(
	goods_name varchar(255),
	goods_jinhuo_price float,
	goods_lingshou_price float,
	goods_miaoshu text,
);
#错误的 比较隐蔽,字段名和字段类型之间没有空格
create table jd_goods(
	goods_name 						varchar(255),
	goods_jinhuo_price				float,
	goods_lingshou_price 			float,
	goods_miaoshu 					text
);


-- 查看数据表的创建语句
show create table jd_goods;

-- 删除表
drop table jd_goods;
-- 如果jd_goods表存在就删了,如果不存在就不保存
drop table if exists jd_goods;


create database jd;

create database if not exists jd;

create table person (
	name varchar(20)
);

create table if not exists person (
	name varchar(20)
);

-- 改变数据表的名字
rename table person to new_person;
-- 可以修改多个表名
rename table new_person to person,person1 to person2;

--添加字段
-- 给person增加一个age字段,age字段的类型为int
alter table person
add age int;

ALTER TABLE article
ADD COLUMN rewazrd int(11) NOT NULL DEFAULT 0 COMMENT '打赏数',
ADD COLUMN reprint int(11) NOT NULL DEFAULT 0 COMMENT '转载数',
ADD COLUMN comment_number int(11) NOT NULL DEFAULT 0 COMMENT '评论数';

-- 删除字段名
alter table person
drop age;

-- 我们把xuehao名改为id
alter table person
change xuehao id int;

-- 我们把id名改为stu_id
alter table person
change id stu_id;

-- 修改类型
alter table person
modify age int;

-- 将表的utf8编码改为gbk
alter table person 
charset=gbk;

-- 插入数据
insert into person(name,id) values 
	("鹏哥",1);
-- 严格的数据类型
insert into person(name,id) values 
	(2,"鹏哥");

-- 如果我们省略字段列表(所有字段都插入数据)
-- 值列表的顺序必须 和表的字段顺序一致
-- id,name,age
insert into person values 
	(3,'迪丽热巴',18);

-- 如果插入多条相同字段的数据,可以添加多个值列表
-- 值列表之间用逗号分隔
insert into person values 
	(4,'迪丽热巴',28),
	(5,'迪丽热巴',38),
	(6,'迪丽热巴',48);


-- 查询所有的数据
select * from person;

-- 查询name和age字段
select name,age from person;

-- 查询年龄小于30的
select name,age from person
where age<30;

delete from person where age = 18;
-- 删除数据,如果不加where所有的数据都会被删除
delete from person;


-- 更新数据
update person set age=20 
	where id=6;

-- 如果不加where所有的数据都会变化
update person set age = 22;

-- 查看校对规则
show collation;

-- 我们创建2个数据库
-- 一个是校验规则是 utf8_general_ci  不区分大小写
create table t_ci (
	name varchar(10)
) collate=utf8_general_ci;
-- 插入数据的时候,如果数据的类型为字符串,必须用引号包裹
insert into t_ci values ('a'),('B'),('c');
-- ci结尾的 不区分大小写
select * from t_ci where name="b";
-- 另外一个校验规则是 utf8_bin		按照二进制
create table t_bin (
	name varchar(10)
)collate=utf8_bin;

insert into t_bin values ('a'),('B'),('c');
-- 以bin结尾的 是根据二进制进行查询
select * from t_bin where name="b";


-- 创建一个 myisam的数据表
create table t_myisam (
	name varchar(10)
)engine=myisam;
-- 创建一个innodb的数据表
create table t_innodb(
	name varchar(10)
)engine=innodb;


##########################第二天###########################

create table int_1 (
	a tinyint,  -- 范围 -128+127
	b smallint -- 范围 -32768 +32767
);

insert into int_1 values 
	(10,10);

insert into int_1 values 
	(255,255); -- 错误的数值

-- 指定M 是没有任何明显效果的
-- 因为默认就是右对齐,左边补空
alter table int_1 
add c tinyint(2);

insert into int_1(a,b,c) values 
	(10,10,10);

-- 123
-- M 单独使用只是一个形式,如果你插入的数据超过M的宽度,
-- 只要它的类型范围之内,就可以插入
insert into int_1 values
	(111,111,111);

-- type(M) 和zerofill配合使用才会发生化学反应
create table int_2 (
	a tinyint(3) zerofill,
	b smallint(4) zerofill
);

insert into int_2 values (1,1);

-- 001 0001

-- unsigned 是无符号类型,一定要紧随整形后边
alter table int_2 
add c tinyint unsigned;

insert into int_2(c) values (255);

-- 创建float
create table float_1 (
	a float,
	b double
);

insert into float_1 values 
	(1200000000,1200000000000000);

-- 12345678901234567890
-- 指数形式:1.234567890123456789*10的19次方
-- 小数是以 无限接近于真实值的形式存在的.
-- 它不能保存这么精确
insert into float_1 values
	(12345678901234567890,12345678901234567890);

-- 3.1415926
insert into float_1 values 
	(3.1415926,3.1415926);


-- type(M,D)
create table float_2 (
	a float(5,3),
	b double(10,2)
);

-- a 能够插入的最大值是多少?
-- 11.111
insert into float_2 values
	(99.999,99.999);

insert into float_2(a) values(100);

-- 鹏哥 现有有身价
-- 12345678901234567890

create table float_3 (
	a double
);

insert into float_3 values (12345678901234567890);

-- 重定义类型
alter table float_3
modify a decimal;

insert into float_3 values (0.12345678901234567890);

-- 总位数为20位,整数位为 20-16
alter table float_3
modify a decimal(20,16);

insert into float_3 values (0.12345678901234567890);


-- 日期类型中的 datetime 和timestamp
create table time_1 (
	a datetime,
	b timestamp
);

-- 插入的形式是一样的 yyyy-mm-dd HH:ii:ss
-- 以字符串的形式插入
insert into time_1 values 
	('2017-12-22 06:55:25','2017-12-22 10:40:10');

-- datetime记录的范围从1000-01-01 00:00:00 ~ 9999-12-31 23:59:59
-- timestamp 从1970-01-01 00:00:00~2038-01-19 
-- 记录字段为 生日 我们可以选择datetime
-- 订单下单的时间: 我们可以选择timestamp 或者 datetime
insert into time_1(a) values
	('1945-11-29 12:12:12');

insert into time_1(b) values
	('1945-11-29 12:12:12');

-- 年月日 时分秒 数据正确,格式可以无所谓
insert into time_1 values 
	('2017,12,22,06,55,25','2017/12/22 10/40/10'); --正确的

insert into time_1 values 
	('2017,13,22,06,55,25','2017/12/22 10/40/10'); -- 错误的

-- 
insert into time_1 values (now(),'2017/12/22');


alter table time_1 
add c date;
-- date 插入的数据分隔符也是没有任何要求的
insert into time_1(c) values
	('2000,12,12');


-- time 第一层含义表示当前的时间 
-- 第二次含义就是距离一个时间有多少天多少个小时
alter table time_1
add d time;

insert into time_1(d) values 
		('11:00:00');

-- 距离时间结束还有1天 10个小时
-- d HH:ii:ss
-- HH:ii:ss
insert into time_1(d) values
	 ('1 10:00:00'),
	 ("34:00:00");


-- varchar 和char 声明的时候都需要使用 type(M)
-- M表示 字符的长度 , 并不是字节长度
create table string_1 (
	a char(10),
	b varchar(10)
);
-- 字符串插入必须要用引号包裹
insert into string_1 values
	('你若安好','便是晴天');

insert into string_1 values
	('我很长,有多长,你试试','便是晴天');

create table string_2 (
	name varchar(20),
	xihuan enum("林志玲","如花","迪丽热巴","鹏哥")
);

insert into string_2 values
	("正哥","迪丽热巴");

insert into string_2 values 
	("正哥","刘欢");
-- 我们可以通过插入整数值,来选择enum中的数据
-- 默认是从1开始
insert into string_2 values 
	("正哥",1);

-- 添加一个hobby 喜好字段
alter table string_2
add hobby set("足球","篮球","兵乓球","羽毛球");

-- 错误数据
insert into string_2(hobby) values 
	("乒乓球,羽毛球");
-- 正确数据
insert into string_2(hobby) values 
	("兵乓球,羽毛球");

insert into string_2(hobby) values 
	(9);

create table student (
name varchar(20),
sex enum("男","女","保密"),
age tinyint unsigned, 
height float(5,2),
weight float(5,2),
money decimal(20,2),
address varchar(100),
birthday date,
hobby set("足球","篮球","柳岩","乒乓球"),
description text
)

insert into student(sex) values
	("女");

desc student;

-- 修改student表中的name为非空
alter table student
modify name varchar(20) not null;


insert into student(name) values
	("鹏哥");


desc student;
-- 给name设置一个默认值
alter table student
modify name varchar(20) not null default "学生";

-- name字段会自动填充为学生
insert into student(sex) values
	("女");

-- 我们来创建一个学生表,给一些字段设置默认值
create table student_1 (
	name varchar(20) not null default '学生',
	sex enum("男","女","保密") default "保密",
	age tinyint unsigned default 18
);

insert into student_1 values("成哥",default,default);


-- 给学生表添加一个主键
alter table student_1
add id int unsigned primary key;


insert into student_1(id,name) values 
	(1,"鹏哥");
-- id 重复 或者id没有设置都是错误的
insert into student_1(id,name) values 
	(0,"杨哥");

-- id 为主键,主键不能为null
insert into student_1(id,name) values 
	(null,"杨哥");


-- 设置主键的第二种方式
create table student_2 (
	id int unsigned ,
	name varchar(20) not null default '学生',
	sex enum("男","女","保密") default "保密",
	age tinyint unsigned default 18,
	primary key(id)
);


create table student_2 (
	id int unsigned ,
	name varchar(20) not null default '学生' primary key,
	sex enum("男","女","保密") default "保密",
	age tinyint unsigned default 18,
	primary key(id)
);


-- 组合主键
-- 必须以这样的形式来创建组合主键
create table user (
	host varchar(20) ,
	user varchar(20) ,
	description text,
	primary key(host,user)
);

insert into user values 
	('192','root','一条记录'),
	('192','abc','一条记录');

insert into user values 
	('191','root','一条记录');

-- 冲突了, host-user都一样就冲突了
insert into user values 
	('192','root','一条记录');

-- 唯一键
create table unique_1 (
	name varchar(20) not null unique key,
	age tinyint unsigned default 0
);

--创建主键索引
alert table table_name add prinmary key 取个索引名(字段)

--创建唯一索引
alert table table_name add unque key 取个索引名(字段)

--创建普通索引
alert table table_name add key 取个索引名(字段)

--创建联合索引:以普通索引


insert into unique_1 values
	("帅哥",default);

insert into unique_1 values
	("帅哥",18);

insert into unique_1 values
	("美女",18);

-- 再创建一个表格, 商品的分类表格
create table category(
	id smallint unsigned ,
	name varchar(20),
	primary key(id),
	unique key(name)
);

insert into category values
	(1,'家用电器');
-- 主键不能插入null
insert into category(id) values
	(null);
-- 唯一键可以插入null
insert into category(name) values
	(null);

-- 修改category 字段
-- 给它添加一个主键
alter table category
add c_id tinyint unsigned primary key;
-- 添加一个唯一键
alter table category
add email tinyint unsigned unique key;

-- 主键不能重复
insert into category(id,name) values
	(2,"手机"),
	(3,"电脑");


-- 创建一个商品表
create table jd_goods (
	id mediumint unsigned auto_increment,
	name varchar(100) not null ,
	price decimal(12,2),
	color enum("yellow","white","yinse") default "yinse",
	primary key(id),
	unique key(name)
);

insert into jd_goods values
	(default,"iphonex",12.34,default);

insert into jd_goods values
	(null,"iphone 8",8.88,default);
-- 修改自动增长的起始值,默认就是从1000开始
create table jd_goods_auto (
	id mediumint unsigned auto_increment,
	name varchar(100) not null ,
	price decimal(12,2),
	color enum("yellow","white","yinse") default "yinse",
	primary key(id),
	unique key(name)
) auto_increment = 1000;

insert into jd_goods_auto values
	(null,"iphone 8",8.88,default);

insert into jd_goods_auto values
	(null,"iphone 4",8.88,default);
-- comment 就是添加注释
CREATE TABLE jd_goods_comment (
	id 			mediumint unsigned 				auto_increment 		comment "主键",
	name 		varchar(100) 					not null 			comment "名字",
	price 		decimal(12,2)										comment "价格",					
	color 		enum("yellow","white","yinse") 	default "yinse" 	comment "颜色",
	primary key(id),
	unique key(name)
) ENGINE=INNODB CHARSET=utf8 AUTO_INCREMENT = 1000;


-- 创建索引
create table index_1 (
	a varchar(20),
	b varchar(20),
	c varchar(20),
	primary key(a),
	unique key(b),
	key(c)
);

########################第三天##################

-- 蠕虫复制
create table ruchong_1 (
	name varchar(20)
);

insert into ruchong_1 values ('abc');

-- 蠕虫复制
-- 自己复制自己
insert into ruchong_1 
	select name from ruchong_1;


-- 主键冲突
create table person_3 (
	id int unsigned auto_increment,
	name varchar(20) not null default '学生',
	age tinyint unsigned default 16,
	primary key(id),
	unique key(name)
)engine=myisam charset=utf8 auto_increment=1000;

insert into person_3 values (null,'阿三',20);

update person_3 set name="阿三" where id =1;


-- 插入一条数据
insert into person_3 values (null,'阿四',30);

-- update person_3 set name="阿三" where id = 2;

insert into person_3(name,age) values('阿三',30)
	on duplicate key update name='阿三',age=30;


insert into person_3(name,age) values ("阿三",40);

insert into person_3(name,age) values ("阿三",40)
	on duplicate key update name="阿三",age=40;


--更新多条数据
update goods set num=case id
	when 1 then 3
	when 2 then 4
	end
	where id in(1,2);
 

-- 我们可以通过 replace 来解决主键冲突
insert into person_3(name,age) values ("阿三",40); -- 会报错

-- 我们把 insert into person_3(name,age) values ("阿三",40); 中的insert
-- 用 replace 代替
replace into person_3(name,age) values('阿三',50);


create table person_4 (
	id int unsigned auto_increment,
	name varchar(20),
	primary key(id)
);

insert into person_4 values (null,'abc');

-- 蠕虫复制
insert into person_4(name)
	select name from person_4;

-- limit 一个参数 返回我们前5条记录
select * from person_4 limit 5;

-- limit 两个参数 第一个参数是索引值,第二个参数是条数
select * from person_4 limit 3,2;

-- 查询前5条,可以使用的语法
select * from person_4 limit 5;
select * from person_4 limit 0,5;
-- 我想删除前5条
-- 错误的语法, delete 后边跟limit的时候 limit只能有一个参数
delete from person_4 limit 0,5; 
-- 正取的语法,就是跟一个参数
delete from person_4 limit 5;

-- 把表中的数据都清空
truncate person_4;


-- 创建一个成绩表
create table score (
	english smallint unsigned, -- 英语
	chinese smallint unsigned, -- 语文
	math smallint unsigned -- 数学
);

insert into score values
	(100,100,100),
	(68,83,88),
	(23,5,8);
-- 如果只是显示字段名字
-- 加引号 和不加引号都可以
select english as 英语 ,chinese as 语文,math as 数学 from score;
select english as '英语' ,chinese as '语文',math as '数学' from score;

-- 数据表也可以用as其别名
-- 给数据表其别名不要用 引号包裹
select * from score as s cross join score as c;

select * from (select * from score where chinese>80) as s;


-- 
create table it_student(
	id int unsigned auto_increment,
	name varchar(20),
	age tinyint unsigned default 18,
	xueke varchar(20),
	sex enum("男","女"),
	primary key(id)
);

insert into it_student values
	(null,"鹏哥",22,"全栈",1),
	(null,"成哥哥",23,"Java",1),
	(null,"霞妹妹",18,"全栈",2),
	(null,"浩哥",26,"PHP",1);



-- 我们查询一下 鹏哥的id
select id from it_student where name="鹏哥";
-- 学科为全栈的人
select name from it_student where xueke="全栈";
-- 年龄 18 到 24
select * from it_student 
where age between 18 and 24;

-- 年龄是18到24 并且性别是女的
select * from it_student
where age >= 18 and age<=24 and sex='女';

-- 学科为php或者全栈
select * from it_student
where xueke="全栈" or xueke="php";
-- 或者的另外一种表示方式
select * from it_student
where xueke in('全栈','php');


select * from it_student
where xueke not in('全栈','php');

-- 查询一下,没有选择学科的人的姓名
select name from it_student
where xueke = null; -- 错误

select name from it_student
where xueke is null;

select name from it_student
where xueke is  not null;

-- 我就知道隔壁班的美女姓霞
-- %可以通配多个字符
select name,age from it_student
where name like '霞%' ;

-- 就知道她的名字2个字
-- 一个_表示通配一个字符
select name,age from it_student
where name like '霞__' ;

-- 如果我们只知道中间的字,我们把两边进行通配
select name,age from it_student
where name like "%妹%";


select name,age from it_student
where name like "__妹%";

select name,age from it_student
where name like "___妹%";

-- select 后边可以对字段的数值部分
-- 进行一个运算
select chinese+english+math as 总分 from score;

-- select 相当于把 硬盘的数据加载到了内存
-- where后边不能直接跟内存计算的数据
select chinese+english+math as t from score
where t>200;


select chinese+english+math as t from score
where (chinese+english+math)>200;

-- select chinese+english+math as t from score
-- having t>200;


-- 根据学科进行分组
select xueke from it_student
group by xueke;

-- count 是统计个数
select xueke,count(*) from it_student
group by xueke;

-- 分组中的select字段,一般只是放分组字段和聚合函数
select xueke,count(*),name,id from it_student
group by xueke;


select xueke,count(*) from it_student
group by xueke;

select xueke,count(xueke) from it_student
group by xueke;

select xueke,sum(age) from it_student
group by xueke;

select xueke,count(age) from it_student
group by xueke;

select xueke,avg(age) from it_student
group by xueke;
-- 组中的最大值
select xueke,max(age) from it_student
group by xueke;

-- 组中的最小值
select xueke,min(age) from it_student
group by xueke;

-- 按照性别进行分类,统计每个性别的人数
select sex,count(sex) from it_student
group by sex;

-- 以上的统计,没有算 null的,所以我们需要
select sex,count(*) from it_student
group by sex;


select  xueke,sex,count(*) from it_student
group by xueke,sex;


-- xueke 分组
select xueke,count(*) from it_student
group by xueke;


select xueke,count(*) from it_student
group by xueke
having count(*)>1;

-- where 子句不能在group by 后边
select xueke,count(*) from it_student
group by xueke
where count(*)>1;


select name,age from it_student
where age>20;

select name,age from it_student
having age>20;

-- where 后边不能跟统计函数
select xueke,count(*) from it_student
where count(*)>1
group by xueke;


-- 排序
-- 根据age进行排序
-- 默认是升序
select * from it_student
order by age;

-- 默认是升序
select * from it_student
order by age asc;

-- desc是降序
select * from it_student
order by age desc;


-- 先根据年龄降序排序,
-- 如果年龄相同,则根据id进行一个升序
select * from it_student
order by age desc,id asc;

-- 先根据年龄降序排序,
-- 如果年龄相同,则根据id进行一降序
select * from it_student
order by age desc,id desc;


select * from it_student;

-- 就要2条数据
select * from it_student 
limit 2;

-- 我们需要年龄最大的2个数据
select * from it_student
order by age desc 
limit 2;

-- 女生中年龄比较小的三个人
select * from it_student
where sex="女"
order by age asc
limit 3;

-- 每页返回我2条数据
-- 第一次索引从0开始
select * from it_student
limit 0,2;


select * from it_student
limit 2,2;


# 创建表
# 雇员表
create table emoloyee (
	empid int unsigned auto_increment,
	name varchar(10),
	sex enum('male','female'),
	title varchar(20),
	birthday date,
	depid int unsigned,
	primary key(empid)
);
# 部门表
create table department(
	depid int unsigned auto_increment,
	depname varchar(20),
	primary key(depid)
);
# 工资表
create table salary(
	empid int unsigned,
	basesalary decimal(10,2),
	titlesalary decimal(10,2),
	deduction decimal(10,2),
	primary key(empid)
);

#修改表结构,在部门表中添加简介字段
alter table department
add depdesc text;

#插入数据
insert into emoloyee values (1001,'张三','male','高级工程师','1975-01-01','111'),
	(1002,'李四','female','助理工程师','1985-01-01','111'),
	(1003,'王五','male','工程师','1978-01-01','222'),
	(1004,'赵六','male','工程师','1979-01-01','222');

insert into department values (111,'生产部',null),
	(222,'销售部',null),
	(333,'人事部',null);

insert into salary values (1001,2200,1100,200),
	(1002,1200,200,100),
	(1003,1900,700,200),
	(1004,1950,700,150);

#修改李四的职称为工程师,将他的基本工资改为 1700,职务工资为600
update salary set basesalary = 1700,titlesalary = 600
	where empid = 1002;


-- 7.	查询出每个雇员的雇员编号，实发工资，应发工资。
# 要什么字段 --> 雇员编号,实发工资,应发工资
# 根据要的字段确认表 --> salary
# 我们查询, 
#实际上应该发多少 =  基本工资+职务工资
#应发工资 --> 基本工资+职务工资-扣除
# 我们可以对表的字段进行运算
select empid,basesalary+titlesalary as 应发工资, basesalary+titlesalary
-deduction as 实发工资 from salary;

#8.	查询出基本工资大于2000的雇员编号
#我们要什么 --> 雇员编号
#根据要什么明确哪个表 --> salary
#条件 --> 基本工资大于2000
select empid from salary
where basesalary>2000;


#9.	查询出职称为工程师的人数
#要  工程师 人数 --> count --> 分组
#确认表是  emoloyee
# 
select title,count(title) from emoloyee
group by title
having title="工程师";

-- 这种方式也是可以的
select title,count(title) from emoloyee
where title = "工程师";

#10.	查询出部门人数为2人以上的部门编号
# 部门编号
# 雇员表
# 部门人数为2人以上 --> count --> 分组 group by 
select depid,count(depid) from emoloyee
group by depid
having count(depid)>=2;

-- count 是对内存中的数据进行操作
-- having也是对内存中的数据进行操作
select depid,count(depid) as c from emoloyee
group by depid
having c>=2;

-- select where 子句是从硬盘中将数据一条一条的比对
-- count是对所有的数据进行的统计
select count(depid) from emoloyee
where count(depid)>2;



#11.	查询姓“张”且性别为男的员工的记录。
#要的字段
#明确表
#姓“张”且性别为男
select * from emoloyee
where name like "张%" and sex="male";

-- 12.	统计各个性别的人数
# 人数 --> count --> 分组 --> 性别
 select sex,count(sex) from emoloyee
 group by sex;
 -- count(字段) 和 count(*) 的区别

-- 13.	查询出基本工资最低的2个人
-- 人 
select empid from salary
order by basesalary asc 
limit 2;
-- limit 一般和order by 配合使用


-- 14.	查询出扣除工资最多的2个人
select empid from salary
order by deduction desc 
limit 2;

-- 15.	汇总所有人的基本工资,职务工资和扣除工资.
-- 要工资
-- salary
-- 条件-->汇总所有人 --> sum
select sum(basesalary),sum(titlesalary),sum(deduction) from salary;

-- 16.	查询出所有人的平均基本工资
-- 基本工资
-- salary
-- 所有人的平均
select avg(basesalary) from salary;



####第4天###############################################
-- 主键(唯一键)冲突

insert into person_3 values (2,'阿屋',60);
insert into person_3 values (2,'阿屋',60)
	on duplicate key update id=2,name='阿屋',age=60;

replace into person_3 values (2,'阿屋',60);


-- 创建一个表,说明默认的null 和字符串的NULL的区别
create table person_4 (
	id int unsigned auto_increment,
	name varchar(20),
	primary key(id)
);

insert into person_4(id) values (1);

insert into person_4(name) values ('NULL');

-- 把it_student的2个查询,分别理解为一个是北京的表
-- 另外一个是上海的表
select * from it_student
union distinct
select * from it_student;

-- union的默认选项是去重,我们改为all就显示所有的数据了
select * from it_student
union all
select * from it_student;

-- 字段数量不一致
select name,age from it_student
union all
select * from it_student;

-- 字段列表数量一致
select name from it_student
union all
select age from it_student;

-- 我想查询一下, 学生表中年龄最大的一个人和年龄最小的一个人的信息
select name from it_student
order by age desc limit 1;

select * from it_student
order by age asc limit 1;


-- 正确的子句中出现order by需要用()把子句包裹起来
(select name,age from it_student
order by age desc limit 1)
union 
(select name,age from it_student
order by age asc limit 1)
;
-- 没有给子句进行()包裹,如果union出现order by
-- 必须在union的最后
select name,age from it_student
order by age desc limit 1
union 
select name,age from it_student
order by age asc limit 1
;

-- union 联合出来的数据也是可以进行筛选的,只不过需要作为数据源
-- 当然排序的话就可以不用作为数据源



select * from ((select name,age from it_student
order by age desc limit 1)
union 
(select name,age from it_student
order by age asc limit 1)) as s 
where age is not null;



-- select * from it_student
-- where age=(select max(age) from it_student) 
-- or age=(select min(age) from it_student);

-- 2个表格
create table t_left(
	a varchar(10),
	b varchar(20)
);

create table t_right(
	x varchar(10),
	y varchar(20),
	z varchar(20)
);

insert into t_left values
	("o no",'o year'),
	('o my god','ooo '),
	('kiss','baby ');


insert into t_right values 
	('圣诞节','元旦节','春节'),
	('光棍节','情人节','劳动节'),
	('清明节','端午节','重阳节'),
	('儿童节','中秋节','国庆节');

-- 2个表交叉连接
select * from 
t_left cross join t_right;

-- 现在有2个表,一个是学生表
-- 另外一个班级表
create table stu_student (
	id int unsigned auto_increment,
	name varchar(20),
	score int,
	sex enum('男','女'),
	class_id int,
	primary key(id)
);

create table stu_class (
	class_id int unsigned auto_increment,
	name varchar(20),
	room_num varchar(20),
	primary key(class_id)
);

insert into stu_student values
	(null,'孙悟空',99,1,1),
	(null,'唐僧',100,1,1),
	(null,'女儿国国王',96,2,2);

insert into stu_class values
	(null,"全栈",'306'),
	(null,"UI",'206');



-- 交叉连接
select * from 
stu_student cross join stu_class;

-- select * from 
-- stu_student cross join stu_class
-- where stu_student.class_id = stu_class.class_id;


-- 内连接
insert into stu_student values
	(null,'妖精',45,2,null);

-- 我的需求是 查询已经开班的学生的信息
select * from 
stu_student inner join stu_class
where stu_student.class_id = stu_class.class_id;

select * from 
stu_student inner join stu_class
on stu_student.class_id = stu_class.class_id;


-- 我们的内连接不添加条件,这个时候的结果就是交叉连接
select * from 
stu_student inner join stu_class;


-- 把已经报名的所有学生的信息返回给我
-- 已经开班的和没开班的
select * from 
stu_student left outer join stu_class
on stu_student.class_id = stu_class.class_id;

-- 左和右就是一个相对的概念
select * from 
stu_class right outer join stu_student
on stu_class.class_id = stu_student.class_id;

-- 外链接只能用on
select * from 
stu_class right outer join stu_student
where stu_class.class_id = stu_student.class_id;


-- 要所有学生的

-- 我们要指定字段的数据
-- 指定字段的数据是2个表中
-- 所以我们对2个表进行了连接
-- 又因为是要所有学生的,以学生表为主
select stu_student.name,stu_class.name,room_num from
stu_student left outer join stu_class
on stu_student.class_id = stu_class.class_id;

-- 要所有学生的
-- 我们要指定字段的数据
-- 指定字段的数据是2个表中
-- 所以我们对2个表进行了连接
-- 又因为是要所有学生的,以学生表为主
select s.name,c.name,room_num from
stu_student as s left outer join stu_class as c
on s.class_id = c.class_id;



select * from 
stu_student as a cross join stu_student as b
cross join stu_student as c



insert into stu_student values
	(null,'猪八戒',100,1,1);

select * from stu_student
order by score desc
limit 1;
-- 查询出分数最高的人员的信息(名字和分数)
-- 先明确要什么 分数和名字
-- 确定表 --> stu_studnet
-- 分数最高的分你得先查询出来
-- 让分数 = 最高分的 才是正确的结果
select name,score from stu_student
where score = 最高分;

-- 写一个假数据去测试逻辑对不对
select name,score from stu_student
where score = 100;
-- 查询出最高分
select max(score) from stu_student;

select score from stu_student
order by score desc
limit 1;


-- 把子查询的结果 套到主(父)查询
select name,score from stu_student
where score = (select max(score) from stu_student);


select name,score from stu_student
where score = (select score from stu_student
order by score desc
limit 1);


-- 跟孙悟空一个班级的同学都有谁
-- 要名字 name
-- stu_student
-- 跟孙悟空同一个班级

-- 跟孙悟空同一个班级 -- > 孙悟空在哪个班
select name from stu_student
where class_id = 1;

-- 再去写子查询
select class_id from stu_student
where name = "孙悟空";

select name from stu_student
where class_id = (select class_id from stu_student
where name = "孙悟空");

-- 查询出已经开班的学生的姓名和班级id
select name,class_id from stu_student
where class_id is not null;


-- 用子查询
select name,class_id from stu_student
where class_id in (1,2);


-- 1,2是通过查询出来的
select class_id from stu_class;

select name,class_id from stu_student
where class_id in (select class_id from stu_class);

insert into stu_student values
	(null,'沙僧',60,1,1);
insert into stu_student values
	(null,'白骨精',61,2,2);

-- 1班和2班
-- 从1班中找出 比2班 所有人分数都高的 人员名字

--需要: 名字
select name from stu_student
where  class_id = 1 
and score > 2班的最高分

-- 2班的最高分
select max(score) from stu_student
where class_id=2;

select name,score from stu_student
where  class_id = 1 
and score > (select max(score) from stu_student
where class_id=2);

-- 第二种方式
select score from stu_student
where class_id=2;

select name from stu_student
where  class_id = 1 
and score > all (
	select score from stu_student
where class_id=2
);


select name from stu_student
where  class_id = 1 
and score > any (
	select score from stu_student
where class_id=2
);


-- 我们查询一下年龄最小,分数最高的人员信息
select name from stu_student
where (age,score)=(select min(age),max(score) from stu_student);

select min(age),max(score) from stu_student;


-- 替代语句
select name from stu_student
where age=(select min(age) from stu_student) 
and score=(select max(score) from stu_student);

-- 我想查询一下男生中,分数最高的前3个人的名字
select name,score from stu_student
where sex = '男'
order by score desc 
limit 3;


-- select name,score from 表名|数据源

select name,score from (select * from stu_student 
where sex="男") as a 
order by score desc 
limit 3;

-- 多行多列作为数据源要其别名 不起别名是错误的
select name,score from (select * from stu_student 
where sex="男")  
order by score desc 
limit 3;

select * from stu_student 
where sex="男";




(select name,age from it_student
order by age desc limit 1)
union 
(select name,age from it_student
order by age asc limit 1)
;

-- 返回给我们一条 age为null的数据
-- 这个时候我们可以对结果再次进行筛选
(select name,age from it_student
order by age desc limit 1)
union 
(select name,age from it_student
order by age asc limit 1)
where age is not null;

(select name,age from it_student
order by age desc limit 1)
union 
(select name,age from it_student
order by age asc limit 1)
having age is not null;

((select name,age from it_student
order by age desc limit 1)
union 
(select name,age from it_student
order by age asc limit 1))
having age is not null;


select * from ((select name,age from it_student
order by age desc limit 1)
union 
(select name,age from it_student
order by age asc limit 1)) as a 
where age is not null;


-- exists
-- 子查询有返回结果,则为真
select * from stu_student
where exists (select * from stu_student);

select * from stu_student 
where exists (select * from stu_student where name like "神仙姐姐");

-- 查询出已经开班的学生的信息
select * from stu_student
where exists (select * from stu_class 
	where stu_class.class_id=stu_student.class_id
	);
-- select *|字段 from 表名|数据源
-- where
-- group by 
-- having 
-- order by 
-- limit;

insert into emoloyee(name) values ("义哥");
-- 6.	查询出每个雇员的雇员编号，姓名，基本工资，应发工资。
-- 我们要什么??? 雇员编号,姓名,基本工资,应发工资
-- 根据字段确定是2个表 salary 和emoloyee表
-- 
select s.empid,name,basesalary,basesalary+titlesalary from 
salary as s inner join emoloyee as e
on s.empid = e.empid;

select s.empid,name,basesalary,basesalary+titlesalary from 
salary as s right outer join emoloyee as e 
on s.empid = e.empid;


-- 7.	查询雇员的雇员编号，姓名，职称，部门名称，基本工资。
-- 我们要的字段 设置到3个表
-- salary,emoloyee,deparemnt
select e.empid,name,title,depname,basesalary from 
emoloyee as e inner join department as d
on e.depid = d.depid
inner join salary as s 
on s.empid = e.empid;

select e.empid,name,title,depname,basesalary from 
emoloyee as e left outer join department as d 
on e.depid = d.depid 
left outer join salary as s 
on s.empid = e.empid;


select e.empid,name,title,depname,basesalary from
emoloyee as e inner  join department as d 
inner  join salary as s 
on e.depid = d.depid  and s.empid = e.empid;

-- 8.	查询出和张三同一个部门的雇员姓名
-- 我们要 雇员姓名
-- emoloyee
-- 和张三同一个部门
	-- 张三的部门 select depid from emoloyee where name = "张三"
	-- emolyee 的id = 查询的id
select name from emoloyee
where depid = 111;

-- 查询张三的部门id
select depid from emoloyee
where name = "张三";

select name from emoloyee
where depid = (select depid from emoloyee
where name = "张三");

-- 9.	查询出职称为工程师的基本工资
-- 基本工资 basesalary   -->需要知道员工的id
-- 表 --> salary
-- 职称为工程师的id
 select empid from emoloyee
 where title = "工程师";

-- 错误的写法
select basesalary from salary
where empid = (
select empid from emoloyee
 where title = "工程师"
);

select basesalary from salary
where empid in (
select empid from emoloyee
 where title = "工程师"
);

select basesalary from 
salary as s left outer join emoloyee as e 
on s.empid = e.empid
where title = "工程师";


-- 10.	查询出生产部门的雇员姓名,职称,部门名称和基本工资
-- 必须把三个表连接起来

-- 11.	查询出比销售部所有人薪资都高的生产部人员姓名
-- 人员姓名
-- emoloyee
-- 条件   生产部的人
-- 条件 比销售部所有人薪资都高
-- 逻辑是正确的再通过子查询套进去
select name from 
emoloyee as e left outer join salary as s
on e.empid = s.empid 
where depid = 111 
and basesalary > 1950;


select depid from department 
where depname = "生产部";

select name from 
emoloyee as e left outer join salary as s
on e.empid = s.empid 
where depid = (select depid from department 
where depname = "生产部") 
and basesalary > 1950;



-- max
-- all

select basesalary from 
salary as s left outer join emoloyee as e
on s.empid = e.empid
left join department as d 
on e.depid = d.depid
where depname = "销售部";

select name from 
emoloyee as e left outer join salary as s
on e.empid = s.empid 
where depid = (select depid from department 
where depname = "生产部") 
and basesalary > all (
	select basesalary from 
	salary as s left outer join emoloyee as e
	on s.empid = e.empid
	left join department as d 
	on e.depid = d.depid
	where depname = "销售部"
);


-- 12.	查询出比销售部任意一人薪资高的生产部人员姓名

-- 13.	查询出基本工资最高并且扣款最多的雇员编号
-- 行子查询
-- empid
-- salary
-- 出基本工资最高并且扣款最多
-- 求 基本工资最高的 和 扣款最多的
-- select empid from salary
-- where basesalary = (基本工资最高)
-- and deduction = (扣款最高)

select max(basesalary),min(deduction) from salary;

select empid from
salary 
where (basesalary,deduction) = 
(select max(basesalary),min(deduction) from salary);


-- 14.	查询出生产部门基本工资最高的人的姓名,基本工资
-- 要什么 : 姓名,基本工资
-- 表 --> emoloyee 和 salary
-- 生产部门基本工资最高的人
	-- 生产部门
	-- 基本工资最高的人
select name,basesalary from 
emoloyee as e left outer join salary as s 
on e.empid = s.empid
where depid = 111
and basesalary = 2200;

-- 111 --> 生产部门
select depid from department
where depname = "生产部";


select name,basesalary from 
emoloyee as e left outer join salary as s 
on e.empid = s.empid
where depid = (select depid from department
where depname = "生产部")
and basesalary = 2200;

-- 2200 --> salary 
select max(basesalary) from
salary as s left join emoloyee as e
on s.empid = e.empid
left join department as d 
on e.depid = d.depid
where depname = "生产部";


select name,basesalary from 
emoloyee as e left outer join salary as s 
on e.empid = s.empid
where depid = (select depid from department
where depname = "生产部")
and basesalary = (select max(basesalary) from
salary as s left join emoloyee as e
on s.empid = e.empid
left join department as d 
on e.depid = d.depid
where depname = "生产部");

-- 15.	查询出生产部门和销售部门基本工资最高的人的部门,姓名和基本工资


-- 首先明确要查询的字段
-- 根据查询的字段 确定要查询的表
-- 分析条件
	-- 先假设
	-- 套用一个假数据来判断我们的逻辑是否正确
	-- 再去完成子查询
	-- 最后每把一个子查询套回到父查询的时候都要测试一把
-- select * from 表 
-- where 


select * into outfile "C:/Users/Ricky/Desktop/a.txt" 
from it_student;

-- 路径的斜杠要正确 /
select * into outfile "C:\Users\Ricky\Desktop\a.txt" 
from it_student;


load data infile "C:/Users/Ricky/Desktop/a.txt"
into table it_student;


source C:/Users/Ricky/Desktop/a.sql

-- 创建一个localhost用户
create user "abc"@"localhost" identified by "123456";

-- 创建一个允许本网段的人登录的账号
create user "abc"@"192.168.149.%" identified by "123456";

grant all on *.* to "abc"@"192.168.149.%";

drop user "abc"@"192.168.149.%";


-- 删除
-- delete from 表名 limit 一个参数
-- delete from 表名 where 子句
delete from it_student
	where id in (5,6);

delete from it_student
	order by id desc 
	limit 2;

-- having 和 where
-- having 和where 都是筛选

select name,age from it_student
where age>18;


select name,age from it_student
having age>18;

-- where 是对 从硬盘中的数据筛选到内存
-- having 是对内存中的数据再次筛选
select name,age from it_student
having xueke='java';

select *|字段 from 表|数据源
where
group by 
having 

#######################第5天##########################

create table jd_user (
	user_id int unsigned auto_increment,
	user_name varchar(20),
	primary key(user_id)
);

-- 添加外键进行数据约束
create table jd_order (
	order_id int unsigned auto_increment,
	user_id int unsigned,
	order_time datetime,
	primary key(order_id),
	foreign key(user_id) references jd_user(user_id)
) engine=innodb charset=utf8 auto_increment = 10000;

insert into jd_user values (null,"雷哥");

create table jd_order (
	order_id int unsigned auto_increment,
	user_id int unsigned,
	order_time datetime,
	primary key(order_id)
) engine=innodb charset=utf8 auto_increment = 10000;

-- 添加外键进行数据约束
create table jd_order (
	order_id int unsigned auto_increment,
	user_id int unsigned,
	order_time datetime,
	primary key(order_id),
	foreign key(user_id) references jd_user(user_id)
) engine=innodb charset=utf8 auto_increment = 10000;

-- 如果表已经创建好了我们可以通过 alter 修改表来添加外键
alter table jd_order
add foreign key(user_id) references jd_user(user_id);


insert into jd_order values (null,1,now());

-- 插入一条不符合要求的数据
-- 我们没有id为100的这个人
insert into jd_order values (null,100,now());

-- 删除外键,删除外键的时候必须
-- 通过show create table 来查看外键名
alter table  jd_order
drop foreign key jd_order_ibfk_1;


-- 创建外键的注意事项
-- 先创建父表
create table jd_user (
	user_id int unsigned auto_increment,
	user_name varchar(20),
	primary key(user_id)
);

insert into jd_user values(null,"老大");

-- 再去创建子表
create table jd_order (
	order_id int unsigned auto_increment,
	user_id int unsigned,
	order_time datetime,
	primary key(order_id),
	foreign key(user_id) references jd_user(user_id)
) engine=innodb charset=utf8 auto_increment = 10000;

insert into jd_order values 
	(null,1,now()),
	(null,1,now()),
	(null,1,now());

delete from jd_user where user_id = 1;

-- 我们以 父表删除,子表为null
-- 先删除外键
-- show create table jd_order
-- 再删除
alter table jd_order
drop foreign key jd_order_ibfk_1;
-- 再添加外键
alter table jd_order
add foreign key(user_id) references jd_user(user_id) 
on delete set null;


-- 创建一个myisam存储引擎表
create table jd_myisam_order (
	order_id int unsigned auto_increment,
	user_id int unsigned,
	order_time datetime,
	primary key(order_id),
	foreign key(user_id) references jd_user(user_id)
) engine=myisam charset=utf8 auto_increment = 10000;



-- 图书管理系统
-- 用户表
	-- id
	-- 名字
	-- 班级

-- 图书表
	-- id
	-- 书名
	-- 价格

-- 借阅表
-- 谁借阅 user_id 
-- 借阅了那本书 book_id
-- foreign key(user_id) references user(id),
-- foreign key(book_id) references book(id)

-- 创建一个只显示学生名字和学科的视图
-- 视图名最好有一个前缀和我们的真实表进行区分
-- jd_user
-- v_jd_user
-- vw_jd_user

CREATE VIEW v_name_xueke as
	select name,xueke from it_student;


select * from v_name_xueke
where xueke="全栈";

-- 查看所有视图
show tables;
-- 查看视图表结构
desc v_name_xueke;

-- 查看视图的创建语句
show create view v_name_xueke;

-- 修改视图
alter view v_name_xueke as 
select name from it_student;

-- 删除视图
drop view v_name_xueke;


create view v_shengchanbu_max_salary as 
select name,basesalary from 
emoloyee as e left outer join salary as s 
on e.empid = s.empid
where depid = (select depid from department
where depname = "生产部")
and basesalary = (select max(basesalary) from
salary as s left join emoloyee as e
on s.empid = e.empid
left join department as d 
on e.depid = d.depid
where depname = "生产部");


-- create view v_max as 
-- 	(select max(basesalary) from
-- salary as s left join emoloyee as e
-- on s.empid = e.empid
-- left join department as d 
-- on e.depid = d.depid
-- where depname = "生产部");


create table goods (
	id int unsigned auto_increment,
	name varchar(20),
	orginal_price decimal(10,2),
	primary key(id)
);

insert into goods values (null,'玉石',1000);

create view v_jinjia as
	select name,orginal_price+10000 from goods;

alter view v_jinjia as
	select name,orginal_price+10000 as jinjia from goods;

-- 
(select * from it_student)
union all
(select * from it_student)


create view v_all_xiaoqu_student as 
	(select * from it_student)
	union all
	(select * from it_student);


select name,basesalary from 
emoloyee as e left outer join salary as s
on e.empid = s.empid;

create view v_emoloyee_salary as 
	select e.empid,e.name,s.basesalary from 
emoloyee as e left outer join salary as s
on e.empid = s.empid;


-- 我们要的是 每个班中分数最高的一个人的信息
-- 错误的.
select name,score,class_id from stu_student
group by class_id
order by score desc;

-- 先排序,再分组
-- 正确的是
select * from  (
	select name,score,class_id from stu_student
order by score desc
) as s
group by class_id;


-- 把排序好的结果放到视图中

-- 合并算法
create algorithm=merge view v_merge as 
	select name,score,class_id from stu_student
	order by score desc;

-- 临时表算法
create algorithm = temptable view v_temp as 
	select name,score,class_id from stu_student
	order by score desc;


-- 合并算法分组结果
select * from v_merge 
	group by class_id;

-- 合并算法是将 视图中的sql语句和现在的sql语句进行合并
	select name,score,class_id from stu_student
	group by class_id
	order by score desc;

-- 临时表分组结果
select * from v_temp
	group by class_id;


drop table if exists jd_goods;

create table jd_goods (
	goods_id int unsigned auto_increment,
	goods_name varchar(20),
	goods_num int default 100,
	primary key(goods_id)
);

drop table if exists jd_order;
create table jd_order (
	order_id int unsigned auto_increment,
	goods_id int unsigned,
	goumai_num int,
	add_time timestamp,
	primary key(order_id) 
);

insert into jd_goods values (null,"咖啡",100);

update jd_goods set goods_num = goods_num - 5;

-- 下单
insert into jd_order values (null,1,5,now());

-- 有一个订单表 -- jd_order
-- 有一个库存表 -- jd_goods
-- 当我们给订单表插入数据之后,进行事件的触发, 
-- 触发库存表减少
--  for each row 是行级操作
-- 修改模式
delimiter !!
create trigger tg_jianshao after insert on jd_order 
	for each row 
begin
	update jd_goods set goods_num = goods_num - 5;
end
!!
-- 恢复到分号模式
delimiter ;

insert into jd_order values (null,1,5,now());


insert into jd_order values (null,1,10,now());


-- 我们的触发器是有参数的
-- old 和new
-- insert  插入数据new
-- delete 删除旧数据 old
-- update  有新数据也有旧数据 new 和old

drop trigger  tg_jianshao;
-- 表的事件的顺序after insert on jd_order只能有一个触发器
-- 新的触发器
-- new 表示 我们在订单插入的时候的那条数据记录
-- new.字段名就可以 获取插入数据的值
delimiter @@@
create trigger tg_auto after insert on jd_order for each row
	begin
		update jd_goods set goods_num = goods_num - new.goumai_num;
	end
@@@
delimiter ;


-- 删除订单的时候把库存增加
delimiter %%
create trigger tg_zengjia after delete on jd_order for each row
	begin
		update jd_goods set goods_num = goods_num + old.goumai_num;
	end
%%
delimiter ;


-- 模拟事务

create table t_money (
	id int unsigned auto_increment,
	name varchar(20),
	money decimal(10,2),
	primary key(id)
)engine=INNODB;

insert into t_money values (null,"鹏哥",10000000);

-- 开启事务
start transaction;
update t_money set money = 0 where id = 1;

-- 创建一个没有参数的函数
-- returns 后边的类型也是需要和创建字段的类型类似的
-- 返回多长的字符串要指定 
delimiter ^^
create function f_1() returns varchar(20)
begin
	return "hello moto";
end
^^
delimiter ;

-- 查看函数
show function status;


-- 创建一个分支结构的函数
-- 必须有returns 而且必须有返回值类型
delimiter $$
create function f_2(str varchar(20)) returns varchar(100)
begin
	if str = 'itcast' then
		return "hello itcaster";
	elseif str= 'itheima' then
		return 'hello hemaer';
	else 
		return 'hello world';
	end if;	
end
$$
delimiter ; 


-- 创建一个循环函数实现叠加
delimiter $$
create function f_3() returns int
	begin
	declare sum int default 0;
	declare i int default 0;
	mywhile: while i<=10 do 
	  set sum = sum+i;
	  set i = i+1;
	end while;
	return sum;
	end
$$
delimiter ;


-- 计算n范围之内的累加和
delimiter $$
create function f_4(n int) returns int
	begin
		declare sum int default 0;
		declare i int default 0;
		mywhile: while i<=n do 
			set sum = sum +i;
			set i = i+1;
		end while;
		return sum;
	end
$$
delimiter ;


-- 再传入一个参数, 累加的过程中,不加这个值
-- n表示 累加到的值
-- t 表示不累加的值
-- t <= n
delimiter $$
create function f_5(n int,t int) returns int 
	begin
		declare sum int default 0;
		declare i int default 0;
		mywhile: while i<=n do
			if i = t then 
				set i = i + 1;
				iterate mywhile;
			end if;
			set sum = sum + i;
			set i = i + 1;
		end while;
		return sum;
	end
$$
delimiter ;

-- 循环标签不要使用系统的关键字
delimiter $$
create function f_6(n int,t int) returns int 
	begin
		declare sum int default 0;
		declare i int default 0;
		while: while i<=n do
			if i = t then 
				set i = i + 1;
				iterate mywhile;
			end if;
			set sum = sum + i;
			set i = i + 1;
		end while;
		return sum;
	end
$$
delimiter ;

-- break 在mysql中要使用leave
delimiter $$
create function f_7(n int,t int) returns int 
	begin
		declare sum int default 0;
		declare i int default 0;
		mywhile: while i<=n do
			if i = t then 
				set i = i + 1;
				leave mywhile;
			end if;
			set sum = sum + i;
			set i = i + 1;
		end while;
		return sum;
	end
$$
delimiter ;


create table t_procedure (
	id int unsigned auto_increment,
	name varchar(20),
	primary key(id)
);

insert into t_procedure values (null,"abc");


-- 想创建没有返回值的函数
-- 没有返回值的函数就不叫函数叫存储过程
delimiter $$
create procedure pro_1()
	begin
	insert into t_procedure values (null,"abc");
	end
$$
delimiter ;


-- 通过存储过程来产生大量的数据

delimiter $$
create procedure pro_2(n int)
	begin
		declare i int default 0;
		mywhile: while i<n do
			set i = i+1;
			insert into t_procedure values (null,'abc');
		end while;
	end
$$
delimiter ;


-- 用存储过程去插入一条数据
-- insert into stu_student(name,score) values ('aaa',22);

delimiter $$
create procedure pro_insert_student(n varchar(20),s int)
	begin
		insert into stu_student(name,score) values 
			(n,s);
	end
$$
delimiter ;




delimiter $$
create procedure pro_insert_student(int n varchar(20),out s int)
	begin
		insert into stu_student(name,score) values 
			(n,s);
	end
$$
delimiter ;



set @a = 10;
set @b = 20;
set @c = 30;

delimiter $$
create procedure pro_3 (in x int,out y int,inout z int)
begin
	select x,y,z;
	set z = 300;
end
$$
delimiter ;

window下:
--数据库的备份
mysqldump -h127.0.0.1 -P3306 -uroot -p graduation_project -B > E:/xxbiji/mysql/graduation_projec
t.sql 

-B参数，就是在备份文件里面，多加上了创建数据库的语句！

--数据库还原
mysql -hlocalhost -P3306 -uroot -p < E:/xxbiji/mysql/graduation_project.sql
--注意这个是直接在cmd窗口下,不需要进入mysql中


--基础操作
mysql_connect('localhost', 'root', 'root');
mysql_query('use blog');
mysql_query('set names utf8');


-- 修改密码

-- 首先登录MySQL。 
格式：mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';
例子：mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';

-- 用 Navicat Premium 连接数据库时 报如下错误：
Authention plugin 'caching_sha2_password' cannot be loaded

-- 意思大概是，密码加密问题

-- 修改密码加密方式：如下即可
ALTER USER 'yourusername'@'localhost' IDENTIFIED WITH mysql_native_password BY 'youpassword';



-- 让某个字段加 1
'UPDATE article SET `read`=`read`+1 WHERE id = '+ id

# 分页
-- 上一篇
SELECT * FROM new_info WHERE nid<9 ORDER BY nid DESC LIMIT 1; 
-- 下一篇
SELECT * FROM new_info WHERE nid>9 ORDER BY nid ASC LIMIT 1;



-- 安装报错

-- The service already exists!

-- 3.输入安装命令mysqld install 
-- 出现问题The service already exists 
-- 这是由于之前已经安装过mysql并且没有删除干净

-- 4.重新以管理员身份运行，输入sc query mysql，查看一下名为mysql的服务： 
 
-- 发现之前确实有安装过。

-- 5.命令sc delete mysql，删除该mysql 


-- 6.之后继续安装，就能成功 mysqld install

-- 卸载 mysql

cmd 下： mysqld -remove MySQL

-------------------------------------------------------------------------------------------------

-- 查看mysql 版本
select version() from dual;


-- 三、重启
--1、使用 service 启动：
service mysqld restart
--2、使用 mysqld 脚本启动：
/etc/inint.d/mysql restart

--------------------------------------------SQL-----------------------------------------------------

--求一个表中两个字段的和

select sum(praise) + sum(`read`) FROM article

