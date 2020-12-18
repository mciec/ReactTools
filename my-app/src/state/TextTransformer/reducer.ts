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

  switch (a.type) {
    case MODIFY_SOURCE:
      let mst: SourceText = a.payload as SourceText;
      if (mst != null)
        return {
          ...s,
          Src: { Text: mst.Text },
          Dst: { Text: doTransformations(mst.Text, s.Transformations) },
        };
      break;

    case ADD_TRANSFORMATION:
      let transformations: Transformation[] = [
        ...s.Transformations.slice(),
        a.payload,
      ];
      return {
        ...s,
        Dst: { Text: doTransformations(s.Src.Text, transformations) },
        Transformations: transformations,
      };

    case CHANGE_TRANSFORMATION:
      transformations = [
        ...s.Transformations.slice(0, a.payload.index),
        a.payload.transformation,
        ...s.Transformations.slice(a.payload.index + 1),
      ];
      return {
        ...s,
        Dst: { Text: doTransformations(s.Src.Text, transformations) },
        Transformations: transformations,
      };

    case REMOVE_TRANSFORMATION:
      transformations = s.Transformations.filter((_t, i) => i !== a.payload);
      return {
        ...s,
        Dst: { Text: doTransformations(s.Src.Text, transformations) },
        Transformations: transformations,
      };
  }
  return s;
};
