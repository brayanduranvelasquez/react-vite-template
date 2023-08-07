import { Row, Col, Typography } from "antd";

import "../sass/views/App.scss";

export default function App() {
  return (
    <div className="container">
      <Row justify="center" align="middle">
        <Col>
          <Typography.Title italic>React Template</Typography.Title>
        </Col>
      </Row>
    </div>
  );
}
