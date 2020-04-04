import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';

interface LandingPage {
  landingPage: {
    events: event[];
  };
}

interface event {
  title: string;
  title_kr: string;
  date: string;
  image: Img;
}

interface Img {
  url: string;
}

const LANDING_PAGE = gql`
  {
    landingPage {
      events {
        title
        title_kr
        date
        image {
          url
        }
      }
    }
  }
`;

export default function Events() {
  const { loading, error, data } = useQuery<LandingPage>(LANDING_PAGE);

  if (loading)
    return (
      <div className="container">
        <div className="row">
          {
            [0, 1, 2].map((val, idx) => {
              return <div
                className="col-12 col-sm-12 col-md-12 col-lg-4"
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  height: '120px',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={`evt-${idx}`}
              >
                <div style={{ width: '50%' }}>
                  <Skeleton/>
                </div>
                <div style={{ marginTop: '8px', width: '70%' }}>
                  <Skeleton>
                  </Skeleton>
                </div>
              </div>
            })
          }
        </div>
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      <div className="row">
        {
          data?.landingPage.events.map((evt, idx) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-4"
                style={{
                  height: '120px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
                key={`evt-${idx}`}
              >
            <span
              style={{ fontSize: '16px', fontWeight: 'bold', color: '#186f25' }}
            >
              {evt.title}
            </span>
                <br />
                <div style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '14px', color: '#aeaeae' }}>
                {evt.title_kr} | {evt.date}
              </span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
