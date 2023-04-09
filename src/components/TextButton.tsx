import React from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Anchor href="#default">Enter the Garden</Anchor>
    </Col>
  </Row>
);

export default Example;