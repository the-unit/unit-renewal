import React from 'react';
import styled from 'styled-components';
import Color from '../../../Styles/colors';

type IBanner = {
  title: string;
  desc1: string;
  desc2: string;
  desc3?: string;
}

const BannerBackContainer = styled.div`
  height: 240px;
  background-color: ${() =>Color.TREE_LIGHT_GREEN};
`

const BannerContainer = styled.div`
  margin-top: 50px;
  margin-left: 48px;
`

const BannerTitleContainer = styled.div`  
  height: 36px;
  font-size: 24px;
  font-weight: bold;
  color: white; 
`

const BannerSubTitleContainer = styled.div`
  width: 320px;
  height: 84px; 
  font-size: 14px;
  color: white;
  margin-top: 43px;
`

const Banner: React.FC<IBanner> = ({children, title, desc1, desc2, desc3= ''}) => {
  return (<BannerBackContainer>
    <BannerContainer>
      <BannerTitleContainer>{title}</BannerTitleContainer>
      <BannerSubTitleContainer>{desc1}<br/>
        {desc2}<br/>
        {desc3}
      </BannerSubTitleContainer>
    </BannerContainer>
  </BannerBackContainer>);
}

export default Banner;