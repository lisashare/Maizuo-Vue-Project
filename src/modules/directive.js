
import Vue from 'vue'

//传入一个数据，在某一个时刻去改为true/false

//函数分出去写  不是同一个作用域
let handlers = {
    'scroll-hide':(el,binding,context,e)=>{
        // console.log('hahahaha')
        //得到距离
        let distance = el.getAttribute('scroll-hide-distance') 
        if(document.documentElement.scrollTop > distance){
            //更改数据为true
            // binding.expression 就是 isShow
            if(!context[binding.expression]){
                context[binding.expression] = true;
            }
            return false;
            //组件数据更改会触发getter...
        }else{
            if(context[binding.expression]){    //这里做了一个滚动的优化
                context[binding.expression] = false;
            }
            return false;
        }
    },
    'back-top':()=>{
        document.documentElement.scrollTop = 0;
    }

}

Vue.directive('scroll-hide',{
    // bind (el,binding,vnode) {
        // console.log(el,binding,vnode)
        // console.log(vnode.context) //输出的是这个组件
    // }
    bind (el,binding,{context}) {
        //使用bind window一直存在

      //只要使用这个指令，bind就执行了
      //在这里给window绑定scroll事件监听,写成事件监听
      window.addEventListener("scroll",handlers[binding.name].bind(this,el,binding,context)
        //   console.log('hahahaha')//某一个时刻去掉监听，因为在切换页面的时候监听会继续

      )
    },
    unbind (el,binding) {
        //当使用指令的元素或者组件被销毁的时候会执行
        window.removeEventListener('scroll',handlers[binding.name])
    }
})



Vue.directive('back-top',{
    //因为使用组件的元素可能会被不断地切换，bind只执行一次，再切换显示组件的时候相当于又创建了新的元素，需要重新绑定
    inserted (el,binding) {
        //移动端不支持双击事件
        //移动端事件touchstart
        let event_type = binding.arg || "click";
        el.addEventListener(event_type,handlers[binding.name])
    },
    unbind (el,binding) {
        let event_type = binding.arg || "click";
        el.removeEventListener(event_type,handlers[binding.name]);
    }
})