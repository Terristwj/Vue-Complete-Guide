const app = Vue.createApp({
    // Is a function
    // Shorthand for data: function() { return { } }
    data() {
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "Master Vue and build amazing apps!",
            vueLink: "https://vuejs.org/",
        };
    },
    // Takes in object with functions
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
        outputRawHTML() {
            return "<p>Raw HTML</p>";
        },
    },
});

app.mount("#user-goal");
