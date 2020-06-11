const router = require('express').Router();
/* */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*Admin model */
const Admin = require('../models/Admin');
//User model
const User = require('../models/User');


// jwt secret
const { secret } = require('../config/database');
//admin register
router.post('/register', async (req, res) => {
    try {
        const { login, password } = req.body;
        //find admin by login
        const admin = await Admin.findOne({ login: login });
        if (admin) {
            return res.status(400).json({
                message: 'Такой администратор уже существует'
            });
        }
        const hash = bcrypt.hashSync(password, 10);
        //create new admin

        const newAdmin = new Admin({
            login: login,
            password: hash
        });

        res.status(201).json({
            message: 'Администратор успешно создан',
            success: true
        });

        await newAdmin.save();
    }
    catch (err) {
        res.status(500).json({
            message: 'Не удалось создать администратора',
            success: false
        });
    }
});
// new user register
router.post('/new-user', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {

        const { fio, login, password } = req.body;
        //find user by login
        const user = await User.findOne({ login: login });
        if (user) {
            return res.status(400).json({
                message: 'Такой пользователь уже существует'
            });
        }

        // hash password if  we not found the same user
        const hash = bcrypt.hashSync(password, 10);
        //create new user
        // на этом этапе нужно будет заполнить еще и внешние ключи
        const newUser = new User({
            fio: fio,
            passportSeries: req.body.passportSeries,
            passportNumber: req.body.passportNumber,
            registerPlace: req.body.registerPlace,
            login: login,
            password: hash,
            weapon: {
                name: req.body.weapon.name,
                model: req.body.weapon.model,
                type: req.body.weapon.type,
                caliber: req.body.weapon.caliber,
                usedCartridge: req.body.weapon.usedCartridge,
                carbineWeight: req.body.weapon.carbineWeight,
                carbineLength: req.body.weapon.carbineLength,
                magazineVolume: req.body.weapon.magazineVolume,
                shooting: req.body.weapon.shooting,
                producer: req.body.weapon.producer,
                factoryNumber: req.body.weapon.factoryNumber,
                saleDate: req.body.weapon.saleDate,
                getDate: req.body.weapon.getDate,
                shelfLife: req.body.weapon.shelfLife,
                set: {
                    carbine: req.body.weapon.set.carbine,
                    magazine: req.body.weapon.set.magazine,
                    passport: req.body.weapon.set.passport,
                    accessory: req.body.weapon.set.accessory,
                    packaging: req.body.weapon.set.packaging
                },
                permission: {
                    type: req.body.weapon.permission.type,
                    certificateNumber: req.body.weapon.permission.certificateNumber,
                    giveDate: req.body.weapon.permission.giveDate,
                    controlDate: req.body.weapon.permission.controlDate,
                    whoGived: req.body.weapon.permission.whoGived,
                }
            },
            medical: {
                institutionName: req.body.medical.institutionName,
                institutionAddress: req.body.medical.institutionAddress,
                giveDate: req.body.medical.giveDate
            }
        });
        await newUser.save();
        res.status(201).json({
            message: 'Пользователь успешно создан',
            success: true
        });

    } catch (err) {
        res.status(500).json({
            message: 'Не удалось создать пользователя',
            success: false
        });
    }
});


//admin login
router.post('/login', async (req, res) => {
    try {
        const { login, password } = req.body;
        //find admin by login
        const admin = await Admin.findOne({ login: login });
        if (!admin) {
            return res.status(404).json({
                message: 'Такого администратора не существует'
            });
        }
        // compare passwords
        isMatch = bcrypt.compareSync(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Неверный пароль'
            });
        }
        // if password match generate token 
        // in data will be all that we print in front-end
        const token = jwt.sign({
            type: "admin",
            data: {
                _id: admin._id,
                login: admin.login
            }
        }, secret, { expiresIn: 60 * 60 });

        res.status(200).json({
            token: `Bearer ${token}`,
            success: true
        });
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось авторизоваться',
            success: false
        });
    }
});
// all users table
router.get('/all-users', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const users = await User.find();
        const results = {};

        results.results = users.slice(startIndex, endIndex);
        results.total = users.length;

        if (endIndex < users.length) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }


        res.status(200).json(results);
    } catch (err) {
        return res.status(500).json({
            message: 'Не удалось получить всех пользователей',
            success: false
        });
    }
});
// admin profile
router.get('/profile', passport.authenticate('jwt', { session: false }), async (req, res) => {
    res.status(200).json(req.user);
});

// admin find user by id
router.get('/current-user/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {

        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({
            message: 'Не удалось получить пользователя',
            success: false
        });
    }
});

router.delete('/delete-user/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Пользователь успешно удален!',
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Не удалось удалить пользователя',
            success: false
        });
    }
});
module.exports = router;