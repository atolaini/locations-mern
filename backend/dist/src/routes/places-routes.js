"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placesRoutes = void 0;
const express_1 = require("express");
const placesControllers_1 = require("../controllers/placesControllers");
const router = (0, express_1.Router)();
exports.placesRoutes = router;
router.get('/:placeid', placesControllers_1.getPlaceById);
router.get('/user/:uid', placesControllers_1.getPlacesByUserId);
router.post('/', placesControllers_1.createPlace);
router.patch('/:placeid', placesControllers_1.updatePlace);
router.delete('/:placeid', placesControllers_1.deletePlace);
//# sourceMappingURL=places-routes.js.map