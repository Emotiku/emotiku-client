Vue.component('post-list', {
  template:
    `
      <div class="card-deck">
        <div v-for="post in posts" class="card mb-3">
          <div class="card-img-container">
            <img class="card-img-top" :src="post.url" alt="image alt">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ post.emotion }}</h5>
            <p class="card-text card-date"><span class="text-muted text-sm">{{ formatDate(post.createdAt) }}</span></p>
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
    } 
  },
  props: ['posts']
})