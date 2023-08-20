const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
        };
    },
    methods: {
        // Add/Minus Buttons
        plusOne() {
            this.counter++;
        },
        minusOne() {
            this.counter--;
        },
        add(num) {
            this.counter += num;
        },
        minus(num) {
            this.counter -= num;
        },

        // Update Name
        updateName(event) {
            this.name = event.target.value;
        },
        updateFullName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },

        // Submit
        submitForm1(event) {
            // Option 1 to prevent default behavior
            event.preventDefault();
            alert("Submitted!");
        },
        submitForm2() {
            alert("Submitted!");
        },
    },
});

app.mount("#events");
