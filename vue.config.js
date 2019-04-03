module.exports={
    css:{
        loaderOptions:{
            sass:{
                data:`@import "@/assets/scss/util.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}