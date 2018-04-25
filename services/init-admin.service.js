const ENV = require('../config/environment');

const User = require('../models/user');
const DateService = require('./date.service');

exports.initRootAdministrator = () => {
    return new Promise((resolve, reject) => {
        let rootAdmin = new User({
            name: ENV.ROOT_ADMIN_NAME,
            email: ENV.ROOT_ADMIN_EMAIL,
            username: ENV.ROOT_ADMIN_USERNAME,
            password: ENV.ROOT_ADMIN_PASS,
            role: 'superadmin'
        });

        User.addUser(rootAdmin, (err, user) => {
            if (err) {
                console.log(`${DateService.getDate()} | Ошибка при регистрации корневого администратора: ${err}`);
            } else {
                console.log(`${DateService.getDate()} | Создан корневой администратор с указанными данными`);
            }
        });
    });
}