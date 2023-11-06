"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const places_routes_1 = require("../routes/places-routes");
const user_routes_1 = require("../routes/user-routes");
const http_error_1 = __importDefault(require("../models/http-error"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/places', places_routes_1.placesRoutes);
app.use('/api/users', user_routes_1.usersRoutes);
app.use((req, res, next) => {
    const error = new http_error_1.default('Could note find this route.', 404);
    throw error;
});
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res
        .status(error.code || 500)
        .json({ message: error.message || 'An unknown error occurred!' });
});
app.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
//# sourceMappingURL=app.js.map