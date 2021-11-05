import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const GameRenderer = ({board}) => {

    let grid = []
    let counter = 0

    for (let i = 0; i < Math.sqrt(board.length); i++){
        grid[i] = []
        for (let j = 0; j < Math.sqrt(board.length); j++){
            grid[i].push(board[counter])
            counter++
        }
    }

    let renderedBoard = []

    for (let i = 0; i < grid.length; i++){
        renderedBoard = grid.map(array => <Row sm={grid.length}>{array.map(space => <Col><img src={space} alt="space" width="100px" height="100px"/></Col>)}</Row>)
    }

    return(
        <>
            <Container>{renderedBoard}</Container>
        </>
    )
}

export default GameRenderer