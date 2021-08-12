# npm包管理
  - npm install 安装所有依赖
  - npm install --production 不安装开发时依赖
  - npm install [package] 或者 npm i [package] 安装某个运行时依赖
  - npm install [package] --save-dev 或者 npm install [package] -D 安装某个开发时依赖 
  - npm uninstall [package] 移除某个包依赖
  - 版本号
    1. X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）
    2. Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）
    3. Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）
  - ^ 和 ~ 的区别
    1. ^x.y.z：表示x是保持不变的，y和z永远安装最新的版本
    2. ~x.y.z：表示x和y保持不变的，z永远安装最新的版本
# yarn包管理
  - yarn install 安装所有依赖
  - yarn add [package] 安装某个运行时依赖
  - yarn add [package] -D 安装某个开发时依赖
  - yarn remove [package] 移除某个包依赖
  - yarn add global [package] 安装全局依赖
# cnpm包管理
  - npm工具安装包安装慢的问题，可以通过设置registy镜像
  - 或者使用cnpm代替npm，可以理解为中国的npm
  - 具体指令代码和npm操作一致
# npx
  - 在同时进行局部安装和全局安装的时候、通过npx执行运行使用局部安装