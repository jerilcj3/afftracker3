import {
  Accordion,
  ActionIcon,
  AccordionControlProps,
  Box,
} from '@mantine/core';
import { IconDots } from '@tabler/icons';
import FormEmailNode from '../FormEmailNode';
import FormEmailRotator from '../FormEmailRotator';
import FormLanderNode from '../FormLanderNode';
import FormLanderRotator from '../FormLanderRotator';
import FormToken from '../FormToken';
import type { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { landerRotator } from '../../../slices/AccordianSlice';

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

const AccordianRoot: React.FC = ({}) => {
  const accordian = useSelector((state: RootState) => state.accordian);

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
      {/* Lander Rotator Form */}
      <Accordion.Item value="landerRotator">
        {/* If node is of type root, then only one lander rotator can be created under root. Multiple lander rotators cannot be created */}

        <Accordion.Control disabled={accordian.landerRotator}>
          Lander Rotator
        </Accordion.Control>
        <Accordion.Panel>
          {/* Lander Rotator Form */}
          <FormLanderRotator />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Token Form */}
      <Accordion.Item value="configureTokens">
        <Accordion.Control disabled={accordian.tokens}>
          Configure Tokens
        </Accordion.Control>
        <Accordion.Panel>
          {/* Token Rotator Form */}
          <FormToken />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Lander Node Form */}
      <Accordion.Item value="landerNode">
        <Accordion.Control disabled={accordian.landerNode}>
          Lander Node
        </Accordion.Control>
        <Accordion.Panel>
          {/* Form Lander Node Form */}
          <FormLanderNode />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Email Rotator Form */}
      <Accordion.Item value="emailRotator">
        <Accordion.Control disabled={accordian.emailRotator}>
          Email Rotator
        </Accordion.Control>
        <Accordion.Panel>
          {/* Form Lander Node Form */}
          <FormEmailRotator />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Email Node Form */}
      <Accordion.Item value="emailNode">
        <Accordion.Control disabled={accordian.emailNode}>
          Email Node
        </Accordion.Control>
        <Accordion.Panel>
          {/* Form Lander Node Form */}
          <FormEmailNode />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordianRoot;
