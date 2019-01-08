const Project = Vue.component('project', {
  template: `
<main class="site-content">
  <div class="hero-image-intro project-m-bottom">
    <img src="img/intro-img1.jpg">
  </div>
  <div class="row no-gutters equal-padding project-m-bottom">
    <div class="col-md-10 offset-md-1 centered-image spacing-reference">
      <img src="img/intro-img1.jpg">
    </div>
  </div>
  <div class="row no-gutters equal-padding project-m-bottom">
    <div class="hero-image">
      <img src="img/intro-img1.jpg">
    </div>
  </div>
  <v-next-link></v-next-link>
  <div class="cursor"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 253"><defs><clipPath id="a"><path d="M0 0h251v253H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M44.269 7v40.276H175.78L5.88 217.179l28.482 28.481 169.9-169.9v131.511h40.278V7z"/></g></svg></div>  

</main>

  `,
	methods: {
		redirect(route) { this.$router.push(`/${route}`); }
	}
});
