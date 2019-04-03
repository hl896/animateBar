import React,{Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './bar.css';

class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            value_status1st:20,
            value_status2nd:30,
            value_status3th:70
        }
    }
    
    
        
    render(){
        return (
            <div>
                1.<ProgressBar animated className='singleBar' striped variant="success" now={this.state.value_status1st} />
                2.<ProgressBar animated className='singleBar' striped variant="success" now={this.state.value_status2nd} />
                3.<ProgressBar animated className='singleBar' striped variant="success" now={this.state.value_status3th} />
            </div>
            
        );
    }
}
export default Bar;