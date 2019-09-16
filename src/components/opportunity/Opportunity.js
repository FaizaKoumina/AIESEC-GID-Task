import React from 'react';

import {Button,Card} from 'react-bootstrap';

import './Opportunity.css';

const Opportunity = ({image, title, duration, country, id, handleShow, displayProgramme, product, productTitle}) => {
  return(
    <div key={id} className="col-md-4 col-sm-12" style={{marginBottom:"2em"}}>
      <Card className="Opportunity">
        <Card.Img variant="top" src={image} alt={title}/>
        <Card.Body>
          <Card.Title className="Opportunity__title">{title}</Card.Title>
          <Card.Text className="Opportunity__text">
            <p>{ duration + " weeks | " + country }</p>
            <p className={productTitle}>{ displayProgramme(product) }</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleShow.bind(this,id)} style={{marginRight:"1em"}}>Edit</Button>
        </Card.Footer>
      </Card>


    </div>
  );
}



export default Opportunity;
