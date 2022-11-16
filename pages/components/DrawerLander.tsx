import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Drawer, Button, Group } from '@mantine/core';
import DrawerRotatorAccordian from './DrawerRotatorAccordian';
import { toggleLanderDrawer } from '../../slices/drawerLanderSlice';
import DrawerLanderAccordian from './DrawerLanderAccordian';


const DrawerLander: React.FC = () => {
  /* 
    A state is created in landerDrawer slice called isOpen
    This state called isOpen keeps track whether the landerDrawer is open or closed
    If isOpen = true, then landerDrawer is opened else closed
  */  
  const isOpen = useSelector((state: RootState)  => state.landerDrawer.isOpen);
  const dispatch = useDispatch();
  return (
    <Drawer opened={isOpen}
    onClose={() => dispatch(toggleLanderDrawer())}
    title="Lander Details"
    padding="xl"
        size="20%"
        lockScroll={false}
    >
     <DrawerLanderAccordian />
    </Drawer>
  )
}

export default DrawerLander