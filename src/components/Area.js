import React, {Component} from 'react';

class Area extends Component {
    constructor(props) {
        super(props);

        props.store.subscribe(() => {
            this.setState({value: props.store.getState()});
        });

        this.state = {
            value: props.store.getState()
        };

        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const color = this.props.color;

        return(
            <div className='area' onClick={this.handleClick} style={{backgroundColor: color}}>
                {
                    this.state.value[+this.props.i] < 10
                        ? '0' + this.state.value[+this.props.i]
                        : this.state.value[+this.props.i]
                }
            </div>
        )

    }

    handleClick = () => {
        this.props.store.dispatch({type: 'INCREMENT', i: +this.props.i})
    }
}

export default Area;