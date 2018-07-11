# vue-maizuo-project

> 想好再入手

> 这个demo我会写很多开发细节和知识点，从建立vue-cli脚手架，到开发功能组件，都有详细的介绍

#### 前言

&nbsp;&nbsp;&nbsp;开发前需要对项目进行简单的初始化设置，都是些准备工作


### 目录结构

    ├── build                //build负责打包的 npm run build 打包，会自动生成dist       
    ├── config               //配置目录(内置服务器的端口、proxy代理)index.js-autoOpenBrowser: true,
    ├── src                         //资源目录,在脚手架中，开发目录是src文件夹
    ├── components                  //组件
    │   ├── commons                  //公共组件
    │   │   ├── Header              //头部导航组件
    │   │   │   ├── Header.vue               
    │   │   │   ├── NavList.vue        
    │   │   ├── bottomLoadMore.wpy      //底部加载更多组件
    │   │   ├── placeholder.wpy         //空列表显示组件
    │   │   ├── timer.wpy               //倒计时组件
    │   │   ├── wepy-area-picker.wpy    //省市区组件
    │   │   ├── wepy-sign-time.wpy      //签到组件
    │   │   └── wepy-swipe-delete.wpy   //左滑删除组件
    │   ├── pages    
    │   │   ├── Home                    //新增首页组件
    │   │   │   ├── Home.vue               
    │   │   │   ├── Banner.vue           //轮播图组件  
    │   │   │   ├── MovieBox.vue         //电影盒子组件                
    │   │   │   └── MovieItem.vue        //电影项目组件
    │   │   ├── Fimes        //编辑地址组件
    │   │   │   └── Fimes.vue   //左滑删除组件
    │   │   ├── Cinema       //地址列表组件
    │   │   │   └── Cinema.vue   //左滑删除组件
    │   │   ├── bomb_screen.wpy         //首页弹屏组件
    │   │   │   └── wepy-swipe-delete.wpy   //左滑删除组件
    │   │   ├── Mine            //收藏列表组件
    │   │   │   └── Mine.vue   //左滑删除组件
    │   │   ├── NotFound        //评论列表组件
    │   │   │   └── NotFound.vue   //左滑删除组件    
    │   │   ├── bottomLoadMore.wpy      //底部加载更多组件
    │   │   ├── placeholder.wpy         //空列表显示组件
    │   │   ├── timer.wpy               //倒计时组件
    │   │   ├── wepy-area-picker.wpy    //省市区组件
    │   │   ├── wepy-sign-time.wpy      //签到组件
    │   │   └── wepy-swipe-delete.wpy   //左滑删除组件
    │   ├── discover.wpy        //发现列表
    │   ├── filterSlider.wpy    //筛选右侧栏组件
    │   ├── filter_bar.wpy      //分类排序组件
    │   ├── order_item.wpy      //订单列表组件
    │   ├── points_detail.wpy   //列表组件
    │   ├── points_rule.wpy     //列表组件
    │   ├── rate.wpy            //评分组件
    │   ├── search.wpy          //搜索组件
    │   ├── shop_cart.wpy       //购物车组件
    │   ├── shop_grid_list.wpy  //矩阵列表
    │   ├── shop_item_list.wpy  //条形列表
    │   └── tab.wpy             //选项卡组件
    ├── images                  //图片文件夹
    ├── pages                   //页面
    │   ├── address.wpy         //地址
    │   ├── classify.wpy        //分类
    │   ├── collection.wpy      //收藏
    │   ├── comfire_order.wpy   //确认订单
    │   ├── comment.wpy         //评论列表
    │   ├── comment_add.wpy     //添加评论
    │   ├── exchange_goods.wpy  //换货
    │   ├── filter.wpy          //筛选
    │   ├── goods_detail.wpy    //商品详情
    │   ├── home.wpy            //首页
    │   ├── home_detail.wpy     //首页详情
    │   ├── info.wpy            //我的
    │   ├── logistics.wpy       //物流
    │   ├── messages.wpy        //我的消息
    │   ├── order.wpy           //订单列表
    │   ├── order_detail.wpy    //订单详情
    │   ├── pay_success.wpy     //支付结果
    │   ├── points.wpy          //积分
    │   ├── points_more.wpy     //更多积分
    │   ├── points_rule.wpy     //积分规则
    │   ├── register.wpy        //注册
    │   ├── reorder.wpy         //--
    │   ├── replenishment_goods.wpy //补货
    │   ├── search.wpy          //搜索
    │   ├── setting.wpy         //设置
    │   ├── shop_cart.wpy       //购物车
    │   ├── sign_in.wpy         //签到
    │   └── wholesale.wpy       //现货批发
    ├── modules                 //插件
    │     ├── bus.js
    │     ├── directive.js
    │     ├── filter.js
    │     └── rem.js 
    ├── router                  //路由       
    │   └── index.js 
    ├── store                   //状态管理仓库
    │   ├── index.js      
    │   └── lisa               
    │       ├── _base.scss
    │       ├── _commons.scss
    │       ├── _mixin.scss
    │       └── _reset.scss             
    ├── stylesheets             //样式
    │   ├── main.scss        
    │   └── particles                
    │       ├── _base.scss
    │       ├── _commons.scss
    │       ├── _mixin.scss
    │       └── _reset.scss  
    ├── App.vue                  //根组件
    ├── main.js                  //根实例 
    ├── static                   //静态目录
    │   ├──         
    │   └── images              
    │       ├── 
    │       ├── 
    │       ├── 
    │       └──        
    └── utils                   //工具类
        ├── constant.js             //常量
        ├── md5.js                  //md5
        ├── regions.js              //省市区数据
        ├── tip.js                  //提示弹框组件
        ├── util.js                 //工具
        └── wxRequest.js            //ajax请求


