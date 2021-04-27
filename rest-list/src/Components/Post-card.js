import React from 'react'
import { Col, Card } from 'react-bootstrap'


const PostCard = ({ post }) => {
    
    const { title, description, image, published_at } = post

    const date = new Date(published_at)

    return (
        <Col xs={12} sm={6} md={6} lg={4}>
            <Card>
                <Card.Img variant="top" src={image} alt="Image not found" style={{objectFit: 'cover', height: '250px'}}/>
                <Card.Body>
                    <Card.Title className="overflow-auto">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Published: {date.toDateString()}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default PostCard


