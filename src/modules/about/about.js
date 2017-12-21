export default {
    name: 'projects', data: function () {
        return {projects: []}
    }, methods: {
        loadProjects: function () {
            this.$http.get('http://www.mocky.io/v2/585e03ce100000b82c501e8e').then((response) => {
                response.json()
                this.projects = response.body,
                console.log( this.projects)
            }, (err) => {
                console.log(err)
            })
        }
    }, mounted: function () {
        this.loadProjects()
    }
}
