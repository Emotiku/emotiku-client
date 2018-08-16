Vue.component('selected-post', {
  template: 
  `
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal Title
            </TItle>
          </h5>
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body row">
          <div class="col-md-4">
          <img :src="image" style="height:200px;width:200px"></img>
          </div>
          <p>This is modal body</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Share</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
  props: ['image'],
  created() {

  },
})