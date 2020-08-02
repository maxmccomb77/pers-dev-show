import React, { Component } from "react";
import {
  Accordion,
  Card,
  Jumbotron,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

class ResumePage extends Component {
  render() {
    const renderJumbotron = () => {
      return <div></div>;
    };

    return (
      <div>
        <Row>
          <Col sm={8}>
            <Jumbotron fluid>
              <Container>
                <h1>
                  <b>Maxwell McComb</b>
                </h1>
                <p>885 22nd Ave. Apt 310. Silvis, IL, 61282</p>
                <p>maxmccomb77@gmail.com</p>
                <p>(847) 354-0080</p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col fluid="true">
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b>PROFESSIONAL SUMMARY</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Container sm>
                      <p>
                        My ability to adapt to new situations sets me apart from
                        other candidates. While I am productive working
                        independently, I can also work efficiently in a team
                        environment. These strengths make me a valuable asset
                        who will contribute to success in the workplace.
                      </p>
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b>EDUCATION</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Container fluid>
                      <Col>
                        <p>
                          <b>Bachelor of Arts</b>
                        </p>
                        <p>Augustana College, Rock Island, IL</p>
                        <p>Major: Compoter Science</p>
                        <p>Minor: Mathematics</p>
                        <p>GPA: 3.57/4.0</p>
                        <p>Honors:</p>
                        <ul>
                          <li>Dean's Scholarship: $22,000 annually</li>
                          <li>Dean's List: 8/11 Terms</li>
                        </ul>
                      </Col>
                      <Col>
                        <Card>
                          <Card.Img src="..\..\assets\augustanalogo.jpeg" />
                        </Card>
                      </Col>
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b>RELEVANT EXPERIENCE / SKILLS</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Java.....................6 Years</ListGroup.Item>
                      <ListGroup.Item>Scrum/Agile..............4 Years</ListGroup.Item>
                      <ListGroup.Item>Github...................4 Years</ListGroup.Item>
                      <ListGroup.Item>Python...................2 Years </ListGroup.Item>
                      <ListGroup.Item>Android Studio...........1 Year</ListGroup.Item>
                      <ListGroup.Item>Unity AR (C#)............1 Year</ListGroup.Item>
                      <ListGroup.Item>React....................1 Month</ListGroup.Item>
                      <ListGroup.Item>CSS......................1 Month</ListGroup.Item>
                      <ListGroup.Item>Java Spring Framework....1 Month</ListGroup.Item>
                      <ListGroup.Item>AWS.......................TBD</ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b>WORK EXPERIENCE</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p>
                      <b>ITDP Supply Chain Software Engineer</b>
                    </p>
                    <p>June 2020 - Present</p>
                    <p>Deere &amp; Company (John Deere), Moline, IL</p>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        Improve and maintain Java Spring, and React
                        applications.
                      </li>
                      <li>
                        Create and maintain cloud infrastructure using AWS
                        resources such as RDS, EC2, S3, and Route53.
                      </li>
                      <li>
                        Implement continuous integration pipelines using Drone
                        and Jenkins.
                      </li>
                      <li>Participate in Scrum rituals and events.</li>
                      <li>
                        Design UI/UX elements for both internal and external
                        audiences.
                      </li>
                    </ul>

                    <p>
                      <b>Software Engineer Part-Time Student</b>
                    </p>
                    <p>November 2018 - May 2020</p>
                    <p>Deere &amp; Company (John Deere), Moline, IL</p>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        Research a way to improve data processing efficiency by
                        leveraging solutions in Amazon Web Services.
                      </li>
                      <li>
                        Develop a mobile (iOS) application that helps walk a
                        customer through a routine maintenance process on their
                        piece of Deere equipment by using augmented reality
                        technology.
                      </li>
                      <li>
                        Keep track of user stories and highlight development
                        goals for current and future sprints using the scrum
                        methodology.
                      </li>
                    </ul>
                    <p>
                      <b>Information Systems Intern</b>
                    </p>
                    <p>February 2019 - May 2019</p>
                    <p>
                      International Development Enterprises (iDE) Global,
                      Denver, CO
                    </p>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        Design an inventory database system using Salesforce to
                        help the organization keep track of assets such as
                        computers and vehicles.
                      </li>
                      <li>
                        Create pieces of software to help with internal
                        collaboration and communication within the organization
                        such as an email template for the WASH initiative and an
                        internal website for the Global Initiatives department.
                      </li>
                    </ul>

                    <p>
                      <b>Heating and Air-Conditioning Service Technician</b>
                    </p>
                    <p>May 2013 - November 2018</p>
                    <p>Norwood Mechanical, Algonquin, IL</p>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        Respond to customers needs in a timely and friendly
                        manner, building up a repore and even a friendship with
                        them in order to effectively meet their needs.
                      </li>
                      <li>
                        Communicate in a professional setting with service
                        managers, contractors, and other employees to properly
                        complete projects.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResumePage;
