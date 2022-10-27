import React, { useEffect, useState } from 'react';
import ClockComponent from '../pure/clock';

const ClockListComponent = () => {
    const initialData = {
        "fecha": new Date(),
        "edad": 0,
        "nombre": "Martin",
        "apellidos": "San José"
    }

    const [data, setData] = useState(initialData)

    useEffect(() => {
        console.log('Created clock list')
        const timerID = setInterval(() => {
            setData({
                ...data,
                edad : data.edad + 1,
                fecha : new Date(),
            })
        }, 1000)
        return () => {
            console.log('ClockList is going unmount')
            clearInterval(timerID)
        };
    }, [data]);

    return (
        <div>
            <div>
                <h1> Clock </h1>
            </div>
            <ClockComponent clock={data}></ClockComponent>
        </div>
    );
}

export default ClockListComponent;
