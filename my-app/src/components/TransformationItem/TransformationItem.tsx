import React, { FunctionComponent } from "react";
import "../../App.css";
import {
  isFilterTransformation,
  isPrefixSuffixTransformation,
  Transformation,
  Transformer,
} from "../../state/Transformer/types";
import { connect } from "react-redux";
import { SetTransformation } from "../../state/Transformer/actions";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

type ObjectProps = {
  transformation: Transformation | null;
};

type FunctionProps = {
  changeTransformationType: (t: Transformation) => any;
};

const transformationItem: FunctionComponent<ObjectProps & FunctionProps> = (
  props
) => {
  const changeTransformationType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let a: string = event.target.value;
    switch (a) {
      case "PrefixSuffix":
        props.changeTransformationType({ Prefix: "**", Suffix: "##" });
        break;
      case "SimpleFilter":
        props.changeTransformationType({
          FilterName: "Remove A%",
          FilterLine: (line) => !line.startsWith("A"),
        });
        break;
    }
  };

  const changePrefix = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      props.transformation != null &&
      isPrefixSuffixTransformation(props.transformation)
    ) {
      let prefix: string = event.target.value;
      props.changeTransformationType({
        ...props.transformation,
        Prefix: prefix,
      });
    }
  };

  const changeSuffix = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      props.transformation != null &&
      isPrefixSuffixTransformation(props.transformation)
    ) {
      let suffix: string = event.target.value;
      props.changeTransformationType({
        ...props.transformation,
        Suffix: suffix,
      });
    }
  };

  return (
    <Form>
      <Form.Row>
        <Col>
          <select
            id="transformation"
            name="transformation"
            onChange={changeTransformationType}
            value={
              props.transformation != null
                ? isPrefixSuffixTransformation(props.transformation)
                  ? "PrefixSuffix"
                  : "SimpleFilter"
                : ""
            }
          >
            <option value="PrefixSuffix">PrefixSuffix</option>
            <option value="SimpleFilter">SimpleFilter</option>
          </select>
        </Col>
        {props.transformation != null &&
        isPrefixSuffixTransformation(props.transformation) ? (
          <Col>
            <Form.Control
              as="input"
              placeholder="input prefix"
              id="prefix"
              value={props.transformation.Prefix}
              onChange={changePrefix}
            />
            <Form.Control
              as="input"
              placeholder="input suffix"
              id="suffix"
              value={props.transformation.Suffix}
              onChange={changeSuffix}
            />
          </Col>
        ) : null}
        {props.transformation != null &&
        isFilterTransformation(props.transformation) ? (
          <Col>
            <Form.Control
              as="input"
              placeholder="Filter name"
              id="filterName"
              value={props.transformation.FilterName}
            />{" "}
          </Col>
        ) : null}
      </Form.Row>
    </Form>
  );
};

const mapStateToProps = function (state: Transformer): ObjectProps {
  return {
    transformation: state.Transformation,
  };
};

const mapDispatchToProps = function (dispatch: any): FunctionProps {
  return {
    changeTransformationType: (t: Transformation) =>
      dispatch(SetTransformation(t)),
  };
};

export const TransformationItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(transformationItem);
