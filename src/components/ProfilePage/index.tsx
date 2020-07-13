import React from 'react';

import Feed from "../Feed";

import { Container,
   Banner,
   Avatar,
   ProfileData,
   LocationIcon,
   CakeIcon,
   Followage,
   EditButton
  } from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar/>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Lucas de Oliveira</h1>
        <h2>@lucas_oliveira</h2>

        <p>Beginner Programmer<a href="https://github.com/Lucario119">@GitHub_Account</a></p>

        <ul>
          <li>
            <LocationIcon/>
            Manaus, Brazil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 19 de fevereiro de 2001
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>56</strong>
          </span>
          <span>
            <strong>200</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  )
}

export default ProfilePage;