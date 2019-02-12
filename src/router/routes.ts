

/* 单独打包 */
const Main = () => import('@/components/Main.vue');
const Login = () => import('@/components/Login.vue');
const Register = () => import('@/components/Register.vue');
const Forget = () => import('@/components/Forget.vue');
const NotFoundComp = () => import('@/components/NotFoundComp.vue');

/* chunk打包 */
const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/components/HelloWorld.vue');

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'main',
    component: Main,
    meta: {
      keepAlive: false,
    },
    children: [
      { path: 'home', name: 'home', component: HelloWorld, meta: { isAuth: true, keepAlive: false } },
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      keepAlive: true,
      isAuth: false,
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      keepAlive: false,
      isAuth: false,
    },
    component: Register
  },
  {
    path: '/forget',
    name: 'forget',
    meta: {
      keepAlive: false,
      isAuth: false,
    },
    component: Forget
  },
  {
    path: '/404',
    name: 'notfoundcomp',
    component: NotFoundComp
  }
];

export default routes;
