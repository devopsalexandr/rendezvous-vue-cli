import router from "../router";

export default function (err, vm, info) {

    if(err.response && err.response.status === 401) {
        router.replace({name: 'login'});
    }

}