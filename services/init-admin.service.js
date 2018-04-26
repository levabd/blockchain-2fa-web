const ENV = require('../config/environment');

const User = require('../models/user');

var moment = require('moment');
moment.locale('ru');

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
                console.log(`|* ${moment().format('DD.MM.YYYY, HH:mm:ss')} *| | Ошибка при регистрации корневого администратора: ${err}`);
            } else {
                console.log(`|* ${moment().format('DD.MM.YYYY, HH:mm:ss')} *| | Создан корневой администратор с указанными данными`);
            }
        });
    });
}