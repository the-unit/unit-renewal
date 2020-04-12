import React from 'react';
import BannerPage from './../../CommonPages/bannerPage'
import Partners from '../index/partners'

export default function () {
  return <BannerPage title={"Partner"} desc1={'다양한 분야에서 활동하는 IT 단체들을 소개합니다.'} desc2={'Sponsor와 보다 쉽게 연결되어,'} desc3={'다양한 기회를 만들고 시너지로 이어지길 바랍니다.'} isEdit={true} hasSearch>
    <Partners/>
  </BannerPage>
}
