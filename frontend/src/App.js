import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProjectScreen from './screens/ProjectScreen';



const App = () => {
  return (
    <>
    <Router>
        <Header/>

        <main className='main-content'>
          <Container>
            
            <Routes>
              <Route path="/" exact element = {<HomeScreen />} />
              <Route path="/about" element = {<AboutScreen />} />
              <Route path="/project/:id" element = {<ProjectScreen />} />
            </Routes>
           
          </Container>
          
        </main>
        
        <Footer/>
        </Router>
    </>
  );
}

export default App;
