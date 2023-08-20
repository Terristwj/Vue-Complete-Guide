const myApp = Vue.createApp({
    data() {
        return {
            alertMsg: "I am alerting you!",
            outputMsg: "",
        };
    },
    methods: {
        showAlert() {
            alert(this.alertMsg);
        },
        updateOutput(event) {
            this.outputMsg = event.target.value;
        },
    },
});

myApp.mount("#assignment");
