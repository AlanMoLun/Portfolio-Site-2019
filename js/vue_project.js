const vueApp = new Vue({
    el: '#vapp',
    data: {
        display: 'redbox',
        project_name: ""
    },
    component: {
        ColoredBox: "colored-box"
    },
    created: function () {
        let params = new URLSearchParams(window.location.search);
        let q = params.get('name');
        this.project_name = q;
    }
});