Vue.component('post-management', {
    template: 
    `
        <div>
            <post-list :posts="data"></post-list>
            <new-post></new-post>
        </div>
    `,
    data() {
        return {
            data: [],
        }
    },
    methods: {
        getPosts() {
            $.get('../posts.json')
            .done(data => this.data = data)
            .fail(err => console.log(err))
        }
    },
    created() {
        this.getPosts()
    },
})