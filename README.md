## react项目学习
#### 1、工程创建
直接使用官方脚手架 `npx create-react-app react-project-learning`

#### 2、清理项目
去掉test相关的依赖，只保留三个依赖：react-16.3，react-dom-16.3，react-scripts

#### 3、添加router
+ 因为需要有多个示例demo，需要多路由控制
+ 路由版本为：5.2(和4版本使用差别不大)
+ 参考：`https://juejin.im/post/6844904019714899976` / 印象笔记(chap2-1、react-router学习)
+ 为了展示清晰，页面左边路由导航，右边路由内容

#### 4、添加样式scss
+ 需要安装node-sass即可,正常下载好慢，最后制定下载源
+ `npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass`
+ 注意文件后缀是scss，不是sass

#### 5、熟悉fusion组件
+ 开源地址；`https://fusion.design/`
+ fusion组件具体熟悉参见印象笔记
+ 安装：`npm i @alifd/next`
+ 底层尽然还依赖了momnet
+ 在Button组件上加style可以生效
    + `<Button type="primary" style={{color:'red'}}>hello</Button>`

#### 6、熟悉fusion组件-表单
+ fusion的Form.Item上style可以生效


#### 7、熟悉formily组件
+ 需要安装@formily/next和它的依赖styled-components
+ 因为不熟悉fusion next的table组件，这里引入了antd
+ table数据跨域，临时解决方案：在package.json中配置proxy字段

#### 8、开发基于表单的数据查询和新增功能
