import React from 'react';
import styled from 'styled-components';
import BannerPage from './../../CommonPages/bannerPage';
import { Container, Row, Col } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const DescriptionContainer = styled.div`
  padding: 28px 48px 24px 48px
`

const DescriptionTitleContainer = styled.div`
  height: 48px;
  font-size: 21px;
  font-weight: bold;
  color: #000000;
`;

const DescriptionDescContainer = styled.div`
  word-break: keep-all;
  font-size: 16px;
  color: #000000;
`

const PdfContainer = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #00a300;
`

interface Iimage {
  url: string;
}

interface IEvent {
  title: string;
  title_kr: string;
  description: string;
  summary: string;
  date: string;
  image: Iimage;
}

interface IAboutUsPage {
  aboutUsPage: {
    title: string;
    description1: string;
    description2: string;
    subTitle: string;
    subDescription: string;
    lastComment1: string;
    lastComment2: string;
    events: IEvent[];
  }
}

const QueryAboutUsList = gql`
    {
        aboutUsPage {
            title,  
            description1,
            description2,
            subTitle,
            subDescription,
            lastComment1,
            lastComment2
            events {
                title,
                title_kr,
                description,
                summary,
                date,
                image {
                    url
                }
            }
        }
    }
`

function renderSince(yearMonthDay: string) {
  return `SINCE ${yearMonthDay.split('-')[0]}`
}

export default function() {
  const { loading, error, data } = useQuery<IAboutUsPage>(QueryAboutUsList);
  console.log('data is', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <BannerPage title={data?.aboutUsPage!.title!} desc1={data?.aboutUsPage!.description1!} desc2={data?.aboutUsPage!.description2!}>
    <DescriptionContainer>
      <DescriptionTitleContainer>
        {data?.aboutUsPage!.subTitle!}
      </DescriptionTitleContainer>
      <DescriptionDescContainer>
        {data?.aboutUsPage!.subDescription!}
      </DescriptionDescContainer>
      <PdfContainer>
        * UNIT 단체소개서.pdf
      </PdfContainer>
    </DescriptionContainer>
    <Container className={'p-0'} style={{ maxWidth: 'inherit' }}>
      <DescriptionContainer>
        <Row>
          {/*<Col md={{ span: 6, order: 2}}>*/}
          {/*  A*/}
          {/*</Col>*/}
          {/*<Col md={{ span: 6, order: 1}}>*/}
          {/*  B*/}
          {/*</Col>*/}
          {
            data?.aboutUsPage.events.map((item, idx) => {
              return (
                <React.Fragment key={item.title}>
                  <Col xs={{ span: 12, order: 2 * (1 + idx) }} lg={6}>
                    <DescriptionTitleContainer>
                      {item.title}
                    </DescriptionTitleContainer>
                    <DescriptionDescContainer>
                      {item.title_kr} | {renderSince(item.date)} <br/>
                      {item.description}
                    </DescriptionDescContainer>
                  </Col>
                  <Col xs={{ span: 12, order: 1 + (2 * idx) }} lg={6}>
                    <img src={item.image.url} alt={item.title} style={{ width: '100%', padding: '7.5%' }}/>
                  </Col>
                </React.Fragment>
              )
            })
          }
        </Row>
      </DescriptionContainer>
      <DescriptionContainer style={{ paddingTop: 0 }}>
        {data?.aboutUsPage.lastComment1}<br/>
        {data?.aboutUsPage.lastComment2}
      </DescriptionContainer>
    </Container>
  </BannerPage>;
}
