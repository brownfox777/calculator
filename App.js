import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CalcButton from './src/CalcButton';
import OutputPlace from './src/OutputPlace';
import Header from './src/Header';
import HistoryLine from './src/HistoryLine';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      output: '0',
      innerBuffer: null,
      innerOperation: null,
      history: '',
      iscycle: false,
    };
  }

  ButtonPressed(x) {
      console.log(this.state.history);
    switch (x.text) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        if (this.state.iscycle === true) {
          return this.setState({ output: x.text, history: x.text, iscycle: false });
        } else if ((this.state.output === '0') ||
          (this.state.innerBuffer === this.state.output) ||
          (this.state.output === 'Infinity') ||
          (this.state.output === 'Error')) {
            return this.setState({ output: x.text, history: this.state.history + x.text });
          } 
        return this.setState({ output: this.state.output + x.text, history: this.state.history + x.text });

      case 'AC':
        return this.setState({ output: '0', history: '' });

      case '+/-':
        return this.setState({ output: -1 * Number(this.state.output), history: this.state.history + ' * (–1) ', iscycle: false });

      case '/':
        this.setState({ innerBuffer: (this.state.output), innerOperation: '/', history: this.state.history + ' / ', iscycle: false });
        break;

      case 'x':
        this.setState({ innerBuffer: (this.state.output), innerOperation: 'x', history: this.state.history + ' * ', iscycle: false });
        break;

      case '+':
        this.setState({ innerBuffer: (this.state.output), innerOperation: '+', history: this.state.history + ' + ', iscycle: false });
        break;

      case '-':
        this.setState({ innerBuffer: (this.state.output), innerOperation: '-', history: this.state.history + ' – ', iscycle: false });
        break;

      case '√': {
        if (Number(this.state.output) < 0) {
          return this.setState({ output: 'Error', history: '' });
        }
          return this.setState({ 
            output: Math.sqrt(Number(this.state.output)), 
            history: this.state.history + ' √ = ' + Math.sqrt(Number(this.state.output)),
            innerBuffer: Math.sqrt(Number(this.state.output)),
            iscycle: true 
          });
        }

      case '=':
        let result = 0;
        console.log(this.state.innerBuffer);
        switch (this.state.innerOperation) {
          case '/':
          result = Number(this.state.innerBuffer) / Number(this.state.output);
            if (this.state.output === '0') return this.setState({ output: 'Infinity' })
            return this.setState({ 
              output: result, 
              history: this.state.history + ' = ' + result,
              innerBuffer: result,
              iscycle: true
            });
          case 'x':
          result = Number(this.state.innerBuffer) * Number(this.state.output);
          return this.setState({ 
            output: result, 
            history: this.state.history + ' = ' + result,
            innerBuffer: result,
            iscycle: true
          });
          case '+':
          result = Number(this.state.innerBuffer) + Number(this.state.output);
          return this.setState({ 
            output: result, 
            history: this.state.history + ' = ' + result,
            innerBuffer: result,
            iscycle: true
          });
          case '-':
          result = Number(this.state.innerBuffer) - Number(this.state.output);
          return this.setState({ 
            output: result, 
            history: this.state.history + ' = ' + result,
            innerBuffer: result,
            iscycle: true
          });
        }
      break;

      default: {
        return this.setState({ output: '' });
      }
    }
  }

  renderButtonsLine(startID, numberOfButtons){
    const line = DATA.map((item) => {
      if ((item.id >= startID) && (item.id < startID + numberOfButtons)) {
        return <CalcButton key={item.id} data={DATA[item.id]} whenPressed={() => this.ButtonPressed(DATA[item.id])} />
      }
    })
    return (
    <View style={styles.buttonLineStyle}>
      {line}
    </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, elevation: 1 }}>
        <Header headerText='Calculator' />
        <OutputPlace textOutput={this.state.output} />
        <HistoryLine historyContent={this.state.history} />
        {this.renderButtonsLine(1, 4)}
        {this.renderButtonsLine(5 ,4)}
        {this.renderButtonsLine(9, 4)}
        {this.renderButtonsLine(13, 4)}
        {this.renderButtonsLine(17, 3)}
      </View>
    );
  } 


