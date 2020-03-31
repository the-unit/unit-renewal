import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import API from '../Global/api';

interface LandingPage {
  landingPage: {
    heading: string;
    subheading: string;
    image: Img;
  };
}

interface Img {
  url: string;
}

const ImageContainer = styled.div`
  max-width: 960px;
  height: 360px;
  background-blend-mode: screen;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 110, 39, 0.5) 100%
  );
`;

const LANDING_PAGE = gql`
  {
    landingPage {
      heading
      subheading
      image {
        url
      }
    }
  }
`;

const Banner = () => {
  const { loading, error, data } = useQuery<LandingPage>(LANDING_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div style={{ display: 'block' }}>
      <div
        style={{
          width: '100%',
          backgroundRepeat: 'no-repeat',
          height: '360px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${
            API.END_POINT + ':' + API.PORT + data?.landingPage.image.url
          })`,
        }}
      >
        <ImageContainer>
          <div
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                justifyContent: 'center',
                width: '320px',
                height: '60px',
                backgroundColor: 'rgba(24, 111, 37, 0.85)',
                alignItems: 'center',
                display: 'flex',
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '6px',
              }}
            >
              <span
                style={{
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em',
                  textAlign: 'center',
                }}
              >
                {data?.landingPage.heading}
              </span>
            </div>
            <div
              style={{
                justifyContent: 'center',
                width: '320px',
                height: '29px',
                backgroundColor: 'rgba(24, 111, 37, 0.85)',
                alignItems: 'center',
                display: 'flex',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              <span
                style={{
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em',
                  textAlign: 'center',
                }}
              >
                {data?.landingPage.subheading}
              </span>
            </div>
          </div>
        </ImageContainer>
      </div>
    </div>
  );
};

export default Banner;
