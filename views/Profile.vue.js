const Profile = Vue.component('project', {
	template: `
  <section class="intro-section profile">
  <div class="color-bg"></div>
  <div class="marquee3k" data-speed="1.5">
      <div>PrO<span class="walt">F</span>I<span class="walt">L</span>E&#160;PrO<span class="walt">F</span>I<span class="walt">L</span>E&#160;</div>
  </div>
  <div class="intro-img img-center">
    <img class="profile-img" src="../img/profile-img.jpg">
  </div>
  </section>
  `,
	methods: {
		redirect(route) { this.$router.push(`/${route}`); }
	}
});