/* 
  render() {
    return (
      <View style={{ flex: 1, elevation: 1 }}>
        <Header headerText='Calculator' />
        <OutputPlace textOutput={this.state.output} />

        <View style={styles.buttonLineStyle}>
          <CalcButton data={DATA[1]} whenPressed={() => this.ButtonPressed(DATA[1])} />
          <CalcButton data={DATA[2]} whenPressed={() => this.ButtonPressed(DATA[2])} />
          <CalcButton data={DATA[3]} whenPressed={() => this.ButtonPressed(DATA[3])} />
          <CalcButton data={DATA[4]} whenPressed={() => this.ButtonPressed(DATA[4])} />
        </View>

        <View style={styles.buttonLineStyle}>
          <CalcButton data={DATA[5]} whenPressed={() => this.ButtonPressed(DATA[5])} />
          <CalcButton data={DATA[6]} whenPressed={() => this.ButtonPressed(DATA[6])} />
          <CalcButton data={DATA[7]} whenPressed={() => this.ButtonPressed(DATA[7])} />
          <CalcButton data={DATA[8]} whenPressed={() => this.ButtonPressed(DATA[8])} />
        </View>

        <View style={styles.buttonLineStyle}>
          <CalcButton data={DATA[9]} whenPressed={() => this.ButtonPressed(DATA[9])} />
          <CalcButton data={DATA[10]} whenPressed={() => this.ButtonPressed(DATA[10])} />
          <CalcButton data={DATA[11]} whenPressed={() => this.ButtonPressed(DATA[11])} />
          <CalcButton data={DATA[12]} whenPressed={() => this.ButtonPressed(DATA[12])} />
        </View>

        <View style={styles.buttonLineStyle}>
          <CalcButton data={DATA[13]} whenPressed={() => this.ButtonPressed(DATA[13])} />
          <CalcButton data={DATA[14]} whenPressed={() => this.ButtonPressed(DATA[14])} />
          <CalcButton data={DATA[15]} whenPressed={() => this.ButtonPressed(DATA[15])} />
          <CalcButton data={DATA[16]} whenPressed={() => this.ButtonPressed(DATA[16])} />
        </View>

        <View style={styles.buttonLineStyle}>
          <CalcButton data={DATA[17]} whenPressed={() => this.ButtonPressed(DATA[17])} />
          <CalcButton data={DATA[18]} whenPressed={() => this.ButtonPressed(DATA[18])} />
          <CalcButton data={DATA[19]} whenPressed={() => this.ButtonPressed(DATA[19])} />
          <CalcButton data={DATA[20]} whenPressed={() => this.ButtonPressed(DATA[20])} />
        </View>

      </View>
    );
  } */
}

const styles = {
  buttonLineStyle: {
    flexDirection: 'row',
    flex: 1,

  }
};

const buttonColor = {
  color1: 'lavender',
  color2: '#b0c4de',
  color3: '#DEB887',
};


const DATA = [
  { id: 0, text: '--', color: buttonColor.color1, knobFlex: 1 },
  { id: 1, text: 'AC', color: buttonColor.color1, knobFlex: 1 },
  { id: 2, text: '+/-', color: buttonColor.color1, knobFlex: 1 },
  { id: 3, text: '√', color: buttonColor.color1, knobFlex: 1 },
  { id: 4, text: '/', color: buttonColor.color3, knobFlex: 1 },
  { id: 5, text: '7', color: buttonColor.color2, knobFlex: 1 },
  { id: 6, text: '8', color: buttonColor.color2, knobFlex: 1 },
  { id: 7, text: '9', color: buttonColor.color2, knobFlex: 1 },
  { id: 8, text: 'x', color: buttonColor.color3, knobFlex: 1 },
  { id: 9, text: '4', color: buttonColor.color2, knobFlex: 1 },
  { id: 10, text: '5', color: buttonColor.color2, knobFlex: 1 },
  { id: 11, text: '6', color: buttonColor.color2, knobFlex: 1 },
  { id: 12, text: '-', color: buttonColor.color3, knobFlex: 1 },
  { id: 13, text: '1', color: buttonColor.color2, knobFlex: 1 },
  { id: 14, text: '2', color: buttonColor.color2, knobFlex: 1 },
  { id: 15, text: '3', color: buttonColor.color2, knobFlex: 1 },
  { id: 16, text: '+', color: buttonColor.color3, knobFlex: 1 },
  { id: 17, text: '0', color: buttonColor.color2, knobFlex: 2 },
  { id: 18, text: '.', color: buttonColor.color2, knobFlex: 1 },
  { id: 19, text: '=', color: buttonColor.color3, knobFlex: 1 }
];