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
      <Row>
        <Col
          sm={12}
          lg={4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
          }}
        >
          <FooterTextContainer>
            <div>Design by QURIAN, Philographer</div>
            <ResponsiveTextContainer>
              contact@unit.center
            </ResponsiveTextContainer>
          </FooterTextContainer>
        </Col>
        <Col sm={0} lg={4}></Col>
        <Col
          sm={12}
          lg={4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
          }}
        >
          <FooterTextContainer style={{ textAlign: 'center' }}>
            Copyright © UNIT 2020
          </FooterTextContainer>
        </Col>
      </Row>
    </FooterContainer>
  );
}
