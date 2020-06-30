import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { Col } from 'react-bootstrap';

interface ICardContainer {
  logo?: boolean;
}

const CardContainer = styled.div`
  display: flex;
  min-width: 320px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const CardInbox = styled.div<ICardContainer>`
  height: ${(props) => (props.logo ? '224px' : '159px')};
  width: 288px;
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

const CardMiddleContainer = styled.div<ICardContainer>`
  margin: 7px 16px 0 16px;
  height: ${(props) => (props.logo ? '40px' : '60px')};
`;

const CardBottomContainer = styled.div<ICardContainer>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => (props.logo ? '2px' : '8px')};
  margin-right: 16px;
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
                                         logo
                                       }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={4} className={'p-0'}>
      <CardContainer>
        <CardInbox logo={logo}>
          {logo ? (
            <ImageContainer>
              <Image>
                <Skeleton height={100}/>
              </Image>
            </ImageContainer>
          ) : null}
          <CardTopContainer>
            <CardTitleContainer>
              <div style={{ width: '50%' }}>
                <Skeleton count={1}/>
              </div>
            </CardTitleContainer>
            <CardSinceContainer>
              <Skeleton count={1}/>
            </CardSinceContainer>
          </CardTopContainer>
          <CardMiddleContainer logo={logo}>
            <CardDescriptionContainer ellipsisLineCount={logo ? 2 : 3}>
              <Skeleton count={(logo)? 2:3}/>
            </CardDescriptionContainer>
          </CardMiddleContainer>
          <CardBottomContainer logo={logo}>
            {renderBtn()}
            {renderBtn()}
            {renderBtn()}
          </CardBottomContainer>
        </CardInbox>
      </CardContainer>
    </Col>
  );
};

export default CardSkeleton;
