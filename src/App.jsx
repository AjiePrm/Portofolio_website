import React from "react";
import Header from './Components/Header/Header'
import Nav from './Components/nav/nav'
import About from './Components/about/About'
import Exp from './Components/experience/exp'
import Hasil from './Components/Project/hasil'
import Footer from './Components/footer/Footer'

const App = () =>{
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Exp/>
            <Hasil/>
            <Footer/>
        </>
        
    )
}

export default App