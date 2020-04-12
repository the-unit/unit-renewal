import React from 'react';
import BannerPage from './../../CommonPages/bannerPage'
import Sponsors from '../index/sponsors';

export default function () {
  return <BannerPage title={"Sponsor"} desc1={'IT 단체들의 성장을 돕는 기업, 기관들을 소개합니다.'} desc2={'Partner를 쉽게 연결하여, 에너지소모를 줄이고'} desc3={'긍정적인 선순환이 되길 바랍니다.'} isEdit={true} hasSearch>
    <Sponsors/>
  </BannerPage>
}
