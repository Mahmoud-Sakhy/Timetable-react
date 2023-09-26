import { Col, Row } from "react-bootstrap";

const DetaMaid = ({ Data }) => {
  return (
    <Row className=" d-flex justify-content-center">
      <Col sm={12} xs={12} md={12} lg={12}>
        <div className="contte ">
          {Data.length ? (
            Data.map((itme) => {
              return (
                <div
                  key={Math.random()}
                  className=" d-flex justify-content-between border-dark border-bottom "
                >
                  <h3>{itme.name}</h3>
                  <h3>الساعه {itme.deta}</h3>
                </div>
              );
            })
          ) : (
            <p>Page Not Found 404 Error</p>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DetaMaid;
