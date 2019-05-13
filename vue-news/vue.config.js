module.exports = {
    lintOnSave: false,
    css: {
        modules: true,
        loaderOptions: {
            sass: {
                data: 
                    `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_mixins.scss";
                    `
            }
        }
    }
}