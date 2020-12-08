import { Transformation } from "../../state/Transformer/types";

type ObjectProps = {
    transformation: Transformation;
  };
  
  type FunctionProps = {
    changeTransformationType: (t: Transformation) => any;
  };













const mapStateToProps = function (state: Transformer): ObjectProps {
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
    