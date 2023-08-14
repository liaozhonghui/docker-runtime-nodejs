## JupyterLab 部署 root 模式

Jupyter 部署 AutoGPT 总结（使用 root 权限部署）

1. 启动 docker

```sh
docker run -it -e GRANT_SUDO=yes --user root -p 8228:8888 -v /d/base-jupyter-latest:/home/jovyan jupyter/base-notebook
```

2. 设置 jupyter 的权限

```sh
jupyter notebook --generate-config --allow-root
```

3. 安装 git, gitpython 模块

```
apt update
apt install git
pip install gitpython
```

4. 文件夹授权

```sh
chown -R jovyan /home/jovyan
```

5. 完成之后进行 docker commit

```sh
# 镜像id需要替换成实际的镜像id
docker commit --author "liaoxin" --message "feat: add root auth; install system command;" a3572fa24722 my-jupyter-with-root:v1
```

6. jovyan 处理 auto-gpt-0.2.2

```
pip install -r requirements.txt
```

7. 设置环境变量

```sh
cp .env.template .env
# 编辑.env文件中的OPEN_AI_KEY
```

8. 启动应用

```sh
./run.sh
```
