import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyContext';

export const MyCard = React.memo(({ name, gender }) => {
    useEffect(() => {
        console.log('Render MyCard')
    });
    return (
        <div>
            <h3>My name: {name}</h3>
            <h4>Gender: {gender}</h4>
        </div>
    )
});

// Arrow Function components
export const About = () => {
    const { count, setCount } = useContext(MyContext);

    return (
        <div>
            <h1>INTRODUCE</h1>
            <h3>Full Name: Pham Thi Trang Thu</h3>
            <h3>Student ID: 4501104228</h3>
            <h3>Birthday: 7th August</h3>
            <h3>Gender: Female</h3>
            <h3>Job: Student</h3>
        </div>
    )
};
