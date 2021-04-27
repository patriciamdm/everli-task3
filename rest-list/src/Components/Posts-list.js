import React, { useState, useEffect } from 'react'
import { Container, Row, Alert } from 'react-bootstrap'

import Loader from './Loader'
import PostCard from './Post-card'


const PostsList = () => {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState()

    const getPosts = url => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data.posts))
            .catch(err => setError(err.message))
    }

    useEffect(() => {
        getPosts('http://www.mocky.io/v2/5c4350a23800004c00072e0a')
    }, [])

    return (
        <Container style={{textAlign: 'center'}}>
                {error
                    ?
                    <Alert variant='danger'>There was an error! {error}</Alert>
                    :
                    posts.length > 0
                    ?
                    <Row>
                        {posts.map(elm => <PostCard key={elm.id} post={elm} />)}
                    </Row>
                    :
                    <Loader />
                }
        </Container>
    )
}

export default PostsList