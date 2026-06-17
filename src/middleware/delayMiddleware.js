const delayMiddleware = (store) => (next) => (action) => {

    setTimeout(() => {

        next(action);

    }, 1000);

};

export default delayMiddleware;