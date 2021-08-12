import { createRouter, createWebHistory } from "vue-router"

// import Home from "../pages/Home"
// import About from "../pages/About"

const routes = [
  { path: "/", redirect: "/home" },
  { 
    path: "/home", 
    component: () => import(/* webpackChunkName: "home-chunk" */"../pages/Home") 
  },
  { 
    path: "/about", 
    component: () => import(/* webpackChunkName: "about-chunk" */"../pages/About"),
    name: "about",
    meta: {
      name: "about",
      age: 19
    }
  },
  {
    path: "/user/:id",
    component: () => import("../pages/User.vue"),
    children: [
      {
        path: "info",
        component: () => import("../pages/Info.vue")
      },
      {
        path: "shops",
        component: () => import("../pages/Shops.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",  // 加最后一个*号用于解析路径为数组
    component: () => import("../pages/NotFound.vue")
  },
  {
    path: "/contact",
    component: () => import("../pages/Contact.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

let counter = 0;
/**
 * return false不进行跳转
 * return undefined或者不返回, 跳转至指定to位置
 * return 字符串跳转至指定字符串位置
 * return 对象: { path:"", query:... }
 */

router.beforeEach((to, from) => {
  console.log(`进行了${ ++counter }路由跳转`);
})

const Category = {
  path: "/category",
  component: import("../pages/Category.vue")
}

router.addRoute(Category)

export default router