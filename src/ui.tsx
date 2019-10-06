import './ui.css';

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'

declare function require(path: string): any

class App extends React.Component {
  state = {
    message: null
}
  componentDidMount(){
    onmessage = (e)=>{
        this.setState({message : e.data.pluginMessage})
        console.log(e.data.pluginMessage)
    }
  }

  textbox: HTMLInputElement

  
  countRef = (element: HTMLInputElement) => {
    if (element) element.value = '5'
    this.textbox = element
  }

  onCreate = () => {
    const count = parseInt(this.textbox.value, 10)
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
    console.log('plugin running')
  }
 

  render() {
    let {message} = this.state;
    return (
      <div className='container'>
        <div className="content">
        {message && message.type === 'warning' &&
        <> 
        <div className="error">
            <img src={require('../assets/alert.svg')} className="img-alert" alt="alert" />
            {message.message}
           </div>
          <div className="cmd-text"> {message.action}</div>

          </>
          }
          <div className="btn">
            Get Selection Snippet
          </div>
        </div>

        <div className="react-component">
          <pre> {"\n"}const styles = StyleSheet.create({"{"}{"\n"}bigBlue: {"{"}{"\n"}{"    "}color: 'blue',{"\n"}{"    "}fontWeight: 'bold',{"\n"}{"    "}fontSize: 30,{"\n"}{"}"},{"\n"}red: {"{"}{"\n"}{"    "}color: 'red',{"\n"}{"}"},{"\n"}{"}"});{"\n"}const styles = StyleSheet.create({"{"}{"\n"}bigBlue: {"{"}{"\n"}{"    "}color: 'blue',{"\n"}{"    "}fontWeight: 'bold',{"\n"}{"    "}fontSize: 30,{"\n"}{"}"},{"\n"}red: {"{"}{"\n"}{"    "}color: 'red',{"\n"}{"}"},{"\n"}{"}"});{"\n"}const styles = StyleSheet.create({"{"}{"\n"}bigBlue: {"{"}{"\n"}{"    "}color: 'blue',{"\n"}{"    "}fontWeight: 'bold',{"\n"}{"    "}fontSize: 30,{"\n"}{"}"},{"\n"}red: {"{"}{"\n"}{"    "}color: 'red',{"\n"}{"}"},{"\n"}{"}"});{"\n"}{"\n"}{"              "}{"\n"}{"            "}</pre>
        </div>
        <div className="btn">
          Clipboard
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))