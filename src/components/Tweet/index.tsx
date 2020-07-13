import React from 'react';

import { 
  Container, 
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return(
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>30 de abr</time>
          </Header>

          <Description>Clone do twitter, vídeo no Youtube</Description>

          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon/>
              12
            </Status>
            <Status>
              <RetweetIcon/>
              10
            </Status>
            <Status>
              <LikeIcon/>
              230
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet;