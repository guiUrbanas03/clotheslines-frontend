import React, { FC } from 'react';
import {
  Box,
  Divider,
  HStack,
  Input,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { SongFormItemProps } from './SongsInputs.types';
import { ErrorMessage, FieldArray } from 'formik';
import Protected from '../../../../Protected/Protected';

const SongsInputs: FC<SongFormItemProps> = observer(({ formik }) => {
  const inputColor = useColorModeValue('gray.100', 'dark.secondary');
  const borderColor = useColorModeValue('#C4C4C499', '#FFFFFF44');
  const placeholderColor = useColorModeValue('light.mediumGray', '#DDDDDD');
  const hoverColor = useColorModeValue('#63B3ED33', '#1A365D33');

  return (
    <Box w='full' alignItems='stretch' paddingY={2}>
      <FieldArray name='songs'>
        {({ push, remove }) => (
          <>
            <VStack
              divider={<Divider />}
              spacing={0}
              w='full'
              alignItems='stretch'
            >
              {formik.values.songs.map((song, index) => (
                <Box paddingX={6} paddingY={4} key={index}>
                  <VStack alignItems='flex-start' spacing={1}>
                    <Box w='full'>
                      <Input
                        w='full'
                        id={`songs.${index}.name`}
                        fontWeight='medium'
                        variant='filled'
                        bgColor={inputColor}
                        placeholder='Song name'
                        _placeholder={{ color: placeholderColor }}
                        {...formik.getFieldProps(`songs.${index}.name`)}
                      />
                      <Box color='red.300' fontSize='sm' mt={1}>
                        <ErrorMessage
                          component='div'
                          name={`songs.${index}.name`}
                        />
                      </Box>
                    </Box>
                    <HStack alignItems='stretch' w='full'>
                      <Box w='full'>
                        <Input
                          w='full'
                          id={`songs.${index}.artist`}
                          flex='1'
                          width='auto'
                          fontSize='sm'
                          variant='filled'
                          bgColor={inputColor}
                          placeholder='Artist name'
                          _placeholder={{ color: placeholderColor }}
                          {...formik.getFieldProps(`songs.${index}.artist`)}
                        />
                        <Box color='red.300' fontSize='sm' mt={1}>
                          <ErrorMessage
                            component='div'
                            name={`songs.${index}.artist`}
                          />
                        </Box>
                      </Box>

                      <Box w='full'>
                        <Input
                          id={`songs.${index}.album`}
                          flex='1'
                          fontSize='sm'
                          variant='filled'
                          bgColor={inputColor}
                          placeholder='Album name'
                          _placeholder={{ color: placeholderColor }}
                          {...formik.getFieldProps(`songs.${index}.album`)}
                        />
                        <Box color='red.300' fontSize='sm' mt={1}>
                          <ErrorMessage
                            component='div'
                            name={`songs.${index}.album`}
                          />
                        </Box>
                      </Box>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </VStack>
            <Protected renderIf={formik.values.songs.length < 5}>
              <Box
                border={`1px dashed ${borderColor}`}
                marginX={6}
                marginY={4}
                rounded='lg'
                _hover={{ bgColor: hoverColor }}
              >
                <Box
                  opacity={0.4}
                  onClick={() => {
                    if (formik.values.songs.length < 5) {
                      push({ name: '', artist: '', album: '' });
                    }
                  }}
                >
                  <VStack alignItems='flex-start' spacing={1}>
                    <Input
                      disabled
                      fontWeight='medium'
                      variant='filled'
                      bgColor={inputColor}
                      placeholder='Song name'
                      _placeholder={{ color: placeholderColor }}
                      _disabled={{ cursor: 'pointer' }}
                      _hover={{}}
                    />
                    <HStack alignItems='center' w='full'>
                      <Input
                        disabled
                        flex='1'
                        width='auto'
                        fontSize='sm'
                        variant='filled'
                        bgColor={inputColor}
                        placeholder='Artist name'
                        _placeholder={{ color: placeholderColor }}
                        _disabled={{ cursor: 'pointer' }}
                        _hover={{}}
                      />
                      <Input
                        disabled
                        flex='1'
                        fontSize='sm'
                        variant='filled'
                        bgColor={inputColor}
                        placeholder='Album name'
                        _placeholder={{ color: placeholderColor }}
                        _disabled={{ cursor: 'pointer' }}
                        _hover={{}}
                      />
                    </HStack>
                  </VStack>
                </Box>
              </Box>
            </Protected>
          </>
        )}
      </FieldArray>
    </Box>
  );
});

export default SongsInputs;
