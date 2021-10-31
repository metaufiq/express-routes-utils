
type ExpressMiddleware =(
    req: any,
    res: any,
    next: any
)=>any

/**
 * Create singleton mongoDB connection
 * @param { string[] } path array of Express JS route
 * @param { ExpressMiddleware } middleware Express JS middleware
 * @return {Function}  go to next event or execute middleware for current activity
 */
const unless = (path: string[], middleware: ExpressMiddleware): Function => {
	return function(req: any, res: any, next: Function) {
		if (path.includes(req.path)) {
			return next();
		} else {
			return middleware(req, res, next);
		}	
	};
};

const routesUtils = {
    unless
}

export default routesUtils;