import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Color from '../../Styles/colors';

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

  if (loading)
    return (
      <SkeletonTheme
        color={Color.TREE_GREEN}
        highlightColor={'rgba(255, 255, 255, 0.2)'}
      >
        <div
          style={{
            height: '360px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ marginBottom: '6px' }}>
            <Skeleton width={320} height={60} />
          </div>
          <Skeleton width={320} height={29} />
        </div>
      </SkeletonTheme>
    );
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
          backgroundImage: `url(${data?.landingPage.image.url})`,
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
