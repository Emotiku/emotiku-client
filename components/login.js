Vue.component("login", {
  template: `
      <div class="tab-pane active" id="login-content" role="tabpanel">
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" name="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" name="password" v-model="password">
        </div>
        <button type="button" role="button" class="btn btn-primary" @click="login">
            <i class="fa fa-sign-in-alt fa-lg"></i>    
            Login
        </button>
      </form>
    </div>
    `,
  data() {
    return {
        email: '',
        password: ''
    };
  },
  methods: {
    login() {
        $.post('http://35.240.209.66/users/login', {
            name: this.name,
            email: this.email,
            password: this.password    
        })
        .done(data => {
            if(data.token) {
              localStorage.setItem('token', data.token)
              window.location = 'dashboard.html'
            }
            alert(data.message)
        })
        .fail(err => alert(err.message))
    }
  }
});
