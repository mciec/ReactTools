import React from 'react';
import '../App.css';
import { DstText } from '../state/DstText/types';

type Props = {
    dstText: DstText;
}
export const OutputBox: React.FC<Props> = (props) => {
    return (
      <textarea
        id="MySourceText"
        value={props.dstText.Text}
        rows={20}
        cols={80}
      ></textarea>
    );
  };

