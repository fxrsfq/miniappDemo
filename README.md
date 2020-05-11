# trademapp
这是一个神奇的项目

## 目录说明
router跳转的组件写在pages目录下， pages下的组件要应用的其他组件写在components目录下 
taro 组件按照目录寻找文件，每一个目录下的index.jsx是该目录最终导出的文件

###  批量评价实现逻辑
1、batchEvaluations组件：发起请求、state托管请求到的数据和评价分类标志、父子组件传值
2、list组件：接收单个object数据，列表渲染 list 组件
3、全选、批量评价、评价成功弹出框在 batchEvaluations组件内
4、pages组件：分页和分页跳转。使用src_pc目录下的 myPagination 组件
5、批量评价组件、单宝贝评价

