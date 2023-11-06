"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logUserIn = exports.createUser = exports.getAllUsers = exports.DUMMY_USERS = void 0;
const uuid_1 = require("uuid");
const http_error_1 = __importDefault(require("../models/http-error"));
exports.DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Adam Tolaini',
        email: 'at@test.com',
        password: 'test',
    },
];
const getAllUsers = (req, res, next) => {
    res.status(200).json({ users: exports.DUMMY_USERS });
};
exports.getAllUsers = getAllUsers;
const createUser = (req, res, next) => {
    const { name, email, password } = req.body;
    const createdUser = {
        id: (0, uuid_1.v4)(),
        name,
        email,
        password,
    };
    //@ts-ignore
    exports.DUMMY_USERS.push(createdUser);
    res.status(201).json({ message: 'new user created', user: createdUser });
};
exports.createUser = createUser;
const logUserIn = (req, res, next) => {
    const { email, password } = req.body;
    const verifiedUser = exports.DUMMY_USERS.find((u) => u.email === email && u.password === password);
    if (!verifiedUser || verifiedUser.password !== password) {
        throw new http_error_1.default('colud not log you in, please check your credentials', 401);
    }
    res.status(200).json({ message: 'user logged in', user: verifiedUser });
};
exports.logUserIn = logUserIn;
//# sourceMappingURL=usersControllers.js.map