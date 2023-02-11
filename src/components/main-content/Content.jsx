import "./Content.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RegistrationForm from "../driver-registration-form/Form";

const Content = () => {
  return (
    <div  className="content-container">
     <Row>
     <Col className="flex align-items-center heading-text mb-sm">
     <div className="d-grid gap-2">
          <h1 class="heading-1 mb-sm">Make money driving with Bolt</h1>
          <h5 class="heading-5 weight-400">
           Become a bolt driver, set your schedule and earn extra money by driving!
          </h5>
          <span>Learn more  <span class="bottom-arrow"></span></span>
          </div>
        </Col>
        <Col>
         <RegistrationForm></RegistrationForm>
        </Col>
        </Row>
      </div>
  );
};

export default Content;
