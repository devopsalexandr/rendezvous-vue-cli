import HttpApiClient from "./HttpApiClient";

const AuthService = {

    login(email, password) {
        let data = {
            email: email,
            password: password
        };

        return HttpApiClient.post('/login', data)
    },

    logout(){
        return HttpApiClient.post('/logout')
    },

    register(email, name, password, country, city, birthday, sex){
        let data = {
            email: email,
            name: name,
            password: password,
            country: country,
            city: city,
            birthday: birthday,
            sex: sex
        };

        return HttpApiClient.post('/register', data);
    }
};

export default AuthService;