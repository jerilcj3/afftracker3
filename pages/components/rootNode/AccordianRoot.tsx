import {
  Accordion,
  ActionIcon,
  AccordionControlProps,
  Box,
} from '@mantine/core';
import { IconDots } from '@tabler/icons';

import FormLanderRotator from './FormLanderRotator';
import FormToken from './FormToken';


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
          <FormLanderRotator />
        </Accordion.Panel>
      </Accordion.Item>


      {/* Token Accordian */}
      <Accordion.Item value="focus-ring">
        <Accordion.Control>Configure Tokens</Accordion.Control>
        <Accordion.Panel>
          {/* Token Rotator Form */}
          <FormToken />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordianRoot;
