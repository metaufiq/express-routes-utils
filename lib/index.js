"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create singleton mongoDB connection
 * @param { string[] } path array of Express JS route
 * @param { ExpressMiddleware } middleware Express JS middleware
 * @return {Function}  return next event or execute middleware for current activity
 */
const unless = (path, middleware) => {
    return function (req, res, next) {
        if (path.includes(req.path)) {
            return next();
        }
        else {
            return middleware(req, res, next);
        }
    };
};
const routesUtils = {
    unless
};
exports.default = routesUtils;
