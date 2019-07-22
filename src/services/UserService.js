import HttpApiClient from "./HttpApiClient";

const UserService = {

    getProfile() {
        return HttpApiClient.get('/profile')
    },

    uploadAvatar(fd) {
        return HttpApiClient.post('/photos', fd);
    }
};

export default UserService;