Vue.component('register', {
    template: 
    `
        <div class="tab-pane fade" id="register-content" role="tabpanel">
          <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">Name</label>
              <input type="text" class="form-control" name="name" v-model="name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="email" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password" v-model="password">
            </div>
            <button type="button" role="button" class="btn btn-primary" @click="register">
                <i class="fas fa-user-plus"></i>    
                Register
            </button>
          </form>
        </div>
    `,
    data() {
        return { 
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            $.post('/users/register', {
                name: this.name,
                email: this.email,
                password: this.password    
            })
            .done(data => {
                alert(data.message)
            })
            .fail(err => console.log(err))
        }
    }
})