import { Reducer } from '../../../node_modules/redux'
import { transformer, changeTransformationActionTypes } from './types'
import { dstText } from '../dstText/types'

const transformerReducer: Reducer<transformer, changeTransformationActionTypes> = (s, a) => {
    switch (a.type){
        case "CHANGE_TRANSFORMATION":
            if (a.payload.transformationType == "PREFIX_SUFFIX"){
                if (s === undefined || s == null)
                let lines:string[] = s?.src.text.split("\r");
                let parameters:string[] = a.payload.parameters as string[];
                let dst = lines.map((line) => parameters[0] + line + parameters[1]);


                


                //return {...s, transformationType: a.type, dst: a.pay}
            }
        
    }
}