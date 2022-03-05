import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const FreeformLeftnav = () => {
  return (
    <MDBListGroup style={{ minWidth: '22rem' }}>
      <MDBListGroupItem tag='button' action active aria-current='true' type='button'>
        Cras justo odio
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button'>
        Dapibus ac facilisis in
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button'>
        Morbi leo risus
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action type='button'>
        Porta ac consectetur ac
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action disabled type='button'>
        Vestibulum at eros
      </MDBListGroupItem>
    </MDBListGroup>
  );
}

export default FreeformLeftnav;