import React from 'react'
import { Row, Dropdown, DropdownButton, Button } from 'react-bootstrap'

const FilterBar = props => {

    const { categories, filterBy, sortBy } = props

    return (
        <Row>
            <DropdownButton title="Filter by">
                <Dropdown.Item as="button" onClick={() => filterBy('all')}>Show all</Dropdown.Item>
                {categories.map(elm => <Dropdown.Item key={elm.id} as="button" onClick={() => filterBy(elm.id)}>{elm.title}</Dropdown.Item>)}
            </DropdownButton>
            <Button onClick={() => props.sortBy()}>Sort</Button>
        </Row>
    )
}

export default FilterBar