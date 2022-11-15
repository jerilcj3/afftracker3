import {
  Accordion,
  ActionIcon,
  AccordionControlProps,
  Box,
} from '@mantine/core';
import { IconDots } from '@tabler/icons';
import Email from '../forms/rotators/Email';

import Lander from '../forms/rotators/Lander';
import Token from '../forms/rotators/Token';

import type { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg">
        <IconDots size={16} />
      </ActionIcon>
    </Box>
  );
}

const DrawerRotatorAccordian: React.FC = ({}) => {
  /**
   * Todos
   * Access the state of the node from the redux store
   * If the attribute of the current node clicked is 'root' then hide 'Email Rotator Accordian'
   * If the attribute of the current node clicked is of type 'landerRotator' then show 'Email Rotator Accordian'
   * If the attribute of the current node clicked is not 'root' then hide 'Configure Tokens Accordian'
   */

  //accessing the redux store node
  const node = useSelector((state: RootState) => state.node);

  return (
    <Accordion
      variant="separated"
      radius="md"
      defaultValue="customization"
      styles={{
        item: {
          // styles added to all items
          backgroundColor: '#fff',
          border: '1px solid #ededed',

          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#ccc',
          },
        },

        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
      {/* Lander Accordian */}
      <Accordion.Item value="customization">
        {/* If node is of type root, then only one lander rotator can be created under root. Multiple lander rotators cannot be created */}

        <Accordion.Control>Lander Rotator</Accordion.Control>
        <Accordion.Panel>
          <Lander />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Email Accordian */}
      <Accordion.Item value="flexibility">
        {/* If the attribute of the current node clicked is 'root' then hide 'Email Rotator Accordian' */}
        <Accordion.Control>Email Rotator</Accordion.Control>
        <Accordion.Panel>
          <Email />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Token Accordian */}
      <Accordion.Item value="focus-ring">
        <Accordion.Control>Configure Tokens</Accordion.Control>
        <Accordion.Panel>
          <Token />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default DrawerRotatorAccordian;
