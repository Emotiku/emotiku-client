Vue.component('selected-post', {
  template:
    `
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal Title
          </h5>
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img :src="image.url"></img>
          <p>This is modal body</p>
        </div>
        <div class="modal-footer">
          <div class="fb-share-button" :data-href="image" data-layout="button" data-size="large" data-mobile-iframe="false"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Bagikan</a></div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="downloadFile(image)"><i class="fas fa-cloud-download-alt"></i> Download</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="removedFile(image._id)"><i class="fas fa-trash-alt"></i> Delete</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-window-close"></i> Close</button>
        </div>
      </div>
    </div>
  `,
  data() {
    return {

    }
  },
  methods: {
    downloadFile: function (url) {
      axios({
        url: url,
        method: 'GET',
        responseType: 'blob', // important
      })
      .then((response) => {
        console.log(response)
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image.jpg');
        document.body.appendChild(link);
        link.click();
      })
      .catch(err => {
        console.log(err);
      })
    },
    removedFile: function(id) {
      axios.delete(`http://35.240.209.66/images/5b75288fc72c370c77e2a26d`, {
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNzQzNWQ3NDZhZWJmMGY5OTcyNmJmMCIsIm5hbWUiOiJvcSIsImVtYWlsIjoib3FAbWFpbC5jb20iLCJpYXQiOjE1MzQ0MDU3Mzl9.IJumL3qkDpZ3wBhcFbagLheIEfMh3nWeUMK7fbFXwBw'
        } 
      })
      .then(result => {
        alert('Data Successfully to removed')
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
        alert('Data Failed to removed')
      })
    } 
  },
  props: ['image']
})