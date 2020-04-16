import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

interface ICardContainer {
  logo?: boolean;
}

const CardContainer = styled.div<ICardContainer>`
  width: 288px;
  height: ${(props) => (props.logo ? '263px' : '159px')};
  object-fit: contain;
  border-radius: 8px;
  border: solid 1px #eeeeee;
`;

const CardTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 16px 0 16px;
`;

const ImageContainer = styled.div``;

const Image = styled.div`
  width: 288px;
  height: 104px;
  padding: 10px;
`;

const CardMiddleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 16px 0 16px;
  height: 60px;
`;

const CardBottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  margin-right: 16px;
  height: 42px;
`;

type ICardDescriptionContainer = {
  ellipsisLineCount: number;
};

const CardDescriptionContainer = styled.div<ICardDescriptionContainer>`
  width: 256px;
  color: #323434;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.ellipsisLineCount};
  -webkit-box-orient: vertical;
`;

const CardTitleContainer = styled.div`
  flex: 1;
  height: 27px;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

const CardSinceContainer = styled.div`
  width: 20%;
  height: 18px;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
  color: rgba(0, 0, 0, 0.45);
`;

const CardBtnTitle = styled.div`
  font-size: 10px;
  color: #323434;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`;

function renderBtn() {
  return (
    <CardBtnContainer>
      <CardBtnTitle>
        <Skeleton count={1}/>
      </CardBtnTitle>
    </CardBtnContainer>
  );
}

const CardBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-radius: 15px;
  border: solid 1px #eeeeee;

  &:not(:last-of-type) {
    margin-right: 4px;
  }
`;

type ICard = {
  logo?: boolean;
};

const CardSkeleton: React.FC<ICard> = ({
                                 logo,
                               }) => {
  return (
    <CardContainer logo={logo}>
      {logo ? (
        <ImageContainer>
          <Image>
            <Skeleton height={100}/>
          </Image>
        </ImageContainer>
      ) : null}
      <CardTopContainer>
        <CardTitleContainer>
          <div style={{ width: '50%'}}>
            <Skeleton count={1}/>
          </div>
        </CardTitleContainer>
        <CardSinceContainer>
          <Skeleton count={1}/>
        </CardSinceContainer>
      </CardTopContainer>
      <CardMiddleContainer>
        <CardDescriptionContainer ellipsisLineCount={logo ? 2 : 3}>
          <Skeleton count={2}/>
        </CardDescriptionContainer>
      </CardMiddleContainer>
      <CardBottomContainer>
        {renderBtn()}
        {renderBtn()}
        {renderBtn()}
      </CardBottomContainer>
    </CardContainer>
  );
};

export default CardSkeleton;
