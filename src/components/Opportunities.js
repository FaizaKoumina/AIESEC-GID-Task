import React from 'react';

import Opportunity from './opportunity/Opportunity';

const Opportunities = ({opportunities,handleShow,displayProgramme}) => {
  return(
    <div className="container" style={{marginTop:"3em"}}>
      <div className="row">
        {opportunities.map((opportunity) => (
          <Opportunity
            image={opportunity.cover_photo_urls}
            title={opportunity.title}
            duration={opportunity.duration}
            country={opportunity.office.country}
            id={opportunity.id}
            handleShow={handleShow}
            displayProgramme={displayProgramme}
            product={opportunity.programmes.id}
            productTitle={opportunity.programmes.short_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Opportunities;
