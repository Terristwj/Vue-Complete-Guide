const myApp = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(() => {
                that.counter = 0;
            }, 5000);
        },
    },
    computed: {
        result() {
            if (this.counter < 37) return "Not there yet";
            else if (this.counter > 37) return "Too much!";
            else return this.counter;
        },
    },
    methods: {
        add(value) {
            this.counter += value;
        },
    },
});

myApp.mount("#assignment");
