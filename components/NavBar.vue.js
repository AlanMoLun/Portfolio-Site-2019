const NavBar = Vue.component('v-nav', {
	template: `<nav>
              <div class="nav-left">
                <router-link to="/" class="nav-name">Jingqi Fan</router-link> / {{ this.$route.meta }}
              </div>
              <div class="nav-right">
                <router-link to="/profile" class="nav-item-link">
                  <span class="link-inner">Profile</span>
                  <div class="link-inner-top">Profile</div>
                  <div class="link-inner-bottom">Profile</div>
                </router-link>
              </div>
            </nav>`,
	methods: {
		links: function() {
      console.log(this.$route) // should work
    }
  },
  mounted() {
    // this.links();
    console.log({currentRoute: this.$route});
  }
});