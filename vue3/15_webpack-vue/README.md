# webpack vue

  1. 安装vue@next版本, vue分为多种版本, 其大致可以分为运行时编译和仅运行时, 必须导入指定版本才能对template模板进行解析
  2. vue-loader解析vue文件, 必须依赖@vue/compiler-sfc对template进行模板解析, 另外必须在vue-loader/dist/index导入VueLoaderPlugin, vue-loader会自动执行VueLoaderPlugin的插件