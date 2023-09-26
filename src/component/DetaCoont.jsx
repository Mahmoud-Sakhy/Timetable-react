import { Col, Row } from "react-bootstrap";

const DetaCoont = ({ Data  }) => {
  return (
    <Row >
      <Col sm={12} xs={12} md={12} lg={12}>
        <h1>لديك اليوم {Data.length} مواعيد</h1>
      </Col>
    </Row>
  );
};

export default DetaCoont;
