
import React from 'react';
import './App.css';
import './index.js';
import Footer from './footer.js';
import Data from './mydata.json'
//====================================== ( Class Component)  ===========================
//--------------------------Props------------------
//Components can be passed as props, which stands for properties.

//function Ajay(props){
//return <h1>i have a {props.bike} bike and {props.car} car</h1>;
//}

//----------------- Props end --------------------------
//==================================Components in Components==================================================
//We can refer to components inside other components:
/*

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my Garage?</h1>
	    <Car />
    </>
  );
}

*/
//ReactDOM.render(<Garage />, document.getElementById('root'));
//-------------------------- Components in Components end ------------------

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function App(){
//   return (
//       <>
//       <div className="posts">
//         {/* here we will use to take a data in mydata.json file */}
//         {Data.map(post => {
// return(
//                   <>
//                   <h1>{post.fulldetail.name}</h1>
//                   </>
//                   )
//               })
//         }
//         </div>
//       {Footer}
//       </>
//   );
//   }
//   export default App;
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//====================================React Class Components===============================================
// Null (or) defult conster
// class App extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       no:1,
//       name:"Ajay krishnan",
//       age:21,
//     };
//   }
//   render(){
//     return <h1>Hi I'M {this.state.name}, and i 'm {this.state.age} old</h1>
//   }
// }
//---------------------------------------
// ============= ( pros  in the Constructor )=======================
// class App extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     //additional
//     this.state={
//       myname:props.name,
//       myage:props.age
//     }
// }
// render() {
//   return <h2>I am {this.props.name}{this.props.myname}!{this.props.age}</h2>;
// }
// }


//================================ end pros  in the Constructor end ========================
//-------------------------------------
//
//=============================( Changing the state Object )===========================================

class App extends React.Component{
  constructor(){
    super();
    this.state={
      rno:1,
      name:"Ajay",
      mark:50,
    }
  }

changeMark=()=>{
  //
 // this.setState({mark:this.state.mark+50});
  this.setState({mark:100});
}
render(){
  return(
    <>
    <h1>{this.state.mark}</h1>
    <button type="button" onClick={this.changeMark}>Click me</button>
    </>
  );
}


}

//=============================(-end-) Changing the state Object )===========================================



export default App;
//=============================================================================
