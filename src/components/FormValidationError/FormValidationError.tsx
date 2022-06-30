import React, { FunctionComponent } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { FormValidationErrorProps } from './FormValidationError.types';

const FormValidationError: FunctionComponent<FormValidationErrorProps> = ({
  show,
  message,
}): JSX.Element | null => {
  const color = useColorModeValue('red.400', 'red.300');

  if (!show) return null;

  return (
    <Box alignSelf='flex-start' fontSize='sm' color={color} fontWeight='normal'>
      {message}
    </Box>
  );
};

export default FormValidationError;
