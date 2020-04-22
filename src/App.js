import React from 'react';
import Header from "./components/Header/Header";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Main_section from "./components/Profile/Main_section/Main_section";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import {Layout} from "antd";
import 'antd/dist/antd.css';
import Admin_cabinet from "./components/Profile/Admin_cabinet/Admin_cabinet";
import Sign_inContainer from "./components/Profile/Auth/Sign_in/Sign_inContainer";
import Computers_dataContainer from "./components/Profile/Computers_section/Computers_data/Computers_dataContainer";
import Computer_pageContainer from "./components/Profile/Computers_section/Computer_page/Computer_pageContainer";
import RegistationContainer from "./components/Profile/Auth/Registation/RegistationContainer";


const App = (props) => {

    return (

        <Layout style={{minHeight: '100vh'}}>
            <NavBar/>
            <Layout className="site-layout">
                <Header/>
                <Switch style={{background: 'snow'}}>
                    <Route path='/' exact render={() => <Main_section/>}/>


                    <Route path='/computers_section' exact
                           render={() => <Computers_dataContainer/>}/>
                    <Route path='/computers_section/:id'
                           render={() => <Computer_pageContainer/>}/>


                    <Route path='/admin'
                           render={() => <Admin_cabinet/>}/>


                    <Route path='/sign_in'
                           render={() => <Sign_inContainer/>}/>
                    <Route path='/registration'
                           render={() => <RegistationContainer/>}/>
                </Switch>
                <Footer/>
            </Layout>
        </Layout>
    );
};

export default App;
