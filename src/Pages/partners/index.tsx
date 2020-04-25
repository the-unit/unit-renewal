import React from 'react';
import BannerPage from './../../CommonPages/bannerPage';
import Partners from '../index/partners';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default function() {
  interface IPartnerPage {
    partnerPage: {
      title: string;
      subTitle1: string;
      subTitle2: string;
      subTitle3: string;
    }
  }

  const QueryPartnerPage = gql`
      {
          partnerPage {
              title,
              subTitle1,
              subTitle2,
              subTitle3
          }
      }
  `;
  const { error, data } = useQuery<IPartnerPage>(QueryPartnerPage);

  if (error) return <p>Error :(</p>;

  return <BannerPage title={data?.partnerPage.title || ''} desc1={data?.partnerPage.subTitle1 || ''}
                     desc2={data?.partnerPage.subTitle2 || ''} desc3={data?.partnerPage.subTitle3 || ''} isEdit={true}
                     hasSearch>
    <Partners/>
  </BannerPage>;
}
