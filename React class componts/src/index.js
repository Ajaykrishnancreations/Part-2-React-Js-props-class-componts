import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Footer from './footer'
import App from './App.js';
import Myderive from './App.js';

//=================== React  ( Component ) =======================
//----------------- ( Props ) --------------------------

// ReactDOM.render(<Ajay bike="r15" car="audi"></Ajay>,document.getElementById('root')
// );
//----------------- Props end --------------------------


//-------------------------- Components in Components ------------------


// function Aj(){
//     return(
//         <>
       
//         </>
//     );
// }

//--------xxxxxx
/* 
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    ,document.getElementById('root')
    );

*/
//-------------------------- Components in Components end ------------------



//====================================React Class Components===============================================
// class componets



ReactDOM.render(
<App name="AJAY" age="21" myname=" Ajay"/>,document.getElementById('root')
);


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
