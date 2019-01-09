'use strict';
const Home = httpVueLoader('./views/Home.vue');
const Project = httpVueLoader('./views/Project.vue');
const Profile = httpVueLoader('./views/Profile.vue');
const NavBar = httpVueLoader('./components/NavBar.vue');
const NextLink = httpVueLoader('./components/NextLink.vue');
const SocialMedia = httpVueLoader('./components/SocialMedia.vue');

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
  { path: '/:slug', component: Project },
  { path: '/profile', component: Profile }
]
const router = new VueRouter({ routes });
new Vue({ 
  el: '#app',
  components: {
    'home': Home,
    'project': Project,
    'profile': Profile,
    'nav-bar': NavBar,
    'next-link': NextLink,
    'social-media': SocialMedia
  }
  })