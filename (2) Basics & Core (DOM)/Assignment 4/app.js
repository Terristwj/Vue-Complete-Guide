const myApp = Vue.createApp({
    data() {
        return {
            userInput: "",
            visible: true,
            backgroundColor: "",
        };
    },
    computed: {
        userClasses() {
            return {
                user1: this.userInput === "user1",
                user2: this.userInput === "user2",
                visible: this.visible,
                hidden: !this.visible,
            };
        },
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
    },
});

myApp.mount("#assignment");
