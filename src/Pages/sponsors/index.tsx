import React from 'react';
import BannerPage from './../../CommonPages/bannerPage';
import Sponsors from '../index/sponsors';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export default function() {
  interface ISponsorPage {
    sponsorPage: {
      title: string;
      subTitle1: string;
      subTitle2: string;
      subTitle3: string;
    }
  }

  const QuerySponsorPage = gql`
      {
          sponsorPage {
              title,
              subTitle1,
              subTitle2,
              subTitle3
          }
      }
  `;
  const { error, data } = useQuery<ISponsorPage>(QuerySponsorPage);
  if (error) return <p>Error :(</p>;
  return <BannerPage title={data?.sponsorPage.title || ''} desc1={data?.sponsorPage.subTitle1 || ''}
                     desc2={data?.sponsorPage.subTitle2 || ''} desc3={data?.sponsorPage.subTitle3 || ''} isEdit={true} hasSearch>
    <Sponsors/>
  </BannerPage>;
}
