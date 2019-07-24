export const setTokenToEcho = (token) => {

    if(!token) {
        window.Echo.connector.options.auth.headers['Authorization'] = 'Bearer ' + null;
        return;
    }

    window.Echo.connector.options.auth.headers['Authorization'] = 'Bearer ' + token;

}