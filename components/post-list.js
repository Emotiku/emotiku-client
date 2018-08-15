Vue.component('post-list', {
  template:
    `
      <div>
          
            <div class="card-deck">
              <div v-for="post in posts" class="card mb-3">
                <img class="card-img-top" :src="post.url" alt="image alt">
                <div class="card-body">
                  <h5 class="card-title">{{ post.emotion }}</h5>
                  <p>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#test-modal">
                      More
                    </button>
                  </p>
                </div>
              </div>
            </div>
      </div>
    `,
  data() {
    return {
      
    }
  },
  methods: {

  },
  props: ['posts']
})