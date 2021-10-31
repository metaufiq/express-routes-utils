declare type ExpressMiddleware = (req: any, res: any, next: any) => any;
declare const routesUtils: {
    unless: (path: string[], middleware: ExpressMiddleware) => Function;
};
export default routesUtils;
