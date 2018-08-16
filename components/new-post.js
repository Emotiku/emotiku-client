Vue.component("new-post", {
  template: `
        <div class="modal fade" id="new-post-modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Upload image</h5>
                <button type="button" class="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="file" @change="fetchImage" accept="image/*">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success" @click="uploadImage">Post</button>
              </div>
            </div>
          </div>
        </div>
    `,
  data() {
    return {
      image: ""
    };
  },
  methods: {
    uploadImage() {
      $('#new-post-modal').modal('hide')
      let formData = new FormData()
      formData.append('image', this.image)
      axios
        .post("http://35.240.209.66/images", formData, {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          alert(response.data.message)
        })
        .catch(err => {
          alert(err.message)
        });
    },
    fetchImage(event) {
      this.image = event.target.files[0]
    }
  }
});
