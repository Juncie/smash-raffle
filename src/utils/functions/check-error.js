const checkError = (error) => {
    console.log(error);

    if (typeof error === 'string') {
        return error;
    }
    if (error.response && error.response.data) {
        if (error.response.data.message) return error.response.data.message;
        if (error.response.data.error) return error.response.data.error;
    }
    if (Array.isArray(error.errors)) {
        return error.errors.map((err) => err.message).join(', ');
    }
    if (error.message) {
        return error.message;
    }

    return 'Unknown error';
};

export default checkError;
