const loggingMiddleware = (store) => (next) => (action) => {

    console.log("===== LOGGING MIDDLEWARE =====");
    console.log("Action:", action);

    const result = next(action);

    console.log("Nuovo stato:", store.getState());

    return result;
};

export default loggingMiddleware;