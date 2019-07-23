import HttpApiClient from "./HttpApiClient";

const UserService = {

    getProfile() {
        return HttpApiClient.get('/profile')
    },

    uploadAvatar(fd) {
        return HttpApiClient.post('/photos', fd);
    },

    updateStatus(string) {
        let status = { 'tiny_about': string };
        // return HttpApiClient.put('/profile', status);
        return this.updateProfile(status);
    },

    updateProfile(dataObject) {
        return HttpApiClient.put('/profile', dataObject);
    },

    getProfileById(id) {
        return HttpApiClient.get('/profile/' + id);
    }
};

export default UserService;