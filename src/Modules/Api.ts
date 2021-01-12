import {FetchResponse, FinalResponse, FetchData} from "./Interfaces";

const baseUrl = "https://jsonplaceholder.typicode.com";
const fetchData = (url:string, settings:object = {method: "GET"}) => {

    return fetch(url, {...settings})
        .then(async res => {

            if (res.ok) {
                const body:Array<FetchData> = await res.json();
                return {ok: !0, data:body};
            } else {
                throw res;
            }
        })
        .catch(err => {
            console.log(err);
            return {ok: !1, data: [], reason: err};
        });

}

const getPosts = async () => {
    return await fetchData(`${baseUrl}/posts`);
}

const getUsers = async () => {
    return await fetchData(`${baseUrl}/users`);
}

const getData = async () => {
    return new Promise<FinalResponse>(async (resolve) => {
        const users:FetchResponse = await getUsers();
        const posts:FetchResponse = await getPosts();

        let result:FinalResponse;

        if (!users.ok || !posts.ok) {
            result = {
                status: !1,
                reason: users.reason,
                users: [],
                posts: []
            }
        } else {
            result = {
                status: !0,
                users: users.data,
                posts: posts.data
            };
        }

        resolve(result);

    }).then(<FinalResponse>(res:FinalResponse) => {
        return res;
    })
}

export {getData};
