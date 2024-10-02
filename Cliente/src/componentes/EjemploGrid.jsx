import { Container, Row, Col } from 'react-bootstrap';

function Grid() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <p>Este Col ocupa 12 columnas en pantallas xs y 8 en md o superiores</p>
        </Col>
        <Col xs={6} md={4}>
          <p>Este Col ocupa 6 columnas en pantallas xs y 4 en md o superiores</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={4}>
          <p>Col xs=6 sm=4</p>
        </Col>
        <Col xs={6} sm={4}>
          <p>Col xs=6 sm=4</p>
        </Col>
        <Col sm={4}>
          <p>Col sm=4</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;