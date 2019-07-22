import HttpApiClient from "./HttpApiClient";

const UserService = {

    getProfile() {
        return HttpApiClient.get('/profile')
    }
};

export default UserService;