import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Tree = dynamic(() => import('react-d3-tree'), {
  ssr: false,
});
import { RawNodeDatum, TreeNodeDatum } from 'react-d3-tree/lib/types/common';
import { HierarchyPointNode } from 'd3-hierarchy';
import DrawerRotator from './components/DrawerRotator';
import { Container } from '@mantine/core';

import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleRotatorDrawer } from '../slices/drawerRotatorSlice';
import tree, { saveTree } from '../slices/tree';
import node, { saveNode } from '../slices/node';

export default function Home() {
  // accessing redux store - drawer
  const isOpen = useSelector((state: RootState) => state.rotatorDrawer.isOpen);
  const dispatch = useDispatch();

  //accessing redux store - tree
  const tree = useSelector((state: RootState) => state.tree);

  const node = useSelector((state: RootState) => state.node);

  const handleNodeClick = (datum: HierarchyPointNode<TreeNodeDatum>) => {
    /* 
       Call this function when a node is clicked
       Open Node Modal
       Open Rotator Modal
    */

    //when a node is clicked, save the current node information to redux store.
    dispatch(saveNode({ Node: datum }));

    //console.log("datum is", datum);

    switch (true) {
      //show Rotator drawer if datum.data.attributes?.type is root

      case datum.data.attributes?.type === 'root':
        dispatch(toggleRotatorDrawer());
        break;
    }
  };

  return (
    <Container fluid style={{ height: '100vh', width: '100vw' }}>
      <Tree
        data={tree.Tree}
        collapsible={false}
        onNodeClick={handleNodeClick}
        translate={{ x: 200, y: 200 }}
        orientation="vertical"
        separation={{ nonSiblings: 3, siblings: 2.5 }}
      />
      <DrawerRotator />
    </Container>
  );
}
