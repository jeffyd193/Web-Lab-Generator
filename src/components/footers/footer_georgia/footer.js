import React from 'react';

import 'react-bootstrap';
import "./footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const FooterGeorgia = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0 text-align-left'>
              <li>
                <a href='#!' className='text-dark'>
                    consectetur adipiscing elit
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                    aliquip ex ea commodo consequat
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                    ullamco laboris nisi ut
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                    quis nostrud exercitation
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                    Lorem Ipsum 
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                    Dolar sit enum
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                    Maceios et tu 
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                    consectetur adipiscing elit
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>Footer text</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
            </MDBCol>

        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://TheSearchLabs.com/'>
          TheSearchLabs.com/FG
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterGeorgia;
