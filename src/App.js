import { Col, Row } from "react-bootstrap";
import "./App.css";
import Left from "./components/left";
import Right from "./components/right";

function App() {
  return (
    <Row className="vh-100 bg-black">
      <Col lg={6} className="h-100">
        <Left />
      </Col>
      <Col lg={6} className="h-100 max-vh-100 overflow-y-auto">
        <Right />
      </Col>
    </Row>
  );
}

export default App;
