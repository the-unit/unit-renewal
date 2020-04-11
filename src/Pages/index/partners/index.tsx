import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from '../../../Components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

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

interface IPartners {
  partners: IPartner[];
}

const PARTNER_LIST = gql`
  {
    partners {
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

const PartnerCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 191px;
`;

export default function Partners() {
  const { loading, error, data } = useQuery<IPartners>(PARTNER_LIST);

  if (loading) return <p>Loading...</p>;
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
