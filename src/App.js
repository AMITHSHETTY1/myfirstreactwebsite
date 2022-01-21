import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
// import Menu from './Menu';
// import User from './User';
// import Search from './Search';

// import axios from 'axios';


function App(){
return(
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element = {<Home/>} />
    <Route exact path="/about" element = {<About/>} />
    <Route exact path="/services" element = {<Services/>} />
    <Route exact path="/contact" element = {<Contact/>} />
    <Route path="*" element={<Navigate Replace to="/" />} />
    </Routes>
    
    </>
)
}

export default App;
// const App = () =>{

// return(
//     <>
// <Menu/><br></br><br></br><br></br>
//     <Routes>
//     <Route path="/" element={<About name="amith"/>} />
//     <Route path="/contact" element={<Contact/>} />
//     <Route path="/user/:fname/:lname" element={<User/>} />
//     <Route path="/search" element={<Search/>} />
//     <Route path="*" element={<Navigate replace to="/" />} />
//     </Routes>
//     </>
// )

// }

// export default App;


// const App = () =>{

//     const [num,setNum] = useState();
//     const [name,setName] = useState();
//     const [moves,setMoves] = useState();


// //  const res = async () =>{
// //      const a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
// //     setName(res.abilities);
// //  }
// useEffect(() =>{

//     async function getData() {
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//         setName(res.data.name);
//         setMoves(res.data.moves.length);

//     }

//     getData();
//     // res();
// });

//  const EventName=(event) =>{

//     setNum(event.target.value)
//  }
    

// return(
//     <>
// <h1>Value Added is {num}</h1>
// <h1>Value Added is {name}</h1>
// <h1>Value Added is {moves}</h1>

//     <select onChange={EventName} value={num}>
//     <option value="1">1</option>
//     <option value="25">25</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     </select>
//     </>
// )


// }

// export default App;


// function Card (props){
// return(
// <div>
// <div>{props.id}</div>
// <div>{props.fname}</div>
// <div>{props.lname}</div>
// </div>

// )

// }
// export default Card;

// function App() {
//   const [num , setNum] = useState(0);

  
  
//   useEffect (() =>{
  
//   document.title =`click me + ${num}`;
  
//   });
  
//   const IncNum = () =>{
  
//     setNum(num + 1);
//   };

  
//     return (
//       <>
//   <button class="btn btn-primary" onClick={IncNum}>Click me {num}</button>

//       </>
//     )
//   }
  
//   export default App;

// const FirstName = createContext();
// const LastName = createContext();

// function App () {

//   return(
//     <>
//     <FirstName.Provider value={"Amith"}>
// <LastName.Provider value={"Shetty"}>
// <Coma/>
// </LastName.Provider>
// </FirstName.Provider>
// </>

//   )

// }

// export default App;
// export {FirstName,LastName}


// function App() {
// const [num , setNum] = useState(0);
// const [nums , setNums] = useState(0);


// useEffect (() =>{

//   alert("click me")

// }, [nums]);

// const IncNum = () =>{

//   setNum(num + 1);
// };
// const IncNums = () =>{

//   setNums(nums + 1);
// }

//   return (
//     <>
// <button class="btn btn-primary" onClick={IncNum}>Click me {num}</button>
// <button class="btn btn-success" onClick={IncNums}>Click me {nums}</button>
//     </>
//   )
// }

// export default App;

