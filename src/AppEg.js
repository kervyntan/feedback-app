import React from 'react';

function AppEg() {

    const title = "Welcome to my first app";
    const body = "cool beans is my favourite";
    const comments = [
        {id : 1, text : 'Comment one'},
        {id : 2, text : 'Comment two'},
    ]
    const fn = (item) => {
        return <li> {item.text} </li>;
    }

    const loading = false;
    const showComments = true;

    // ? - ternary operator ({showComments ? 'yes' : 'no'})
    // if true, render 'yes', else return 'no'

    if (loading) return <h1>Loading...</h1>
    return (
        <div className = 'container'>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

        {showComments && (        
            <div className= 'comments'>
            <h3>Comments ( {comments.length} )</h3>

            <ul>
                {comments.map (fn) }
            </ul>

        </div>
        )}

        </div>
    )
}

export default AppEg;