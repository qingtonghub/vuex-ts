

/* 单独打包 */
const Main = () => import('@/components/Main.vue');
const Login = () => import('@/components/Login.vue');
const Register = () => import('@/components/Register.vue');
const Forget = () => import('@/components/Forget.vue');

/* chunk打包 */
const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/components/HelloWorld.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'main',
    component: Main,
    meta: {
      keepAlive: false,
    },
    children: [
      { path: 'home', name: 'home', component: HelloWorld, meta: { keepAlive: false } },
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      keepAlive: true,
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      keepAlive: false,
    },
    component: Register
  },
  {
    path: '/forget',
    name: 'forget',
    meta: {
      keepAlive: false,
    },
    component: Forget
  }
];

export default routes;
