import React, {useEffect, useState} from "react";

import {getData} from "../../Modules/Api";
import {FetchData} from "../../Modules/Interfaces";
import {MainSection, Spinner, SpinnerInner} from "../../Styles/Common";

import Post from "./Componets/Post";
import Pagination from "./Componets/Pagination";
import {Filter} from "./Componets/Filter";

const Dashboard = () => {
    const [allPosts, setPosts] = useState<Array<FetchData>>([]),
          [allUsers, setUsers] = useState<Array<FetchData>>([]),
          [loaded, setLoaded] = useState<boolean>(false),
          [filter, setFilter] = useState<string>(''),
          //Здесь представим что у нас может быть очень много постов и запрос к API это pageable
          [page, setPage] = useState<number>(0);

    const fetchData = async () => {

        //Но запрос сразу возвращает всё и pageable так и останется TODO украшательством
        const data = await getData();

        if (data.status) {
            setPosts(data.posts);
            setUsers(data.users);
        } else {
            alert(`Something went wrong, got error: ${JSON.stringify(data.reason)}`)
        }

        setLoaded(true);
    }

    const applyFilter = () => {
        if (filter.length === 0) {
            return allPosts;
        }

        return allPosts.filter(post => post.title?.indexOf(filter) !== -1);
    }

    const getPosts = () => {
        const filteredPosts = applyFilter(),
              globalAmount = Math.ceil(filteredPosts.length/20);

        if (globalAmount < page) setPage(0);
        return {
            posts: filteredPosts.slice(page*20, (page+1) * 20),
            globalAmount: globalAmount
        };
    }

    const changePage = (page:number):void => {
        setPage(page)
    }

    const currentPosts = getPosts();

    useEffect(() => {
        if (allPosts.length === 0 || allUsers.length === 0) {
            fetchData();
        }
    }, );

    if (!loaded) {

        return <Spinner>
                 <SpinnerInner>&lt;&gt;</SpinnerInner>
               </Spinner>

    } else {

        return (
            <div>
                <Filter onChange={setFilter}/>

                <Pagination
                    currentPage={page}
                    amountOfPages={currentPosts.globalAmount}
                    changePage={changePage}
                />

                <MainSection className="lol">
                    {currentPosts.posts.map(post => <Post
                        user={allUsers.filter(elem => elem.id === post.userId)[0]}
                        key={post.id}
                        index={post.id}
                        postData={post}
                    />)}
                </MainSection>

                <Pagination
                    currentPage={page}
                    amountOfPages={currentPosts.globalAmount}
                    changePage={changePage}
                />
            </div>
        );

    }
}

export default Dashboard;
