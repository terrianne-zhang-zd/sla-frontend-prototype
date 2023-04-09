import { Well, Title } from '@zendeskgarden/react-notifications';
import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const Example = () => {
    return (
        <>
        <Well>
            <Title>Requester wait time</Title>
            The time between each public comment from agents, displayed in minutes. The SLA will pause on Pending.
        </Well>
        </>
    )
};

export default Example;
