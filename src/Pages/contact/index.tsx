import React from 'react';
import styled from 'styled-components';
import BannerPage from '../../CommonPages/bannerPage';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Color from '../../Styles/colors';
import Skeleton from 'react-loading-skeleton';
import FAQ from './faq';

interface IFaq {
  title: string;
  description1: string;
  description2: string;
}

interface IContact {
  contact: {
    title: string;
    subTitle: string;
    description1: string;
    description2: string;
    description3: string;
    lastComment1: string;
    lastComment2: string;
    faqs: IFaq[];
  }
}

const QueryContact = gql`
    {
        contact {
            title,
            subTitle,
            description1,
            description2,
            description3,
            lastComment1,
            lastComment2,
            faqs {
                title,
                description1,
                description2
            }
        }
    }
`

const ContactSubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${() => Color.BACK_GRAY_SUBTITLE};
`;

const SubTitle = styled.div`
  width: 100%;
  margin-left: 48px;
  font-size: 24px;
  font-weight: bold; 
`

const ContactLastCommentContainer = styled.div`
  margin: 200px 48px 24px 48px;
  font-size: 16px;
`

export default function () {
  const { error, data } = useQuery<IContact>(QueryContact);

  if (error) return <p>Error :(</p>;
  return <BannerPage title={data?.contact.title || ''} desc1={data?.contact.description1 || ''} desc2={data?.contact.description2 || ''} desc3={undefined}>
    <ContactSubTitleContainer>
      <SubTitle>
        {
          (data)? data?.contact.subTitle : <div style={{ fontSize: '32px', width: '100px' }}>
            <Skeleton/>
          </div>
        }
      </SubTitle>
    </ContactSubTitleContainer>
    {
      (data)? data?.contact.faqs.map((item, idx) => <FAQ key={`faq-${idx}`} title={item.title} description1={item.description1} description2={item.description2}/>) : [0,1,2,3].map((item) => <FAQ key={`faq-${item}`} title={''} description1={''} description2={''} isLoading={true}/>)
    }
    <ContactLastCommentContainer>
      {data?.contact.lastComment1}<br/>
      {data?.contact.lastComment2}
    </ContactLastCommentContainer>
  </BannerPage>;
}
