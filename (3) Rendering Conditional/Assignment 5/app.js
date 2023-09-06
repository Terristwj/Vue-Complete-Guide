const app = Vue.createApp({
    data() {
        return {
            enteredTask: "",
            tasks: [],
            hide: true,
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleHide() {
            this.hide = !this.hide;
        },
    },
});

app.mount("#assignment");
