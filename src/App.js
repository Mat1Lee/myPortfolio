import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation
} from "react-router-dom";
import Header from './Components/Header/Header';
import {createBrowserHistory} from 'history'
import AboutMe from './Components/AboutMe/AboutMe';
import { AnimatePresence } from 'framer-motion';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvSzL8mnwto4QEreKTcX2Q3FKP1FiQQJM",
  authDomain: "newportfolio-11019.firebaseapp.com",
  projectId: "newportfolio-11019",
  storageBucket: "newportfolio-11019.appspot.com",
  messagingSenderId: "237747235851",
  appId: "1:237747235851:web:f44e969ea890ca23bd6b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const history = createBrowserHistory()
function App() {
  const location = useLocation();
  return (<>
      <Header></Header>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location = {location}>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <AboutMe></AboutMe>
          </Route>
          <Route path='/resume'>
            <Resume></Resume>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
        
        </Switch>
      </AnimatePresence>
      </>
  );
}

export default App;
