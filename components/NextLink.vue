<template>
    <div class="next-link">
        <div class="sub-text-link">Go To</div>
        <router-link v-if="currentRoute == '/'" to="/profile" class="main-link">Pro<span class="walt">F</span>I<span class="walt">L</span>e</router-link>
        <router-link v-else :to="name" class="main-link">Pro<span class="walt">F</span>I<span class="walt">L</span>e</router-link>
        {{currentRoute}}
        {{name}}
    </div>
</template>

<script>

    export default {
        data: function () {
            return {}
        },
        props: {
            pid: Number
        },
        computed: {
            currentRoute: function () {
                return this.$route.path;
            },
            name: function () {
                let pName = "";
                let self = this;
                let projects = [{id: 1, title: 'Brave New World', slug: 'brave-new-world'},
                    {id: 2, title: 'Sam Fox Calendar', slug: 'sam-fox-calendar'}];
                projects.map(project => {
                    console.log("project.id", project.id);
                    console.log("pid", self.pid);
                    if(project.id == self.pid){
                        console.log("matched", project.slug);
                        pName = project.slug;
                    }
                });
                return pName;
            }
        },
    };
</script>
