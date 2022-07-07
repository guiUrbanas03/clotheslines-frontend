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

export const RegisterPage: React.FunctionComponent = observer(
  (): JSX.Element => {
    return (
      <>
        <Box ml={['0', '0', '220px']} mt='80px' paddingX={[4, 6, 8]}>
          <HStack spacing={2}>
            <Link to='/'>
              <IconButton
                icon={<FaArrowLeft />}
                aria-label='back'
                bgColor={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
              />
            </Link>
            <Heading size='lg'>Register</Heading>
          </HStack>
        </Box>
        <Box ml={['0', '0', '183px']}>
          <Clothesline />
          <Box paddingX={[4, 6, 8]} mt={2}>
            <Card
              withClothespin
              boxStyle={{ maxWidth: '500px', marginX: 'auto' }}
            >
              <RegisterUserForm />
            </Card>
          </Box>
        </Box>
      </>
    );
  },
);
