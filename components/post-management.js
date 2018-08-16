Vue.component('post-management', {
    template: 
    `
        <div>
            <button role="button" class="btn btn-primary" data-toggle="modal" data-target="#new-post-modal">Upload</button>
            <new-post></new-post>
        </div>
    `,
    data: function() {
        return {
            data: [],
        }
    },
    methods: {
        
    }
})