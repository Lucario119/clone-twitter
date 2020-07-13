import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSuggestions from '../FollowSuggestions';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions name="Elton John" nickname="@elton_john" />,
              <FollowSuggestions
                name="Jimi Hendrix"
                nickname="@jimi_hendrix"
              />,
              <FollowSuggestions name="Slash" nickname="@slash" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
