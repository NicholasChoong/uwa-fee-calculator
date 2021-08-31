import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Title = () => {
  return (
    <Container as='section' className='p-0 text-center section-1' fluid>
      <Row>
        <Col sm={12} md={12}>
          <h1>Instructions</h1>
          <p>
            Select your Fee Type from the list. Click &quot;Help&quot; for
            descriptions. Then select which year&apos;s fees to see.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Title
