# 阿里云函数计算 Container 案例

只需几步就可以快速在阿里云函数计算服务上体验 Container ：

- 初始化项目：`s init start-fc-container`
- 进入项目，并执行部署：`s deploy --push-registry acr-internet --use-local -y`

- Tips: 更多行为
    - 查看函数的指标：`s metrics`
    - 查看函数日志：`s logs`(需要配置函数日志能力)
    - 更多可以参考[Serverless Devs函数计算FC组件文档](https://github.com/devsapp/fc)

-----

额外说明：使用该能力时需要开启容器镜像服务，并且需要将registry等地址填写到Yaml中：

```
        caPort: 8080
        codeUri: ./code
        customContainerConfig:
这里 >>>   image: 'registry.cn-shanghai.aliyuncs.com/custom-container/test:0.0.1'
          command: '["node"]'
          args: '["server.js"]'
```

即可实现`Container`案例的初始化、部署整个流程。