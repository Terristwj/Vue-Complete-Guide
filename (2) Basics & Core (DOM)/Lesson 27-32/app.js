const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            // fullName: "",
        };
    },
    watch: {
        name(value) {
            // Do something when this.name changes
            // this.fullname = value + " " + "Schwarzmüller";
        },
        // name(newValue, oldValue) {},
    },
    computed: {
        fullName() {
            if (this.name) return this.name + " " + "Schwarzmüller";
            return "";
        },
    },
    methods: {
        // setName(event, lastName) {
        //     let userInput = event.target.value;
        //     if (userInput) this.name = userInput + " " + lastName;
        //     else this.name = "";
        // },
        setName(event, lastName) {
            let userInput = event.target.value;
            if (userInput) this.name = userInput;
            else this.name = "";
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
    },
});

app.mount("#events");
