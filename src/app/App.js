import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../layout/Layout';
import { About } from '../view/About';
import { Catalog } from '../view/Catalog';
import { Cart } from '../view/Cart';
import { Login } from '../view/Login';
import { SignUp } from '../view/SignUp';
import { ApplicationPaths } from '../constants';
import '../Assets/styles/App.css'

// import express from "express";
// const app = express()
// import cors from "cors";
// app.use(cors({
//     origin:windows.CATALOG_ITEMS_API_URL
// }));


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Catalog} />
        <Route path={ApplicationPaths.CatalogPath} component={Catalog} />
        <Route path={ApplicationPaths.CartPath} component={Cart} />
        <Route path={ApplicationPaths.AboutPath} component={About} />
        <Route path={ApplicationPaths.SignUpPath} component={SignUp} />
        <Route path={ApplicationPaths.LoginPath} component={Login} />
      </Layout>
    );
  }
}
