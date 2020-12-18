import React, { FunctionComponent } from "react";
import "../../App.css";
import {
  FilterType,
  isFilterTransformation,
  isPrefixSuffixTransformation,
  Transformation,
} from "../../state/TextTransformer/types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import { TransformationItemPrefixSuffix } from "../TransformationItemPrefixSuffix/TransformationItemPrefixSuffix";
import { TransformationItemSimpleFilter } from "../TransformationItemSimpleFilter/TransformationItemSimpleFilter";

type ObjectProps = {
  transformation: Transformation;
};

type FunctionProps = {
  changeTransformationType: (t: Transformation) => any;
  removeTransformation: () => any;
};

const transformationItem: FunctionComponent<ObjectProps & FunctionProps> = (
  props
) => {
  let x = props;

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
          FilterName: FilterType.NotStartingWithA,
          FilterFunc: (line) => !line.startsWith("A"),
        });
        break;
    }
  };

  const changePrefixSuffix = (prefix: string, suffix: string) => {
    if (
      props.transformation != null &&
      isPrefixSuffixTransformation(props.transformation)
    ) {
      props.changeTransformationType({
        ...props.transformation,
        Prefix: prefix,
        Suffix: suffix,
      });
    }
  };

  const changeFilter = (
    filterName: FilterType,
    filterFunc: (line: string) => boolean
  ) => {
    if (
      props.transformation != null &&
      isFilterTransformation(props.transformation)
    ) {
      props.changeTransformationType({
        ...props.transformation,
        FilterName: filterName,
        FilterFunc: filterFunc,
      });
    }
  };

  const removeTransformation = (event: React.FormEvent<HTMLInputElement>) => {
    props.removeTransformation();
  };

  return (
    <div className="mx-0 mt-1 mb-0 border rounded">
      <Form.Group as={Row} className="mx-1 mt-1 mb-0">
        <Col xs={4}>
          <Form.Check
            type={"checkbox"}
            custom
            checked
            label="Click to remove"
            onChange={removeTransformation}
          />
        </Col>
        <Col>
          <Form.Control
            as="select"
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
          </Form.Control>
        </Col>
      </Form.Group>

      <div className="mx-1 mt-1 mb-0">
        {props.transformation != null &&
        isPrefixSuffixTransformation(props.transformation) ? (
          <TransformationItemPrefixSuffix
            {...{
              transformation: props.transformation,
              changePrefixSuffix: changePrefixSuffix,
            }}
          />
        ) : null}
        {props.transformation != null &&
        isFilterTransformation(props.transformation) ? (
          <TransformationItemSimpleFilter
            {...{
              transformation: props.transformation,
              changeFilter: changeFilter,
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

// const mapStateToProps = function (state: Transformer): ObjectProps {
//   return {
//     transformation: state.Transformation,
//   };
// };

// const mapDispatchToProps = function (dispatch: any): FunctionProps {
//   return {
//     changeTransformationType: (t: Transformation) =>
//       dispatch(SetTransformation(t)),
//   };
// };

// export const TransformationItem = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(transformationItem);

export const TransformationItem = transformationItem;
