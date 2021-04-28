import React, { useState, useEffect } from 'react'
import { Container, Row, Alert } from 'react-bootstrap'

import Loader from './Loader'
import PostCard from './Post-card'
import FilterBar from './Filter-bar'


const PostsList = () => {

    const [posts, setPosts] = useState()
    const [categories, setCategories] = useState()
    const [filterPosts, setFilterPosts] = useState()
    const [error, setError] = useState()

    const [filter, setFilter] = useState()
    const [sort, setSort] = useState(false)

    const getPosts = url => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts)
                setFilterPosts(data.posts)
            })
            .catch(err => setError(err.message))
    }

    const getCategories = url => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data.categories))
            .catch(err => setError(err.message))
    }

    useEffect(() => {
        if (filter) {
            setSort(false)
            setFilterPosts(posts.filter(elm => elm.category === filter))
        } else {
            setFilterPosts(posts)
        }
    }, [filter])

    useEffect(() => {
        const newPosts = filterPosts && [...filterPosts]
        if (sort) {
            newPosts.sort((a, b) => (a.published_at < b.published_at) ? 1 : -1)
            setFilterPosts(newPosts)
        } else if (!sort && filter) {
            setFilterPosts(posts.filter(elm => elm.category === filter))
        } else if (!sort) {
            setFilterPosts(posts)
        }
    }, [sort])

    useEffect(() => {
        getPosts('http://www.mocky.io/v2/5c4350a23800004c00072e0a')
        getCategories('http://www.mocky.io/v2/5c43503a3800006f00072e08')
    }, [])

    return (
        <Container style={{textAlign: 'center'}}>
                {error
                    ?
                    <Alert variant='danger'>There was an error! {error}</Alert>
                    :
                    filterPosts
                    ?
                    <>
                        <FilterBar categories={categories} filterBy={value => setFilter(value)} sortBy={() => setSort(!sort)} />
                        <Row>
                            {filterPosts.map(elm => <PostCard key={elm.id} post={elm} />)}
                        </Row>
                    </>
                    :
                    <Loader />
                }
        </Container>
    )
}

export default PostsList