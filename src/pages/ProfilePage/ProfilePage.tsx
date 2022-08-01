import {
  Box,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Clothesline from '../../components/Clothesline/Clothesline';
import UserProfileForm from '../../components/forms/UserProfileForm/UserProfileForm';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';

export const ProfilePage: React.FunctionComponent = observer(
  (): JSX.Element => {
    const arrowBackgroundColor = useColorModeValue(
      'whiteAlpha.600',
      'whiteAlpha.200',
    );

    return (
      <>
        <LayoutContainer boxProps={{ mt: '80px' }}>
          <HStack spacing={2}>
            <Link to='/playlists'>
              <IconButton
                icon={<FaArrowLeft />}
                aria-label='back'
                bgColor={arrowBackgroundColor}
              />
            </Link>
            <Heading size='lg'>Profile</Heading>
          </HStack>
        </LayoutContainer>

        <LayoutContainer gap={false} boxProps={{ paddingX: 0 }}>
          <Clothesline />
          <Box paddingX={[4, 6, 8]} mt={2}>
            <Card
              withClothespin
              boxStyle={{ maxWidth: '500px', marginX: 'auto' }}
            >
              <UserProfileForm />
            </Card>
          </Box>
        </LayoutContainer>
      </>
    );
  },
);
