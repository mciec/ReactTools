import React, { FunctionComponent } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FilterTransformation } from "../../state/TextTransformer/types";

type ObjectProps = {
  transformation: FilterTransformation;
};

type FunctionProps = {
  changeFilterParam: (filterParam: string) => any;
};

const transformationItemSimpleFilter: FunctionComponent<
  ObjectProps & FunctionProps
> = (props) => {
  const changeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeFilterParam(event.target.value);
  };

  return (
    <React.Fragment>
      <Form.Group as={Row} controlId="filterGroup" className="mb-1">
        <Form.Label column={true} xs={1}>
          Filter
        </Form.Label>

        <Form.Label column={true} xs={2}>
          Function
        </Form.Label>
        <Col>
          <Form.Control
            as="input"
            value={props.transformation.FilterParam}
            onChange={changeFilter}
          />
        </Col>
      </Form.Group>
    </React.Fragment>
  );
};

export const TransformationItemSimpleFilter = transformationItemSimpleFilter;
