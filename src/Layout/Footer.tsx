import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Color from '../Styles/colors';

const FooterContainer = styled(Container)`
  background-color: ${() => Color.DEEP_GREEN};
`;

const FooterTextContainer = styled.div`
  font-size: 14px;
  color: #ffffff;
`;

const ResponsiveTextContainer = styled.div`
  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

export default function () {
  return (
    <FooterContainer fluid className={'p-0'}>
      <Row noGutters>
        <Col
          lg={4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
          }}
          className='d-none d-lg-flex'
        >
          <FooterTextContainer>
            <div>Design by QURIAN, Philographer</div>
            <ResponsiveTextContainer>
              contact@unit.center
            </ResponsiveTextContainer>
          </FooterTextContainer>
        </Col>
        <Col lg={4} className='d-none d-lg-flex'/>
        <Col
          lg={4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
          }}
          className='d-none d-lg-flex'
        >
          <FooterTextContainer style={{ textAlign: 'center' }}>
            Copyright © UNIT 2020
          </FooterTextContainer>
        </Col>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
          }}
          md={12}
          className='d-flex d-lg-none'
        >
          <FooterTextContainer>
            <ResponsiveTextContainer>
              Design by QURIAN, Philographer
            </ResponsiveTextContainer>
            <ResponsiveTextContainer>
              contact@unit.center
            </ResponsiveTextContainer>
            <ResponsiveTextContainer>
              Copyright © UNIT 2020
            </ResponsiveTextContainer>
          </FooterTextContainer>
        </Col>
      </Row>
    </FooterContainer>
  );
}
