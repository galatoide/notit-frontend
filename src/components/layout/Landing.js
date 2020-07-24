import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                            <div className="">
                                <h5>Good or bad vibes?</h5>
                                <h2>Check your texts before publishing.</h2>
                                <p>Get a quick overview of the texts you write online or other people's.</p>
                            </div>
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <Container>
                        <Row className=" mb-d-30">
                            <Col className="col-lg-4 col-sm-6 mb--30">    
                                <Card className="content">
                                    <Card.Img src={require("./images/bg-6.jpg")} alt="proof"/>
                                    <Card.Title>Fool proof 🤣</Card.Title>
                                    <Card.Text>Just text or copy and paste the text 📝. <br/>
                                    As you write you can see the impact of the words.</Card.Text>
                                </Card>
                            </Col>
                            <Col className="col-lg-4 col-sm-6 mb--30">
                                <Card className="content">
                                    <Card.Img src={require("./images/bg-7.jpg")} alt="proof"/>
                                    <Card.Title>100% Responsive</Card.Title>
                                    <Card.Text>It started that way...but if you are on mobile and can read this I recommend you use this on a big screen 😅. </Card.Text>
                                </Card>
                            </Col>
                            <Col className="col-lg-4 col-sm-6 mb--30">
                                <Card className="content">
                                    <Card.Img src={require("./images/bg-8.jpg")} alt="proof"/>
                                    <Card.Title>50+ Notits</Card.Title>
                                    <Card.Text>You can create has much Notits as you want (having in mind that this is using free everything so eventually there won't be storage left available 😂).</Card.Text>
                                </Card>
                            </Col>
                        </Row>
                </Container>
            </div>
         );
    }
}
 
export default Landing;