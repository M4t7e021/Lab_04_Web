import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';

function App() {
  const [healthMessage, setHealthMessage] = useState('');
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    // Apuntamos al puerto 4000 que configuró tu compañero
    fetch('http://localhost:4000/api/health')
      .then(res => res.json())
      .then(data => setHealthMessage(data.message))
      .catch(err => console.error("Error en health:", err));

    fetch('http://localhost:4000/api/info')
      .then(res => res.json())
      .then(data => setInfoData(data))
      .catch(err => console.error("Error en info:", err));
  }, []);

  return (
    <Container className="py-5">
      {/* PUNTO 3: Título */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Taller IV</h1>
        <p className="text-muted">Programación Web - Ciclo 02, 2026</p>
      </div>

      {/* PUNTO 4: Endpoint /api/health */}
      <section className="p-4 mb-5 bg-light rounded shadow-sm border">
        <div>
          <h4 className="text-success fw-bold">Estado del Servidor (/api/health)</h4>
          <p className="fs-5 mb-0 text-secondary">
            Mensaje: <strong>{healthMessage || "Cargando..."}</strong>
          </p>
        </div>
      </section>

      {/* PUNTO 5: Endpoint /api/info */}
      <section className="mt-4">
        <h3 className="mb-4 text-dark border-bottom pb-2">Información de los Integrantes (/api/info)</h3>
        <Row>
          {infoData && infoData.integrantes ? (
            infoData.integrantes.map((persona, index) => (
              <Col sm="12" md="6" key={index} className="mb-4">
                <Card className="shadow-sm h-100 border-0 bg-white border-top border-primary border-3">
                  <CardBody>
                    <CardTitle tag="h5" className="text-primary fw-bold mb-3">
                      {persona.nombre}
                    </CardTitle>
                    <CardText className="mb-2">
                      <strong>Carnet:</strong> {persona.carnet}
                    </CardText>
                    <CardText className="mb-2">
                      {/* Ojo aquí: usamos 'persona.ciudad' tal como lo escribió tu compañero */}
                      <strong>Ciudad de origen:</strong> {persona.ciudad}
                    </CardText>
                    <CardText className="mb-2">
                      <strong>Carrera:</strong> {persona.carrera}
                    </CardText>
                    <CardText className="mb-0 mt-3">
                      <strong>Proyectos realizados:</strong>{" "}
                      <Badge color="success" pill className="px-3 py-2 fs-6">
                        {persona.proyectosRealizados}
                      </Badge>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-muted">Cargando datos del servidor...</p>
          )}
        </Row>
      </section>
    </Container>
  );
}

export default App;