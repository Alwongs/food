module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/food/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}