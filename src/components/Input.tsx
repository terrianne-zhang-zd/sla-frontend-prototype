import React from 'react';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col>
      <Field>
        <Label>Plant</Label>
        <Input />
      </Field>
    </Col>
  </Row>
);

export default Example;