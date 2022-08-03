import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PostRequestHooks() {
    const [articleId, setArticleId] = useState(null);

    useEffect ( () => {
        const article = { title: 'React POst Request Example'}
        axios.post('https://reqres.in/api/articles' , article)
        .then(response => setArticleId(response.data.id))
    }, []);

    return (
        <div className='card text-center m-3'>
                <h5 className='card-header'>Simple Post request</h5>
                <div className='card-body'>
                    Returned Id: {articleId}
                </div>
        </div>
    )
}

export default PostRequestHooks;