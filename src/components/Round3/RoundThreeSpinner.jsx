import React, { Component } from 'react'
import { useState } from 'react';

import WheelComponent from 'react-wheel-of-prizes';
import { RoundThreeWinnerDisplay } from './RoundThreeWinnerDisplay';
// import 'react-wheel-of-prizes/dist/index.css';

export const RoundThreeSpinner = () =>{

    const [finalist,setFinalist] = useState("");
   
    const segments = [
        'Crispin',
        'Prabhu',
        'Sankar'
      ]
      const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1'
      ]
      const onFinished = (winner) => {
        console.log(winner)
        setFinalist(winner);
        return winner;
      }
     
  
      return (
        <div className = "r3-wheel">
            <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment='won 10'
          onFinished={(winner) => onFinished(winner)}
          primaryColor='black'
          contrastColor='white'
          buttonText='Spin'
          isOnlyOnce={false}
          size={190}
          upDuration={100}
          downDuration={1000}
          fontFamily='Arial'
        />
        <RoundThreeWinnerDisplay winner = {finalist}/>
        </div>
      
      )
}