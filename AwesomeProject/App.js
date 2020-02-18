/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


 //import compnents 
import React, {Component} from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import CompanyData from './companyData';

//export default function App () {
export default class App extends React.Component {

//constructor for parsing data
  constructor(){
    super()
    this.state ={
      data: []
    }
  }

//get data fro json object
  getData(){
    return fetch ('http://10.0.3.198/BusApp/api/sync/aziende')
    .then ((response) => response.json())
    .then ((responseJson) => {
      this.setState({data: responseJson});
    })
    .catch((error) => {
        console.log (error)
    });
  }

  componentDidMount(){
    this.getData();
  }

  render (){

      return(   
              <CompanyData data ={this.state.data}/>
        );
    }
};
