module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'Trang chu',
            message: 'Xin chao'
        })
    }
}