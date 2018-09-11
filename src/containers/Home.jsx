import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Welcome Fham</h1>
            <p className="lead">This is some random text that I wrote, be proud of me. </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
