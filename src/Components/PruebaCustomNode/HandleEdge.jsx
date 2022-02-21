import React, { useState } from 'react'

import { Handle, Position } from 'react-flow-renderer';

import CustomInput from './CustomInput';

import { Add } from '../../ts/index.ts';


function HandleEdge( { data, isConnectable } ) {

  // const [idInputCheckBox, setIdInputCheckBox] = useState('');
  // const [labelValue, setLabelValue] = useState('');


    const style = { background: '#fe3', padding: 2  }
    const styleA = { ...style, top: 10, padding: 2, color: '#111', content: 'A'}
    const styleB = { ...style, bottom: 20, padding: 2, content: 'B', '#handle1::before': {content: 'B'}  }

    return (
        <>
          <Handle
            type = "target"
            id="handle1"
            position = { Position.Left }
            style = { style }
            onConnect = { (params) => console.log('handle onConnect', params) }
            isConnectable = { isConnectable }
          />
          <div>
            Custom Node: <strong>{data.color}</strong> admeás { Add(2010101) } 
          </div>
          
          {
            <CustomInput 
              idInputCheckBox = { '1' }
              labelValue = {'color'}
            />
          }

          <Handle
            type = "source"
            position = { Position.Right }
            id = "a"
            style = { styleA }
            isConnectable = { isConnectable }
          />
          
          <Handle
            type = "source"
            position = { Position.Right }
            id = "b"
            style = { styleB }
            isConnectable = { isConnectable }
          />
        </>
      );
} 

export default HandleEdge;