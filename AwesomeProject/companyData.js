/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';

//in this case i use class CompanyData because i've to obtain a list of company
export default class ComapnyData extends React.Component {

  render (){
    //mapping the object to obtain company name 
    let company = this.props.data.map(function (aziendeData, index){
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            {aziendeData.AN_DESCR1}
                       </Text>
                    </Body>
                </CardItem>
            </Card>     
        );
    });

      return(   
        
                <Content>
                    {company}
                </Content>
        );
    }
};
