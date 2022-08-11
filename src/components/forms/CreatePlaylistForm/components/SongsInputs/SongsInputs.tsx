import React, { FC } from 'react';
import { Box, Divider, HStack, Input, VStack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { SongFormItemProps } from './SongsInputs.types';
import { ErrorMessage, FieldArray } from 'formik';
import Protected from '../../../../Protected/Protected';

const SongsInputs: FC<SongFormItemProps> = observer(({ formik }) => {
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
                        bgColor='gray.100'
                        placeholder='Song name'
                        _placeholder={{ color: 'light.mediumGray' }}
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
                          bgColor='gray.100'
                          placeholder='Artist name'
                          _placeholder={{ color: 'light.mediumGray' }}
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
                          bgColor='gray.100'
                          placeholder='Album name'
                          _placeholder={{ color: 'light.mediumGray' }}
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
                border='1px dashed #C4C4C499'
                marginX={6}
                marginY={4}
                rounded='lg'
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
                      bgColor='gray.100'
                      placeholder='Song name'
                      _placeholder={{ color: 'light.mediumGray' }}
                      _disabled={{ cursor: 'pointer' }}
                    />
                    <HStack alignItems='center' w='full'>
                      <Input
                        disabled
                        flex='1'
                        width='auto'
                        fontSize='sm'
                        variant='filled'
                        bgColor='gray.100'
                        placeholder='Artist name'
                        _placeholder={{ color: 'light.mediumGray' }}
                        _disabled={{ cursor: 'pointer' }}
                      />
                      <Input
                        disabled
                        flex='1'
                        fontSize='sm'
                        variant='filled'
                        bgColor='gray.100'
                        placeholder='Album name'
                        _placeholder={{ color: 'light.mediumGray' }}
                        _disabled={{ cursor: 'pointer' }}
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
