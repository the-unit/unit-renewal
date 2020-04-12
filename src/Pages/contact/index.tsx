import React from 'react';
import styled from 'styled-components';
import BannerPage from '../../CommonPages/bannerPage';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Color from '../../Styles/colors';
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
  margin-left: 48px;
  font-size: 24px;
  font-weight: bold; 
`

const ContactLastCommentContainer = styled.div`
  margin: 200px 48px 24px 48px;
  font-size: 16px;
`

export default function () {
  const { loading, error, data } = useQuery<IContact>(QueryContact);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <BannerPage title={data?.contact!.title} desc1={data?.contact!.description1} desc2={data?.contact!.description2}>
    <ContactSubTitleContainer>
      <SubTitle>
        {data?.contact.subTitle}
      </SubTitle>
    </ContactSubTitleContainer>
    {
      data?.contact.faqs.map((item) => <FAQ key={item.title} title={item.title} description1={item.description1} description2={item.description2}/>)
    }
    <ContactLastCommentContainer>
      {data?.contact.lastComment1}<br/>
      {data?.contact.lastComment2}
    </ContactLastCommentContainer>
  </BannerPage>;
}
