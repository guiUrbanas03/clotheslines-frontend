import React from 'react';
import {
  Box,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import Card from '../../components/Card/Card';
import Clothesline from '../../components/Clothesline/Clothesline';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RegisterUserForm from '../../components/forms/RegisterUserForm/RegisterUserForm';
import LayoutContainer from '../../components/LayoutContainer/LayoutContainer';

export const RegisterPage: React.FunctionComponent = observer(
  (): JSX.Element => {
    const arrowBackgroundColor = useColorModeValue(
      'whiteAlpha.600',
      'whiteAlpha.200',
    );

    return (
      <>
        <LayoutContainer boxProps={{ mt: '80px' }}>
          <HStack spacing={2}>
            <Link to='/'>
              <IconButton
                icon={<FaArrowLeft />}
                aria-label='back'
                bgColor={arrowBackgroundColor}
              />
            </Link>
            <Heading size='lg'>Register</Heading>
          </HStack>
        </LayoutContainer>

        <LayoutContainer gap={false} boxProps={{ paddingX: 0 }}>
          <Clothesline />
          <Box paddingX={[4, 6, 8]} mt={2}>
            <Card
              withClothespin
              boxStyle={{ maxWidth: '500px', marginX: 'auto' }}
            >
              <RegisterUserForm />
            </Card>
          </Box>
        </LayoutContainer>
      </>
    );
  },
);
