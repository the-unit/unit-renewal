import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from '../../../Components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CardSkeleton from '../../../Components/CardSkeleton';

interface ILogo {
  url: string;
}

interface IPartner {
  name: string;
  subName: string;
  introduction: string;
  slogan: string;
  establishmentDate: string;
  facebook: string;
  homepage: string;
  location: string;
  medium: string;
  email: string;
  tags: string[];
  logo?: ILogo;
}

interface IQueryPartners {
  partners: IPartner[];
}

function parameterizedQuer(limit: number = 0) {
  return gql`
      {
          partners(limit: ${limit}) {
              name
              subName
              introduction
              slogan
              establishmentDate
              facebook
              homepage
              location
              medium
              email
              tags
              logo {
                  url
              }
          }
      }
  `;
}


const PartnerCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 191px;
`;

type IPartners = {
  limit?: number;
}

const Partners: React.FC<IPartners> = ({children, limit}) => {
  const { loading, error, data } = useQuery<IQueryPartners>(parameterizedQuer(limit));

  if (loading) return renderLoading();
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Row>
        {data?.partners.map(
          ({
            name,
            subName,
            introduction,
            slogan,
            establishmentDate,
            facebook,
            homepage,
            location,
            medium,
            email,
            tags,
            logo,
          }) => (
            <PartnerCol key={name} className={'p-0'}>
              <Card
                since={establishmentDate}
                name={name}
                subName={subName}
                slogan={slogan}
                introduction={introduction}
                homepage={homepage}
                facebook={facebook}
                medium={medium}
              />
            </PartnerCol>
          )
        )}
      </Row>
    </Container>
  );
}

function renderLoading() {
  return (
    <Container>
      <Row>
        {[0,1,2,3,4,5].map(
          (val, idx) => (
            <PartnerCol key={val} className={'p-0'}>
              <CardSkeleton
                logo={false}
              />
            </PartnerCol>
          )
        )}
      </Row>
    </Container>
  )
}

export default Partners;