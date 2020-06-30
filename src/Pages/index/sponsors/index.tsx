import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from '../../../Components/Card';
import { Container, Row } from 'react-bootstrap';
import CardSkeleton from '../../../Components/CardSkeleton';

interface ILogo {
  url: string;
}

interface ISponsor {
  name: string;
  subName: string;
  dept: string;
  introduction: string;
  slogan: string;
  establishmentDate: string;
  homepage: string;
  location: string;
  email: string;
  tags: string[];
  logo: ILogo;
}

interface IQuerySponsors {
  sponsors: ISponsor[];
}

function parameterizedQuery(limit: number = 0) {
  return gql`
      {
          sponsors(limit: ${limit}) {
              name
              subName
              introduction
              slogan
              establishmentDate
              homepage
              location
              email
              tags
              logo {
                  url
              }
          }
      }
  `;
}

type ISponsors = {
  limit?: number;
}

const Sponsors: React.FC<ISponsors> = ({ children, limit }) => {
  const { loading, error, data } = useQuery<IQuerySponsors>(parameterizedQuery(limit));

  if (loading) return renderLoading();
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Row>
        {data?.sponsors.map(
          ({
             name,
             subName,
             introduction,
             slogan,
             establishmentDate,
             homepage,
             location,
             email,
             tags,
             logo
           }) => (
            <Card
              since={establishmentDate}
              name={name}
              subName={subName}
              slogan={slogan}
              introduction={introduction}
              logo={logo}
              homepage={homepage}
              key={name}
            />
          )
        )}
      </Row>
    </Container>
  );
};

function renderLoading() {
  return (
    <Container>
      <Row>
        {[0, 1, 2, 3, 4, 5].map(
          (val, idx) => (
            <CardSkeleton
              logo={true}
              key={`skeleton-${val}`}
            />
          )
        )}
      </Row>
    </Container>
  );
}

export default Sponsors;