import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMessage: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            //console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage:'Error Retreiving data '})
        })
    }
    
    render() {
        const { posts, errorMessage } = this.state;
        return (
            <div>
                <h4>Posts list</h4>
                {
                    posts.length ? 
                    posts.map(post => <h4 key = {post.id}> {post.title}</h4>) :
                    null
                }
                {
                    errorMessage ? <h4>{errorMessage}</h4> : null
                }
            </div>
        )
    }
}

export default PostList
