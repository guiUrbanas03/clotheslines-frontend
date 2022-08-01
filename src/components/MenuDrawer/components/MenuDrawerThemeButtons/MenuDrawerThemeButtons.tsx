import React from 'react';
import {
  HStack,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiMoonOrbit } from 'react-icons/gi';
import { RiHazeFill } from 'react-icons/ri';
import { useStores } from '../../../../hooks';

const MenuDrawerThemeButtons = () => {
  const iconButtonColor = useColorModeValue('whiteAlpha.700', 'dark.ternary');
  const { setColorMode } = useColorMode();
  const { uiStore } = useStores();

  const handleChangeColorMode = (
    mode: 'light' | 'dark',
    withGradient: boolean,
  ) => {
    setColorMode(mode);
    uiStore.storeActiveGradientBackground(withGradient);
  };

  return (
    <HStack alignItems='stretch' justifyContent='space-between'>
      <Tooltip label='day' hasArrow>
        <IconButton
          bgColor={iconButtonColor}
          shadow='md'
          size='lg'
          icon={<FaSun />}
          aria-label='day'
          onClick={() => handleChangeColorMode('light', false)}
        />
      </Tooltip>

      <Tooltip label='sunrise' hasArrow>
        <IconButton
          bgColor={iconButtonColor}
          shadow='md'
          size='lg'
          icon={<RiHazeFill />}
          aria-label='sunset'
          onClick={() => handleChangeColorMode('light', true)}
        />
      </Tooltip>

      <Tooltip label='night' hasArrow>
        <IconButton
          bgColor={iconButtonColor}
          shadow='md'
          size='lg'
          icon={<FaMoon />}
          aria-label='night'
          onClick={() => handleChangeColorMode('dark', false)}
        />
      </Tooltip>

      <Tooltip label='sunset' hasArrow>
        <IconButton
          bgColor={iconButtonColor}
          shadow='md'
          size='lg'
          icon={<GiMoonOrbit />}
          aria-label='moon'
          onClick={() => handleChangeColorMode('dark', true)}
        />
      </Tooltip>
    </HStack>
  );
};

export default MenuDrawerThemeButtons;
