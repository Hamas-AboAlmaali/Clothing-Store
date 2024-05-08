import './App.css'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import ImageCollection from './components/ImageCollection';
import Footer from './components/Footer';
import Brands from './components/Brands';



function App() {

  return (
    <>
      <CssBaseline></CssBaseline>
      <NavBar></NavBar>
      <Header></Header>
      <Cards></Cards>
      <ImageCollection></ImageCollection>
      <Brands></Brands>
      <Footer></Footer>
    </>
  )
}

export default App
