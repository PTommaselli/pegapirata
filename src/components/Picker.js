import React from 'react';
import { View, TextInput,Text, Button,  Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class PrimaryLoginPage extends React.Component {

 constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            value: "",
            favSport: undefined,
            items: [
                {
                    label: 'Roubo',
                    value: 'Roubo',
                },
                {
                    label: 'Assassinato',
                    value: 'Assassinato',
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
                    value: value
                });
            }}
            onUpArrow={() => {
                this.inputRefs.picker.togglePicker();
            }}
            onDownArrow={() => {
                this.inputRefs.company.focus();
            }}
            style={{ ...pickerSelectStyles }}

            value={this.state.value}
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
