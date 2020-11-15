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
    <div>
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

      {props.transformation != null &&
      isPrefixSuffixTransformation(props.transformation) ? (
        <div>
          <label htmlFor="prefix">Prefix</label>
          <input
            id="prefix"
            value={props.transformation.Prefix}
            onChange={changePrefix}
          />
          <label htmlFor="suffix">Suffix</label>
          <input
            id="suffix"
            value={props.transformation.Suffix}
            onChange={changeSuffix}
          />
        </div>
      ) : null}
      {props.transformation != null &&
      isFilterTransformation(props.transformation) ? (
        <div>
          <label htmlFor="filterName" />
          <input id="filterName" value={props.transformation.FilterName} />{" "}
        </div>
      ) : null}
    </div>
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
