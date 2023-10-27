"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    console.log('GET request to user route');
    res.send('GET request to user route');
});
exports.default = router;
//# sourceMappingURL=user-routes.js.map