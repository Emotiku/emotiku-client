Vue.component("post-management", {
  template: `
        <div>
            <post-list :posts="data"></post-list>
        </div>
    `,
  data() {
    return {
      data: []
    };
  },
  methods: {
    getPosts() {
      let self = this;
      axios
        .get("http://35.240.209.66/images", {
          headers: { token: localStorage.getItem("token"),
          json: true
        }
        })
        .then(response => (self.data = response.data.data))
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getPosts();
  }
});
