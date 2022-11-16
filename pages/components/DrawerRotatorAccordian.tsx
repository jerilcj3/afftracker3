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
          {/* Lander Rotator Form */}
          <Lander />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Email Accordian */}
      <Accordion.Item value="flexibility">
        {/* If the attribute of the current node clicked is 'root' then hide 'Email Rotator Accordian' */}
        <Accordion.Control>Email Rotator</Accordion.Control>
        <Accordion.Panel>
          {/* Email Rotator Form */}
          <Email />
        </Accordion.Panel>
      </Accordion.Item>

      {/* Token Accordian */}
      <Accordion.Item value="focus-ring">
        <Accordion.Control>Configure Tokens</Accordion.Control>
        <Accordion.Panel>
          {/* Token Rotator Form */}
          <Token />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default DrawerRotatorAccordian;
