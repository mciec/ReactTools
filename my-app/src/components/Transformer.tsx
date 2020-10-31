import React, { FunctionComponent, Props } from 'react';
import { DstText } from '../state/dstText/types';
import { SrcText } from '../state/srcText/types';
import { InputBox } from './inputBox/InputBox';
import { OutputBox } from './outputBox/OutputBox';

type Props = {
    srcText: SrcText;
    dstText: DstText;
    changeSrcText: (src: string) => any;
}

export const Transformer: FunctionComponent<Props> = (props) =>{
    return (
        <div>
        <InputBox { ...{ srcText: props.srcText, changeSrcText: props.changeSrcText } }/>
        <OutputBox { ...{ dstText: props.dstText} }/>
        </div>
    )
}