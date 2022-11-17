import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Drawer, Button, Group } from '@mantine/core';
import DrawerRotatorAccordian from './DrawerRotatorAccordian';
import { toggleLanderNodeDrawer } from '../../slices/drawerLanderNodeSlice';
import DrawerLanderNodeAccordian from './DrawerLanderNodeAccordian';


const DrawerLanderNode: React.FC = () => {
  /* 
    A state is created in landerDrawer slice called isOpen
    This state called isOpen keeps track whether the landerDrawer is open or closed
    If isOpen = true, then landerDrawer is opened else closed
  */  
  const isOpen = useSelector((state: RootState)  => state.landerDrawerNode.isOpen);
  const dispatch = useDispatch();
  return (
    <Drawer opened={isOpen}
    onClose={() => dispatch(toggleLanderNodeDrawer())}
    title="Lander Details"
    padding="xl"
        size="20%"
        lockScroll={false}
    >
     <DrawerLanderNodeAccordian />
    </Drawer>
  )
}

export default DrawerLanderNode