import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  AddTransformation,
  ExecTransformations,
  RemoveTransformation,
  SetTransformation,
} from "../../state/TextTransformer/actions";
import {
  TextTransformer,
  Transformation,
} from "../../state/TextTransformer/types";
import { TransformationItem } from "../TransformationItem/TransformationItem";

// type ObjectProps = {
//   transformations: Transformation[];
// };

// type FunctionProps = {
//   changeTransformationType: (i: number, t: Transformation) => any;
//   addTransformation: (t: Transformation) => any;
//   removeTransformation: (i: number) => any;
// };

// const transformationItems: FunctionComponent<ObjectProps & FunctionProps> = (
//   props
// ) => {
//   return (
//     <>
//       {props.transformations.map((t, i) => {
//         return (
//           <TransformationItem
//             transformation={t}
//             changeTransformationType={(newTransformation: Transformation) => {
//               props.changeTransformationType(i, newTransformation);
//             }}
//             removeTransformation={() => props.removeTransformation(i)}
//             key={`transfItem${i}`}
//           />
//         );
//       })}
//       <Button
//         variant="primary"
//         size="lg"
//         block
//         onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
//           props.addTransformation({ Prefix: "", Suffix: "" })
//         }
//       >
//         New transformation
//       </Button>
//     </>
//   );
// };

// const mapStateToProps = function (state: TextTransformer): ObjectProps {
//   return {
//     transformations: state.Transformations,
//   };
// };

// const mapDispatchToProps = function (dispatch: any): FunctionProps {
//   return {
//     changeTransformationType: (i: number, t: Transformation) =>
//       dispatch(SetTransformation(i, t)),

//     addTransformation: (t) => dispatch(AddTransformation(t)),
//     removeTransformation: (i: number) => dispatch(RemoveTransformation(i)),
//   };
// };

// export const TransformationItems = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(transformationItems);

export const TransformationItems: FunctionComponent = () => {
  const transformations: Transformation[] = useSelector<
    TextTransformer,
    Transformation[]
  >((store) => store.Transformations);
  const dispatch = useDispatch();

  const changeTransformationType = (i: number, t: Transformation) =>
    dispatch(SetTransformation(i, t));

  const addTransformation = (t: Transformation) =>
    dispatch(AddTransformation(t));

  const removeTransformation = (i: number) => dispatch(RemoveTransformation(i));

  const execTransformations = () => dispatch(ExecTransformations());

  return (
    <>
    <Button
      variant="primary"
      size="lg"
      block
      onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => execTransformations()}
    />
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
          addTransformation({ Prefix: "", Suffix: "" })
        }
      >
        New transformation
      </Button>
    </>
  );
};
