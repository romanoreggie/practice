console.log("testtest");

const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello World'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
  }
});

const exercise = new Vue({
  el: '#exercise',
  data: {
    name: 'Reggie',
    age: 23,
    image: 'https://i.imgur.com/Zce5lQr.jpg'
  },
  methods: {
    random: function() {
      return Math.random();
    }
  }

})
