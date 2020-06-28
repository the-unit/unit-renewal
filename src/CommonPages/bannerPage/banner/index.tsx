import React from 'react';
import styled from 'styled-components';
import Color from '../../../Styles/colors';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type IBanner = {
  title: string;
  desc1: string;
  desc2: string;
  desc3?: string;
}

const BannerBackContainer = styled.div`
  height: 240px;
  background-color: ${() => Color.TREE_LIGHT_GREEN};
`;

const BannerContainer = styled.div`
  margin-top: 50px;
  margin-left: 48px;
`;

const BannerTitleContainer = styled.div`  
  height: 36px;
  font-size: 24px;
  font-weight: bold;
  color: white; 
`;

const BannerSubTitleContainer = styled.div`
  width: 320px;
  height: 84px; 
  font-size: 14px;
  color: white;
  margin-top: 43px;
`;

function renderTitle(title: string) {
  return (title)? title : <SkeletonTheme color={'transparent'} highlightColor={Color.TREE_GREEN}>
    <div style={{ fontSize: 24, lineHeight: 2, width: '80px' }}>
      <Skeleton/>
    </div>
  </SkeletonTheme>
}

function renderSubTitle(subTitle?: string) {
  if (subTitle === undefined) {
    return (<div/>)
  }
  if (subTitle) {
    return <div>
      {subTitle}<br/>
    </div>;
  } else {
    return <SkeletonTheme color={'transparent'} highlightColor={Color.TREE_GREEN}>
      <div style={{ fontSize: 14, lineHeight: 1, marginBottom: '5px', width: '90%' }}>
        <Skeleton/>
      </div>
    </SkeletonTheme>
  }
}

const Banner: React.FC<IBanner> = ({ children, title, desc1, desc2, desc3 }) => {
  return (
    <BannerBackContainer>
      <BannerContainer>
        <BannerTitleContainer>
          {
            renderTitle(title)
          }
        </BannerTitleContainer>
        <BannerSubTitleContainer>
          {renderSubTitle(desc1)}
          {renderSubTitle(desc2)}
          {renderSubTitle(desc3)}
        </BannerSubTitleContainer>
      </BannerContainer>
    </BannerBackContainer>
  );
  // return (
  //   <div style={{ fontSize: 20 }}>
  //     <h1>{<Skeleton />}</h1>
  //   </div>
  // );
};

export default Banner;