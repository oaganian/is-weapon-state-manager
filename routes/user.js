const router = require('express').Router();
/* */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*User model */
const User = require('../models/User');

// jwt secret
const { secret } = require('../config/database');


router.post('/login', async (req, res) => {
    try {
        const { login, password } = req.body;
        //find user by login
        const user = await User.findOne({ login: login });
        if (!user) {
            return res.status(404).json({
                message: 'Такого пользователя не существует'
            });
        }
        // compare passwords
        isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Неверный пароль'
            });
        }
        // if password match generate token 
        // in data will be all that we print in front-end
        const token = jwt.sign({
            type: "user",
            data: {
                _id: user._id,
                fio: user.fio,
                login: user.login
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
/*
    Get authed user profile
*/
router.get('/profile', passport.authenticate('jwt', { session: false }), async (req, res) => {
    res.status(200).json(req.user);
});


module.exports = router;