const NotFound = { template: '<p>Page not found</p>' };
import Home from "../views/Home.vue";
import socialMedia from "../components/SocialMedia.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
];

var app = new Vue({
    el: '#app',
    data: {

    },
    components: {
        "v-social-media": socialMedia,
    },
    router: new VueRouter({ routes })
});
