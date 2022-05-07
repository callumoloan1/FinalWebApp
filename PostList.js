import { useState, useEffect } from "react";
import React from "react";
import uuid from "uuid/v1"
import { useAuth0 } from "@auth0/auth0-react";
import NewPost from "./NewPost";
import { Link } from 'react-router-dom';

const PostList = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [posts, setPosts] = useState([
        {title: 'Today was an alright day', id: 1},
        {title: 'I have had a very rough day today!', id: 2},
        {title: 'I had a very good day today', id: 3}
    ]);

    const AddPost = (title) => {
       setPosts([...posts, {title, id: uuid() }]) 
    }

    if(isLoading) {
        return <div>Loading Diary Journal!</div>
    }
    
    return (
        isAuthenticated && (
        <div>
            <NewPost AddPost={AddPost} />
            <div className='user'>
                <h1>Posted by {user.nickname}</h1>
                <div className='post-list'>
                        {posts.map(post => {
                            return ( <p key={post}>{post.title}</p>)
                        })}
                </div>
                    <div className="mood">
                        <p>This mood board will try to understand your mood by asking questions. <br />
                        We will then suggest to you what actions to take! </p>
                        <Link to="/Moodboard"><h1>Mood Board</h1></Link>
                            <div className="danger">
                                <Link to ='/Welcome'>Go back</Link>
                            </div>
                    </div>
                </div>    
            </div>    
    )
    )
}

export default PostList