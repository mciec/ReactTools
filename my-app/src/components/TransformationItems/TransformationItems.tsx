import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  AddTransformation,
  ExecTransformationsReq,
  RemoveTransformation,
  SetTransformation,
} from "../../state/TextTransformer/actions";
import {
  TextTransformer,
  Transformation,
  TransformationType,
} from "../../state/TextTransformer/types";
import { TransformationItem } from "../TransformationItem/TransformationItem";

export const TransformationItems: FunctionComponent = () => {
  const dispatch = useDispatch();

  const transformations: Transformation[] = useSelector<
    TextTransformer,
    Transformation[]
  >((store) => store.Transformations);

  const srcText: string = useSelector<TextTransformer, string>(
    (store) => store.Src.Text
  );

  const changeTransformationType = (i: number, t: Transformation) =>
    dispatch(SetTransformation(i, t));

  const addTransformation = (t: Transformation) =>
    dispatch(AddTransformation(t));

  const removeTransformation = (i: number) => dispatch(RemoveTransformation(i));

  const execTransformations = () =>
    dispatch(ExecTransformationsReq(srcText, transformations));

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        block
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
          execTransformations()
        }
      >
        Execute
      </Button>
      {transformations.map((t, i) => {
        return (
          <TransformationItem
            transformation={t}
            changeTransformationType={(newTransformation: Transformation) =>
              changeTransformationType(i, newTransformation)
            }
            removeTransformation={() => removeTransformation(i)}
            key={`transfItem${i}`}
          />
        );
      })}
      <Button
        variant="primary"
        size="lg"
        block
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
          addTransformation({
            Type: TransformationType.PrefixSuffix,
            Prefix: "",
            Suffix: "",
          })
        }
      >
        New transformation
      </Button>
    </>
  );
};
