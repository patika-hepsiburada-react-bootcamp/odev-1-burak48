import UserDataService from './lib/service.js';


(async () => {
    const userData = await UserDataService.getUsersData(1)
        .then((response) => response.data)
        .catch((e) => console.log(e.message))
    const postData = await UserDataService.postUserData(1)
        .then((response) => response.data)
        .catch((e) => console.log(e.message))

    const newObj = { ...userData, posts: postData };
    console.log(newObj);
})();
