const ProjectBraveNewWorld = Vue.component('project-1', {
  template: `<div>
  <v-next-link :pid="pid"></v-next-link>
  <div class="cursor"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 253"><defs><clipPath id="a"><path d="M0 0h251v253H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M44.269 7v40.276H175.78L5.88 217.179l28.482 28.481 169.9-169.9v131.511h40.278V7z"/></g></svg></div>  

</div>`,

          computed: {
              currentRoute: function () {
                return this.$route.path;
              },
              pid: function () {
                let id = parseInt(this.$route.params.id);
                if(id > 6){
                  id = 1
                } else {
                  id++;
                }
                return id;
              }
          },
          mounted() {
            console.log("this.$route: ", this.$route);
          },
	methods: {
		redirect(route) { this.$router.push(`/${route}`); }
	}
});