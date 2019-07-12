import HttpApiClient from "./HttpApiClient";

const AuthService = {

    login(email, password) {
        let data = {
            email: email,
            password: password
        };

        return HttpApiClient.post('/login', data)
    }
};

export default AuthService;