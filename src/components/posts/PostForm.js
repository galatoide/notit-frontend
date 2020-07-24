import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../form/Input";
import Textarea from "../form/Textarea";

import Sentiment from 'sentiment'
const sentiment = new Sentiment();

class PostForm extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         sentimentScore: null,
         generalSentiment: null
      };
      this.findSentiment = this.findSentiment.bind(this)
   }

   findSentiment(e) {
      const result = sentiment.analyze(e.target.value)
      console.log(result)
      this.setState({
         sentimentScore: result.score
      })
      if (result.score < 0){
         this.setState({
            generalSentiment: 'Negative 😒'
         })
      } else if (result.score > 0) {
         this.setState({
            generalSentiment: 'Positive 😊'
         })
      } else {
         this.setState({
            generalSentiment: 'Neutral 😐'
         })
      }
   }

   render(){
   const { post, onChange, onBlur, loading, onSubmit } = this.props;
   const { title, body, errors } = post;
   return (
      <Container>
         <Row>
               <Col className="mx-auto">
               <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                  <Input
                     name="title"
                     type="text"
                     placeholder="Enter Notit Title"
                     value={title}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                           module: "post",
                           label: "Title",
                           error: errors.title
                     }}
                  />
                  <Textarea
                     name="body"
                     placeholder="Write your Notit here..."
                     value={body}
                     onChange={e => {onChange(e); this.findSentiment(e) }}
                     onBlur={onBlur}
                     text={{
                           module: "post",
                           label: "Text",
                           error: errors.body
                     }}
                  />
                     <Row>
                     <Col>
                        <Button
                           variant="outline-info"
                           type="submit"
                           disabled={loading}
                           className="mt-3"
                        >
                           Submit
                        </Button>
                     </Col>
                     {this.state.sentimentScore !== '' &&
                        <Col>
                           {/* <textarea onChange={this.findSentiment} /> */}
                           <p>Sentiment Score: {this.state.sentimentScore}</p>
                       
                           <p>General Sentiment: {this.state.generalSentiment}</p>
                        </Col>
                     }
                  </Row>
               </Form>
               </Col>
         </Row>
      </Container>
    );
};
};

PostForm.propTypes = {
   post: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

export default PostForm;