import React from 'react';
import axios from 'axios'

export default class PostRequestAsyncAwait extends React.Component {
    
    constructor() {
        super()
        this.state = {
            articleId: null
        };
    }

    async componentDidMount() {
        const article = { title: 'React POst Request Example'}
        const response = await axios.post('https://reqres.in/api/articles' , article)
        this.setState({articleId : response.data.id});
    }
    render() 
    {
        const { articleId } = this.state;
        return (
            <div className='card text-center m-3'>
                <h5 className='card-header'>Simple Post request</h5>
                <div className='card-body'>
                    Returned Id: {articleId}
                </div>
            </div>
        )
    }
    }