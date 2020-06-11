const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

// Define Medical schema Мед справка
const MedicalSchema = new Schema({
    institutionName: { //название ужреждения
        type: String,
        required: true
    },
    institutionAddress: { // адрес учреждения
        type: String,
        required: true
    },
    giveDate: { // дата выдачи
        type: String,
        required: true
    }

});
// Define Permission schema Разрешение 
const PermissionSchema = new Schema({
    type: { // тип разрешения
        type: String,
        required: true
    },
    certificateNumber: { //номер удостоверения
        type: Number,
        required: true
    },
    giveDate: { // дата выдачи
        type: String,
        required: true
    },
    controlDate: { // дата контроля
        type: String,
        required: true
    },
    whoGived: { //кто выдал
        type: String,
        required: true
    }

});
// Define Set schema Комплектность оружия
const SetSchema = new Schema({
    carbine: { // Карабин
        type: String,
        required: true
    },
    magazine: { //магазин
        type: String,
        required: true
    },
    passport: { //паспорт
        type: String,
        required: true
    },
    accessory: { //принадлежности
        type: String,
        required: true
    },
    packaging: { //упаковка
        type: String,
        required: true
    }
});
// Define Weapon schema Основные характеристики оружия
const WeaponSchema = new Schema({
    name: { //название
        type: String,
        required: true
    },
    model: { // модель
        type: String,
        required: true
    },
    type: { //тип оружия
        type: String,
        required: true
    },
    caliber: { //калибр
        type: String,
        required: true
    },
    usedCartridge: { // применяемый патрон
        type: String,
        required: true
    },
    carbineWeight: { //масса карабина без патронов
        type: String,
        required: true
    },
    carbineLength: { // Длина карабина
        type: String,
        required: true
    },
    magazineVolume: { // Емкость магазина
        type: String,
        required: true
    },
    shooting: { // Точность стрельбы
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    factoryNumber: {
        type: String,
        required: true
    },
    saleDate: { // дата продажи
        type: String,
        required: true
    },
    getDate: { // дата приемки
        type: String,
        required: true
    },
    shelfLife: { // срок хранения
        type: String,
        required: true
    },
    set: SetSchema,
    permission: PermissionSchema
});
//Define User schema
const UserSchema = new Schema({
    fio: { // инициалы
        type: String,
        required: true
    },
    passportSeries: { // серия паспорта
        type: String,
        required: true
    },
    passportNumber: { // номер паспорта
        type: String,
        required: true
    },
    registerPlace: { // место прописки
        type: String,
        required: true
    },
    login: { // логин
        type: String,
        required: true,
        unique: true
    },
    password: { //пароль
        type: String,
        required: true
    },
    weapon: WeaponSchema,
    medical: MedicalSchema
});

// will drop the error if login is not unique
UserSchema.plugin(uniqueValidator);

module.exports = model('User', UserSchema);

