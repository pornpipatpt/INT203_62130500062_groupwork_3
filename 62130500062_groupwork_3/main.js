const app = {
  data() {
    return {
      photos: [
        { url: "images/cat.jfif", title: "Cat", done: false },
        { url: "images/dog.jfif", title: "Dog", done: false },
        { url: "images/rabbit.jfif", title: "Rabbit", done: false },
        { url: "images/wolf.jfif", title: "Wolf", done: false },
        { url: "images/monkey.jfif", title: "Monkey", done: false },
        { url: "images/turtle.jfif", title: "Turtle", done: false },
      ],
    };
  },
  methods: {
    toggleDone(index) {
      this.photos[index].done = !this.photos[index].done;
    },
  },
  computed: {
    countUndone() {
      return this.photos.filter((t) => t.done).length;
    },
  },
};
Vue.createApp(app).mount("#app");
