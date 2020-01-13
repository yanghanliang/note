SSH密钥帮助文档
公钥是代码托管服务(CodeHub)识别您的用户身份的一种认证方式，通过公钥，您可以将本地git项目与代码托管服务(CodeHub)建立联系， 然后您就可以很方便的将本地代码上传到代码托管服务(CodeHub)或者将代码托管服务(CodeHub)代码下载到本地了。 以下介绍生成公钥和管理公钥的方法。如果你是在windows系统下使用，需要先安装git的windows客户端，使用下列步骤完成密钥的添加。

1.检查系统是否存在密钥：
运行 Git Bash, 在弹出的终端中输入下面提示的代码

cd ~/.ssh
如果提示：No such file or directory 说明你是第一次使用git需要生成密钥。如果不是第一次使用您可以选择使用已有密钥或者重新生成密钥方式。

2.备份并生成密钥：
备份密钥（可选）：

mkdir key_backup
cp id_rsa* key_backup
rm id_rsa*
生成新密钥：

ssh-keygen -t rsa -C "您的email"
在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入，建议采用不输入密码方式。
密钥生成后您可以在你本机系统盘下，您的用户文件夹里发现一个.ssh文件，其中的id_rsa.pub文件里储存的即为刚刚生成的ssh公钥。
3.复制密钥：
方式1.使用下面命令显示密钥然后手工复制

cat ~/.ssh/id_rsa.pub
注意：手工复制公钥时不要复制多余的空格，否则可能添加不成功。
方式2.使用命令直接复制密钥到剪贴板

Windows:
clip < ~/.ssh/id_rsa.pub
Mac:
pbcopy < ~/.ssh/id_rsa.pub
Linux (requires xclip):
xclip -sel clip < ~/.ssh/id_rsa.pub
4.上传密钥：
粘贴公钥到密钥栏中并创建