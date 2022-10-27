import React, { useEffect } from 'react';

const ClockComponent = ({clock}) => {

    useEffect(() => {
      console.log('Created clock')
    
      return () => {
        console.log('Clock is going unmount')
      }
    }, [clock])
    

    return (
        <div>
            <h2> Hora Actual: {clock.fecha.toLocaleTimeString()}</h2>
            <h3> {clock.nombre} {clock.apellidos}</h3>
            <h1> Edad: {clock.edad}</h1>
        </div>
    );
}

export default ClockComponent;
