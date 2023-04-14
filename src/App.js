import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import axios from "axios"
import Nav from "./components/Nav/Nav"
import Cards from './components/Cards/Cards';
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"
import './App.css';
import './body.css'
import Favorites from './components/Favorites/Favorites';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character"

const API_KEY = "feef1cb7a8f9.aa1bdddc010b6f26cf7f"

function App() {
   const [characters,setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const EMAIL = "dether@gmail.com"
   const PASSWORD = "asdasd123"
   const navigate = useNavigate();

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== (id))
      setCharacters(charactersFiltered)
   }

   
   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home");
      }
   }
   const logout = () => {
      setAccess(false);
   }

   const ShowNav = location.pathname !== "/";
   
   useEffect(() => { //
      !access && navigate('/'); //
   }, [access]); //

   return (
      <div className='App'>
            {ShowNav && <Nav onSearch={onSearch} logout={logout} />}
            <Routes>
               <Route path="/favorites" element={<Favorites/>}/>
               <Route path="/" element={<Form login={login} />} />
               <Route  path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
      </div>
   );
}

export default App;
