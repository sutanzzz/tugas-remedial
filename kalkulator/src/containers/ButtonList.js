import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pressButton, pressEqual, pressReset } from '../actions/index'
import './style.css'

class ButtonList extends Component {
    render () {
        return (
            <div className='row'>
                
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(7)}}>7</button>
                        
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(8)}}>8</button>
                        
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(9)}}>9</button><br/>
                        
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(4)}}>4</button>
                    
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(5)}}>5</button>
                            
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(6)}}>6</button><br/>
                        
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(1)}}>1</button>
                        
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(2)}}>2</button>
                            
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(3)}}>3</button><br/>
                        
                    <button className='clear' onClick={() => { this.props.pressButton('.')}}>.</button>
                        
                    <button className='btn-block btn-lg btn-default' onClick={() => { this.props.pressButton(0)}}>0</button>
                        
                    <button className='clear' onClick={() => { this.props.pressReset()}}>C</button><br/>
                            
                    <button className='operator' onClick={() => { this.props.pressButton('+')}}>+</button>
                            
                    <button className='operator' onClick={() => { this.props.pressButton('-')}}>-</button>
                        
                    <button className='operator' onClick={() => { this.props.pressEqual()}}>=</button>
            </div>         
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({pressButton, pressEqual, pressReset}, dispatch)
}

export default connect(null, mapDispatchToProps)(ButtonList)