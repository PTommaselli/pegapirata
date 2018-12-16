import React from 'react';
import { View, TextInput,Text, Button,  Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class PrimaryLoginPage extends React.Component {

 constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favSport: undefined,
            items: [
                {
                    label: 'Roubo',
                    value: 'Roubo',
                },
                {
                    label: 'Furto',
                    value: 'Furto',
                },
                {
                    label: 'Assedio',
                    value: 'Assedio',
                },
                {
                    label: 'Tiroteio',
                    value: 'Assedio',
                }
            ],
        };
    }

    render(){
        return(

      <View >

        <RNPickerSelect

            placeholder={{
                label: 'Tipo do Crime',
                value: null,
                icon: 'menu'
            }}
            items={this.state.items}
            onValueChange={(value) => {
                this.setState({
                    favSport: value,
                });
            }}
            onUpArrow={() => {
                this.inputRefs.picker.togglePicker();
            }}
            onDownArrow={() => {
                this.inputRefs.company.focus();
            }}
            style={{ ...pickerSelectStyles }}


            value={this.state.favSport}
            ref={(el) => {
                this.inputRefs.picker2 = el;
            }}
        />



 </View>
        );
    }
}

  const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      paddingBottom: 18,
      backgroundColor: 'white',
      color: '#636e72',
      elevation: 2,
      marginLeft: 5,
      marginRight: 5
    },

});
