Vue.component('post-management', {
    template: 
    `
        <div>
            <post-list :posts="data"></post-list>
            <selected-post :images="data"></selected-post>
        </div>
    `,
    data() {
        return {
            data: [],
        }
    },
    methods: {
        
    },
    created() {
        $.get('../posts.json')
            .done(data => this.data = data)
            .fail(err => console.log(err))
    },
})