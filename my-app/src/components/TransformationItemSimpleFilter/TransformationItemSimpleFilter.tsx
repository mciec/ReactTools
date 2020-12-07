import React, { FunctionComponent } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  FilterType,
  FilterTransformation,
} from "../../state/Transformer/types";

type ObjectProps = {
  transformation: FilterTransformation;
};

type FunctionProps = {
  changeFilter: (
    filterType: FilterType,
    filterFunc: (line: string) => boolean
  ) => any;
};

function findFilterByName(filterName: FilterType): (line: string) => boolean {
  switch (filterName) {
    case FilterType.NotStartingWithA:
      return (line: string) => !line.startsWith("A");
    case FilterType.ShorterThan10Chars:
      return (line: string) => line.length <= 10;
  }
}

const transformationItemSimpleFilter: FunctionComponent<
  ObjectProps & FunctionProps
> = (props) => {
  const changeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if ((Object.values(FilterType) as string[]).includes(event.target.value)) {
      let filterType: FilterType = event.target.value as FilterType;
      props.changeFilter(filterType, findFilterByName(filterType));
    }
  };

  return (
    <React.Fragment>
      <Form.Group as={Row} controlId="filterGroup" className="mb-1">
        <Form.Label column={true} xs={1}>
          Filter
        </Form.Label>
        <Col>
          <Form.Control
            as="select"
            id="filter"
            onChange={changeFilter}
            value={props.transformation.FilterName}
          >
            <option value={FilterType.NotStartingWithA}>
              {FilterType.NotStartingWithA}
            </option>
            <option value={FilterType.ShorterThan10Chars}>
              {FilterType.ShorterThan10Chars}
            </option>
          </Form.Control>
        </Col>
        <Form.Label column={true} xs={2}>
          Function
        </Form.Label>
        <Col>
          <Form.Control
            as="input"
            value={props.transformation.FilterFunc.toString()}
          />
        </Col>
      </Form.Group>
    </React.Fragment>
  );
};

export const TransformationItemSimpleFilter = transformationItemSimpleFilter;
