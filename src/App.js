import React from 'react';

function App() {

    const title = "Welcome to my first app";
    const body = "cool beans is my favourite";
    const comments = [
        {id : 1, text : 'Comment one'},
        {id : 2, text : 'Comment two'},
    ]
    return (
        <div className = 'container'>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>

        <div className= 'comments'>
            <h3>Comments ( {comments.length} )</h3>

            <ul>
                {comments.map((comment,index) => {
                    return <li key={index}> {comment.text} </li>
                })}
            </ul>
        </div>

        </div>
    )
}

export default App;