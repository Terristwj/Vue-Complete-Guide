const app = Vue.createApp({
    // Is a function
    // Shorthand for data: function() { return { } }
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
            vueLink: "https://vuejs.org/",
        };
    },
    // Takes in object with functions
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return "Learn Vue!";
            } else {
                return "Master Vue!";
            }
        },
    },
});

app.mount("#user-goal");
