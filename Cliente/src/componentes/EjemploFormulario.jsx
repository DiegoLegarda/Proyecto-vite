import { Button, Alert, Form } from "react-bootstrap";

function FormularioReact() {
    return (
        <div>
            <Alert variant="success">
                Este es un mensaje de éxito!
            </Alert>

                <Button variant="primary">Primario</Button>
                <Button variant="secondary">Secundario</Button>
                <Button variant="success">Éxito</Button>
                <Button variant="danger">Peligro</Button>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    );
}

export default FormularioReact;