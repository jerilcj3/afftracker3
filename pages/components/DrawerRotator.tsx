import React from 'react';
import { useState } from 'react';

import { Drawer, Button, Group } from '@mantine/core';
import DrawerRotatorAccordian from './DrawerRotatorAccordian';
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRotatorDrawer } from '../../slices/drawerRotatorSlice';

/* interface DrawerRotatorProps {
  isOpen: boolean;
  onClose: () => void;
} */

const DrawerRotator: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.rotatorDrawer.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      {' '}
      <Drawer
        opened={isOpen}
        onClose={() => dispatch(toggleRotatorDrawer())}
        title="Add Rotator"
        padding="xl"
        size="20%"
        lockScroll={false}
      >
        <DrawerRotatorAccordian />
      </Drawer>
    </>
  );
};

export default DrawerRotator;
