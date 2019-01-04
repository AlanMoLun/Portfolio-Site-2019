Vue.component('ColoredBox', {
    template: "<div class=\"box\"> {{project_name}} </div>",
    data: function () {
        return {

        }
    },
    props: {
        project_name: String
    }
});