import { Reducer } from "redux";
import {
  SourceText,
  Transformation,
  TextTransformer,
  UserAction,
  MODIFY_SOURCE,
  CHANGE_TRANSFORMATION,
  isPrefixSuffixTransformation,
  isFilterTransformation,
  ADD_TRANSFORMATION,
  REMOVE_TRANSFORMATION,
  EXEC_TRANSFORMATIONS,
} from "./types";

const doTransformation = function (
  src: string,
  transformation: Transformation
): string {
  if (transformation == null) return src;

  if (isPrefixSuffixTransformation(transformation)) {
    let lines: string[] = src.split("\n");
    let dst = lines.map(
      (line) => transformation.Prefix + line + transformation.Suffix
    );
    let res: string = dst.join("\n");
    return res;
  } else if (isFilterTransformation(transformation)) {
    let lines: string[] = src.split("\n");
    let dst = lines.filter((line) =>
      transformation.FilterFunc(line) ? line : ""
    );
    let res: string = dst.join("\n");
    return res;
  }
  return src;
};

const doTransformations = function (
  src: string,
  transformations: Transformation[]
): string {
  let dst: string = src;
  transformations.forEach((t) => (dst = doTransformation(dst, t)));
  return dst;
};

export const TransformerReducer: Reducer<TextTransformer, UserAction> = (
  s,
  a
) => {
  if (s === undefined) {
    return {
      Src: { Text: "" },
      Dst: { Text: "" },
      Transformations: [],
    };
  }
  let transformations: Transformation[];

  switch (a.type) {
    case MODIFY_SOURCE:
      let mst: SourceText = a.payload as SourceText;
      if (mst != null)
        return {
          ...s,
          Src: { Text: mst.Text },
        };
      break;

    case ADD_TRANSFORMATION:
      transformations = [...s.Transformations.slice(), a.payload];
      return {
        ...s,
        Transformations: transformations,
      };

    case CHANGE_TRANSFORMATION:
      let before = s.Transformations.slice(0, a.payload.index);
      let after = s.Transformations.slice(a.payload.index + 1);

      transformations = [...before, a.payload.transformation, ...after];
      return {
        ...s,
        Transformations: transformations,
      };

    case REMOVE_TRANSFORMATION:
      transformations = s.Transformations.filter((_t, i) => i !== a.payload);
      return {
        ...s,
        Transformations: transformations,
      };
    
    case EXEC_TRANSFORMATIONS:
      return {
        ...s,
        Dst: { Text: doTransformations(s.Src.Text, s.Transformations) },
      };
  }
  return s;
};
