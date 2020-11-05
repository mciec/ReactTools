import React, { FunctionComponent } from "react";
import "../../App.css";
import {
  FilterTransformation,
  PrefixSuffixTransformation,
  Transformation,
  Transformer,
} from "../../state/Transformer/types";
import { connect } from "react-redux";
import { ListFormat } from "typescript";
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
  let pst = props.transformation as PrefixSuffixTransformation;
  let sft = props.transformation as FilterTransformation;

  const changeTransformationType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let a: string = event.target.value;
    switch (a) {
      case "PrefixSuffix":
        props.changeTransformationType({ Prefix: "", Suffix: "" });
        break;
      case "SimpleFilter":
        props.changeTransformationType({
          Name: "Remove A%",
          FilterLine: (line) => !line.startsWith("A"),
        });
        break;
    }
  };

  return (
    <div>
      <select
        id="transformation"
        name="transformation"
        onChange={changeTransformationType}
      >
        <option value="PrefixSuffix" selected={pst != null}>
          PrefixSuffix
        </option>
        <option value="SimpleFilter" selected={sft != null}>
          SimpleFilter
        </option>
      </select>

      {pst != null ? (
        <div>
          <label htmlFor="prefix" />
          <input id="prefix" value={pst.Prefix} /> <label htmlFor="suffix" />
          <input id="suffix" value={pst.Suffix} />
        </div>
      ) : null}
      {sft != null ? (
        <div>
          <label htmlFor="filterName" />
          <input id="filterName" value={sft.Name} />{" "}
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
