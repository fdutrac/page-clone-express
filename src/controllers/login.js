const Cookie = require("../helpers/cookie");

module.exports = {
    index: (req, res, next) => {
        res.render('login/index', {erro: undefined});
    },
    logar: (req, res, next) => {
        const { login, senha } = req.body;
        if (login == "certo" && senha == "123123") {
            Cookie.set('usuarioLogado', 1 , res, 600000);
            res.redirect('/home')
            return;
        }
        res.render('login/index', {erro: 'login ou senha inválidos'});
    },
    logout: (req, res) => {
        Cookie.set('usuarioLogado', undefined, res, -1);
        res.redirect("/");
    }
}