import React from 'react'
import { Row, Dropdown, DropdownButton, Button } from 'react-bootstrap'

const FilterBar = props => {

    const { categories, filterBy, sortBy } = props

    return (
        <Row style={{margin: '20px 0px'}}>
            <DropdownButton title="Filter by" style={{marginRight: '20px'}} variant="secondary">
                <Dropdown.Item as="button" onClick={() => filterBy(false)}>Show all</Dropdown.Item>
                {categories && categories.map(elm => <Dropdown.Item key={elm.id} as="button" onClick={() => filterBy(elm.id)}>{elm.title}</Dropdown.Item>)}
            </DropdownButton>
            <Button onClick={() => sortBy()} variant="secondary">Sort</Button>
        </Row>
    )
}

export default FilterBar