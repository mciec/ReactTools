import React, { FunctionComponent } from 'react';
import '../App.css';
import { DstText } from '../../state/dstText/types';


type Props = {
    dstText: DstText;
}

export const OutputBox: FunctionComponent<Props> = (props) => {
    return (
      <textarea
        id="MyDstText"
        value={props.dstText.Text}
        rows={20}
        cols={80}
      ></textarea>
    );
  };

