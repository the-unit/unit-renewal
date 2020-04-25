import React from 'react';
import styled from 'styled-components';
import BannerPage from './../../CommonPages/bannerPage';
import { Container, Row, Col } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';

const DescriptionContainer = styled.div`
  padding: 28px 48px 24px 48px
`;

const DescriptionInnerContainer = styled.div`
  height: 100%;
  margin-top: 7.5%;
`;

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
`;

const PdfContainer = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #00a300;
`;

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
`;

function renderSince(yearMonthDay?: string) {
  return `SINCE ${yearMonthDay?.split('-')[0]}`;
}

type TEvent = {
  title: string;
  title_kr: string;
  description: string;
  summary: string;
  date: string;
  image: Iimage;
}

const renderEvt = (idx: number, event?: TEvent, isLoading?: boolean) => {
  return (
    <React.Fragment key={`evt-${idx}`}>
      <Col xs={{ span: 12, order: 2 * (1 + idx) }} lg={6}>
        <DescriptionInnerContainer>
          <DescriptionTitleContainer>
            {
              (isLoading) ? <div style={{ fontSize: '31px', width: '95px' }}><Skeleton/></div> : event?.title
            }
          </DescriptionTitleContainer>
          <DescriptionDescContainer>
            {
              (isLoading) ? <div style={{ fontSize: '18px', width: '50%' }}><Skeleton/>
              </div> : `${event?.title_kr} | ${renderSince(event?.date)}`
            }
            <br/>
            {
              (isLoading) ?
                <div style={{ fontSize: '18px', width: '100%' }}><Skeleton count={3}/></div> : event?.description
            }
          </DescriptionDescContainer>
        </DescriptionInnerContainer>
      </Col>
      <Col xs={{ span: 12, order: 1 + (2 * idx) }} lg={6}>
        {
          (isLoading) ?
            <div style={{ fontSize: '160px', width: '100%', lineHeight: 0.1, padding: '7.5%' }}><Skeleton/></div> :
            <img src={event?.image.url} alt={event?.title} style={{ width: '100%', padding: '7.5%' }}/>
        }
      </Col>
    </React.Fragment>
  );
};

export default function() {
  const { error, data } = useQuery<IAboutUsPage>(QueryAboutUsList);

  if (error) return <p>Error :(</p>;
  return <BannerPage title={data?.aboutUsPage.title || ''} desc1={data?.aboutUsPage.description1 || ''}
                     desc2={data?.aboutUsPage.description2 || ''} desc3={undefined}>
    <DescriptionContainer>
      <DescriptionTitleContainer>
        {
          (data) ? <span>{data.aboutUsPage.title}</span> :
            <div style={{ fontSize: '31px', width: '90px' }}><Skeleton/></div>
        }
      </DescriptionTitleContainer>
      <DescriptionDescContainer>
        {
          (data) ? <span>{data.aboutUsPage.subDescription}</span> :
            <div style={{ fontSize: '16px', width: '100%' }}><Skeleton count={4}/></div>
        }
      </DescriptionDescContainer>
      <PdfContainer>
        {
          <span>{'* UNIT 단체소개서.pdf'}</span>
        }
      </PdfContainer>
    </DescriptionContainer>
    <Container className={'p-0'} style={{ maxWidth: 'inherit' }}>
      <DescriptionContainer>
        <Row>
          {
            (data) ? data.aboutUsPage.events.map((event, idx) => {
              return (
                renderEvt(idx, event)
              );
            }) : [0, 1, 2].map((idx) => renderEvt(idx, undefined, true))
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
