import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Button isPrimary>Primary</Button>
    </Col>
  </Row>
);

export default Example;