* 采用了Vue-cli脚手架工具，创建了项目模板  vue init webpack demo,并且解析了模板中的各个文件的作用，重新搭建了项目结构

* 配置了sass开发环境，主要是下载了node-sass，sass-loader -D

1. 将开发的页面配置到路由器的路由表中

2. 重置样式并引入到main.js中

3. 开发了Header组件，实现了导航条的显示与隐藏

    * Header组件是每个页面都有，所以在跟组件中注入
    * 字体图标库:font-awesome(也可以根据UI给出的icon放入到assets文件中编译base64) 路径:/static...引入到index.html   nav user
    > ``` 写法 <i class="fa fa-align-justify"></i> ```
    * 导航数据循环加入，不要复制，好维护好更新，代码简洁，可读性强
    * 导航显示隐藏:v-if 可以给组件使用
    * 下载动画npm i animate.css -S  引入到根实例里面
    * transition要包在有v-if指令外面,不同时控制，让父组件传递数据给子组件，子组件自己控制
    * 通信
    点遮罩控制父组件数据，子组件控制父组件数据，传递方法，数据是父组件的，该数据的方法也应该是父组件的
```
    Header > NavList(navs,mask)
    Header (data:isNavShow,method:closeMenu)-> NavLsit (v-if, transition)
```

4. 开发了Home组件以及Banner   npm i swiper -S(只有banner用，引入banner里面就行，swiper.css / js可以单独引入banner组件),swiper是banner模块的私有变量，作用域不互通，作用域独立.如果Home里面要使用的话，也需要单独导入模块，但是webpack只打包一次，方便协同开发
    * 采用了，swiper滑动插件，利用Vue.nextTick来处理swiper的实例化(组件中需要引入vue)
    >在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。Vue.nextTick([callback,context])

    * 做数据交互npm i axios -S/yarn add axios -S 引入到根实例里面，挂载在根实例的原型上，Vue.prototype.$http = axios; 每个组件都可以通过this.$http使用
    >不用jquery ajax获取轮播数据，几行代码做数据交互，其余操作dom的，vue不需要他来操作dom

    * 实现图片懒加载优化，详细代码注释见banner组件，引入后使用 swiper 有自己的懒加载(右键查看源代码)

5. Home中的电影
    经过分析，home的电影有正在热映和即将上映，初步划分四个组件，热映电影盒子、热映item，即将上映电影盒子、上映item，但是我们研究后发现，并不需要4个，一个盒子和一个item就够了，可以采取传入不同参数去实现不同效果的方式来做

    在其中，调取卖座接口的时候有跨域问题出现，使用webpack-dev-server的proxy功能处理

    1. 将请求地址改为本地开发服务的域下，并加入暗号
    2. 在config/index.js->dev->proxyTable中进行暗号的匹配
    ```
    proxyTable: {  //代理表
      '/mz':{ //对暗号
        //一个配置只能处理同一个目标域的请求，配置改了要重新启动服务，开发的时候把域垮了，真正上线webpack不会跟着上线代码走，只会有打包的js，这个是不生效的，
        //http://localhost:8080/mz/v4/api/film/now-playing
        target:'https://m.maizuo.com/',//真正的域
        changeOrigin:true,
        pathRewrite:{
          //在真正的目标url里将暗号给处理掉
          '^/mz':''
        }
      }
    }
    ```

6. 在使用item的时候，获取到的上映时间是一个时间戳，但是需要显示的是月日格式，在这里采取了过滤器Vue.filter的方式来实现。

7. 搭建了路由跳转，做了重定向和默认路由

