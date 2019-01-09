<template>
    <div>
        <div v-for="row in rows">
            <div :class="row[0].rowClass">
                <div v-for="project in row" :class="project.class">
                    <router-link :to="{name: project.slug, params: {id: project.id}}" class="prj-link">
                        <img :src="project.src">
                        <div class="title">{{project.title}}</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data: function () {
            let rowClasses = ['row no-gutters equal-padding grid-m-bottom', 'row no-gutters right-padding grid-m-bottom', 'row no-gutters left-padding grid-m-bottom', 'row no-gutters equal-padding'];
            let classes = ['col-md-4 offset-md-1 m-top', 'col-md-4 offset-md-2', 'col-md-9 offset-md-3', 'col-md-9'];
            return {
                rows: [
                    [{ id: 1, title: 'Brave New World', slug: 'brave-new-world', src: `./img/prj-1.jpg`, rowClass: rowClasses[0], class: classes[0]},
                        { id: 2, title: 'Sam Fox Calendar', slug: 'sam-fox-calendar', src: `./img/prj-2.jpg`, class: classes[1] }],
                    [{ id: 3, title: 'Noise: Within, Among and Beyond', slug: 'noise', src: `./img/prj-3.jpg`, rowClass: rowClasses[1], class: classes[2] }],
                    [{ id: 4, title: 'Tu Youyou', slug: 'tu-youyou', src: `./img/prj-4.jpg`, rowClass: rowClasses[0], class: classes[0] },
                        { id: 5, title: 'Wout van Aert', slug: 'wout-van-aert', src: `./img/prj-5.jpg`,  class: classes[1] }],
                    [{ id: 6, title: 'In Praise of the Messed Up Mind', slug: 'messed-up-mind', src: `./img/prj-6.jpg`, rowClass: rowClasses[2], class: classes[3] }],
                    [{ id: 7, title: 'Process Books', slug: 'process-books', src: `./img/prj-7.jpg`, rowClass: rowClasses[3], class: classes[0] }]
                ]
            }
        }
    };
</script>
