Vue.component('post-list', {
  template:
    `
    <div>
      <div class="card-deck">
        <div v-for="post in posts" class="card mb-3">
          <div class="card-img-container" data-toggle="modal" data-target="#modalImage" @click="openModal(post.url)">
            <img class="card-img-top" :src="post.url" alt="image alt">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ post.emotion }}</h5>
            <p class="card-text card-date"><span class="text-muted text-sm">{{ formatDate(post.createdAt) }}</span></p>
          </div>
        </div>
      </div>
      <div class="modal fade" id="modalImage" tabindex="-1" role="dialog">
        <selected-post :image="modalState"></selected-post>
      </div>
    </div>
    `,
  data() {
    return {
      modalState: ''
    }
  },
  methods: {
    openModal: function(post) {
      this.modalState = post
    }
  },
  computed: {
    formatDate() {
      return dateStr => {
        var date = new Date(dateStr)
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ]
      
        var day = date.getDate()
        var monthIndex = date.getMonth()
        var year = date.getFullYear()
      
        return `${monthNames[monthIndex]} ${day}, ${year}`
      }
    },
  },
  props: ['posts'],
  created() {
  },
})