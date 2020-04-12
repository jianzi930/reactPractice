# reactPractice

以蚂蚁金服使用abtd开发的网页：https://preview.pro.ant.design 为模板，自己码了这个项目，并且没有使用actd的组件库，目的是为了练习react

node@10.16.0 + webpack@4.16.3 + react@16.9.0 + react-dom@16.9.0 + react-router@4.3.1

运行项目
```
npm install
npm run dev
```
目前已完成部分

 - Dashboard
   - 工作台
 - 表单页
   - 基础表单
   - 高级表单
 - 列表页
   - 查询表格
  
 部分功能展示：
 
 在高级表单组件中调用了calendar组件和EditTable组件，实现日期选择和可编辑表格功能
 
 ![image](https://github.com/jianzi930/reactPractice/raw/master/GIF1.gif) 
 
  在查询表格组件中调用了AddModel组件、ConfigModel组件和SearchTable等组件，实现新增、删除、查找、配置等功能
 
 ![image](https://github.com/jianzi930/reactPractice/raw/master/GIF2.gif) 
