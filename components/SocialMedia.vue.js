const SocialMedia = Vue.component('v-social-media', {
	template: `
  <ul class="social-media">
    <li class="social-media-item">
      <a href="#" class="social-media-item-link">
        <span class="link-inner">Tw</span>
        <div class="link-inner-top">Tw</div>
        <div class="link-inner-bottom">Tw</div>
      </a>
    </li>
    <li class="social-media-item">
      <a href="#" class="social-media-item-link">
        <span class="link-inner">Be</span>
        <div class="link-inner-top">Be</div>
        <div class="link-inner-bottom">Be</div>
      </a>
    </li>
    <li class="social-media-item">
        <a href="#" class="social-media-item-link">
          <span class="link-inner">In</span>
          <div class="link-inner-top">In</div>
          <div class="link-inner-bottom">In</div>
        </a>
    </li>
  </ul>
  `,
	methods: {
		redirect(route) { this.$router.push(`/${route}`); }
	}
});
