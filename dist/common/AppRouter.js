"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class AppRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.setupRoutes();
    }
    get expressRouter() {
        return this.router;
    }
    addRouter(path, child) {
        this.router.use(path, child.expressRouter);
    }
}
exports.AppRouter = AppRouter;
//# sourceMappingURL=AppRouter.js.map