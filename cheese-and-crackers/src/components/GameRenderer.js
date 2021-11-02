import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const GameRenderer = ({board}) => {

        let renderedBoard = []
        let spaceCount = 1

        for (let i = 0; i < board.length; i++){
            renderedBoard.push(<Row sm={board.length}>{board.map(space => <Col id={spaceCount++}>{space}</Col>)}</Row>)
        }
        return(
            <Container>{renderedBoard}</Container>
        )
}

export default GameRenderer