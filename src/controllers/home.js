const Cookie = require("../helpers/cookie")
const homeController = {
    index: (req, res, next) => {
        res.render('home/index', {title: "Home"});
    },
}

module.exports = homeController;