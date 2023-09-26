import { Col, Row } from "react-bootstrap";

const DetaButten = ({ Delete, View }) => {
  return (
    <Row className=" d-flex justify-content-center">
      <Col
        sm={12}
        xs={12}
        md={12}
        lg={12}
        className=" d-flex justify-content-between   py-5"
      >
        <button onClick={Delete} className="btn btn-dark">
          مسح الجميع
        </button>
        <button onClick={View} className="btn btn-dark">
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
};

export default DetaButten;
