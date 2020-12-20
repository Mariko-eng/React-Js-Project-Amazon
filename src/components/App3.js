import React from 'react';

const App3 = (props) =>{
    return (
        <>
        <h1>Kati Ntandise APP3</h1>
        <h1>URL Number : {props.match.params.id}</h1>
        </>
    );
}
export default App3;