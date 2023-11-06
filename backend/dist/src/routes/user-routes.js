"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
const router = (0, express_1.Router)();
exports.usersRoutes = router;
router.get('/', usersControllers_1.getAllUsers);
router.post('/signup', usersControllers_1.createUser);
router.post('/login', usersControllers_1.logUserIn);
//# sourceMappingURL=user-routes.js.map