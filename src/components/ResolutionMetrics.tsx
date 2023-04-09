import { Well, Title } from '@zendeskgarden/react-notifications';
import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import '../App.css'

const Example = () => {

    function ButtonWithDropdown() {

        const [rotated, setRotated] = useState<boolean | undefined>();
      
        return (
          <Row>
            <Col textAlign="center">
              <Dropdown
                onSelect={item => alert(`You planted a ${item}`)}
                onStateChange={options => Object.hasOwn(options, 'isOpen') && setRotated(options.isOpen)}
              >
                <Trigger>
                  <div className='buttonRight'>
                  <Button>
                    Add target
                    <Button.EndIcon isRotated={rotated}>
                      <ChevronIcon />
                    </Button.EndIcon>
                  </Button>
                  </div>
                </Trigger>
                <Menu>
                  <Item value="requester">Requester wait time</Item>
                  <Item value="agent">Agent work time</Item>
                  <Item value="total">Total resolution time</Item>
                  <Item value="resolution">Resolution deadline</Item>
                </Menu>
              </Dropdown>
            </Col>
          </Row>
        );   
    };

    return (
        <>
        <Well>
            <Title>Resolution metrics</Title>
            Set how long you'll take to solve a request.
            <ButtonWithDropdown/>
        </Well>
        </>
    )
};

export default Example;