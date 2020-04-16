
<div align="center" ><font size='6' >乐家生鲜小程序的基础组件库</font></div>

# 介绍

lj-ui是乐家生鲜小程序在开发业务中在现有ui组件库中未找到而生成的组件库，在记录在github中


# 使用之前

在使用lj-ui之前,请确保请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

# 代码下载
直接通过 git 下载，将项目运行到自己本地
```
https://github.com/250786898/Lejia-ui.git
```

# 使用组件
以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可
```
{
  "usingComponents": {
    "lj-button": "/path/to/button/index"
  }
}
```
# 组件API

## 表单组件

### 平铺日历

props 传入参数

| 参数 | 说明 | 类型 | 默认值 |
 :-: | :-: | :-: | :-: |
| type | 类型，可选值为 primary info warning danger| string | default |

enent 响应事件

| 事件名 | 说明 | 回调参数 | 
 :-: | :-: | :-: | 
| type | 类型，可选值为 primary info warning danger| string | 

## 基础组件

### 按钮