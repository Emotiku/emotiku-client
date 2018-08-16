Vue.component("new-post", {
  template: 
  `
    <div class="modal fade" id="new-post-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Upload Image</h5>
                  <button type="button" class="close" data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <form action="">
                      <div class="form-group">
                          <label for="input_image"></label>
                          <input type="file" id="input_image" name="input_image">
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <input type="submit" class="btn btn-success" value="Post">
              </div>
          </div>
      </div>
    </div>
  `,
  data: function() {
      return {

      }
  },
  methods: {

  }
});