8. 解决一个问题：点击navList里的li之后，路由跳转了，但是导航和遮罩没有回去
    一开始是这样想的，点谁给谁绑事件，去执行Header的 closeNav方法，但是有一个问题，不好维护，因为后期我们可能会添加按钮来让他点击之后遮罩导航回去，到时候还得再绑事件，

    所以，我们分析了，其实不是点击的时候导航消失，而是在路由切换的时候导航消失,所以我们准备采用路由钩子来处理，这样的话，以后不管是谁，只要点击后有路由跳转，肯定导航就能消失

    因为，没有固定需要跳转到哪里去，所以只能使用全局路由钩子,于是在router/index.js中给router绑定钩子，但是又有问题了：

    在这里写全局钩子的话，能监听，但是无法去更改Header实例的数据

    1. 使用event bus，注意的是bus不是非要在组件间通信才能用，模块通信也行，因为本身就是基于事件绑定和事件触发的机制

        在header中给bus绑定事件，触发的时候会让导航回去，在router/index.js中的路由钩子里去触发这个事件
    
    2. 直接在Header组件中引入router，给router绑定全局路由钩子

9. 实现Films里的电影类型切换

    Films - type -changeType > Film-nav
    Films - type -> FilmsBox(watch)

    使用了mint-ui里面的infiniteScroll，来实现滚动到底部后进行新的请求，需要注意的是，当切换类型之后，要还原数据

    使用Toast 实现加载弹出效果

10. 实现了进入详情页：采取路由传参的方式，将电影的id传入到detail中，detail根据id获取对应的电影的信息然后渲染

11. 实现了顶部header中title的更新

    在header的生命周期函数中，写入路由钩子，监听路由变化从而更改title

    在详情页中，进入详情后，再去动态的更改header的title：
    
    1. 让detail路由接收电影名字的参数，这样的话我们在路由钩子就能得到这个电影的名字，直接更改

    2. 在header给eventbus绑定事件以更改title，在详情detail中进入之后在生命周期钩子或者是获取到电影名字后触发小天使的事件从而更改header的title（非父子组件的通信）


12. 实现回到顶部

    一开始我们准备封装一个backTop的组件，但是一想，这些组件可能在咱们其他的项目都能用得着，所以就封装了自定义组件库
    
    核心：注意Vue.use其实是在调用传入的对象的install方法，我们在install方法中去注册组件库中的组件

    backTop组件封装好之后开始使用，准备写逻辑（监听window的scroll，到达某一个值的时候控制一个元素显示隐藏，其实就是控制一条数据变成true和false），本来可以直接在该组件的created等钩子函数里给window绑定事件就可以了，但是一想，这个逻辑在很多地方都可能会用到，于是准备封装成了全局的指令：v-scroll-hide 接收的值是一条数据，在指令内部就可以更改这条数据，还通过设置一个自定义的属性scroll-hide-distance来指定控制数据的阈值（阙值、阀值）

    在这个v-scroll-hide指令中，bind（window永远存在，绑定一次就好）里我们给window绑定事件监听（因为当组件被销毁的时候需要将事件监听程序去删掉），在unbind里取消绑定，距离通过el.getAttribute拿来，判断之后，更改数据的方式是：
        //el.binding.value = true binding是只读的
        //vnode.context就是使用指令的元素所处的组件，binding.expression是数据的表达式
        vnode.context[binding.expression] = true/false

 * 又做了一个指令v-back-top，这个指令无论是谁加上就可以触发事件来回到顶部

    接收参数来控制事件的类型

13. Mine 创建一个store从本地缓存中读取，Mine页面通过watch监听userInfo的信息，判断显示登录页面还是个人中心页面

movieBox:用同一个组件做不同的事情，传参数

导航列表切换路由的时候回去,

films页面：二级路由没必要，因为结构大致相同
FilmsBox 获取数据 FilmsItem 循环数据 
Title 点击获取不同的数据(传参，关键数据) 挂载在这里会形成非父子组件通信，so挂载最外层组件上

组件库：pc: element-ui iview  
mobile: mint-ui   quickstart按需加载babel-plugin-component-D

Mine页面( element-ui)
lazyload .babelrc更改配置  

films 列表页面：无限加载和提示信息，
详情页面:film.cover.origin 这里会报错是因为，数据没有获取到渲染的时候film是空，film.cover就是undefined，可以在外层添加v-if

#### src中main.js是入口文件，在里面创建了一个根实例，根实例的模板就是根组件App的模板，其他的组件都在根组件里面进行嵌套实现

> 配置基本的文件夹：

* 每一个组件都是一个单文件组件，这种文件会被webpack利用vue-loader的工具进行编译

* template部分负责写组件的模板内容，script中创建组件。style里写组件的样式

* assets目录也是静态目录，在这个目标中的文件我们使用相对路径引入,而static目录中的文件使用绝对地址来引入

* 在style上添加scoped能使这个style里的样式只作用于当前的组件，不加scoped就是全局样式

* 习惯于在App.vue根组件的style里写全局样式，而每个组件的style最好都是局部的

#### 移动端布局一些注意事项

* 布局中大块需要转换单位，小的padding,margin就可以直接使用px，相差不大

* 在scss编译中,_加下划线，会成为一个块，不会编译生成单个css文件




    