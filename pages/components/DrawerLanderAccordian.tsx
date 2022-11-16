import React from 'react'
import { Accordion } from '@mantine/core'
import Lander from '../forms/nodes/Lander'

const DrawerLanderAccordian: React.FC = ({}) => {

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
            {/* Lander Node Form*/}
            <Lander />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

export default DrawerLanderAccordian