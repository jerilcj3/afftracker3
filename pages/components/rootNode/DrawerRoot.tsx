import React from 'react';
import { useState } from 'react';

import { Drawer, Button, Group } from '@mantine/core';
import AccordianRoot from './AccordianRoot';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRotatorDrawer } from '../../../slices/drawerRotatorSlice';

/* interface DrawerRotatorProps {
  isOpen: boolean;
  onClose: () => void;
} */

const DrawerRoot: React.FC = () => {
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
        <AccordianRoot />
      </Drawer>
    </>
  );
};

export default DrawerRoot;
