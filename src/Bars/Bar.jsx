import React,{Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './bar.css';
import {Form} from 'react-bootstrap'
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
            <div >
                <div>
                    <ProgressBar animated className='singleBar' id='first' striped variant="success" now={this.state.value_status1st} label={`${this.props.value_status1st}%`}/>
                    <ProgressBar animated className='singleBar' id='second' striped variant="warning" now={this.state.value_status2nd} label={`${this.state.value_status2nd}%`}/>
                    <ProgressBar animated className='singleBar' id='third' striped variant="info" now={this.state.value_status3th} label={`${this.props.value_status3th}%`}/>
                </div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        </Form.Control>
                    </Form.Group>
                    <button>-25</button>
                    <button>-10</button>
                    <button>10</button>
                    <button>25</button>
                </Form>
                
            </div>
            
        );
    }
}
export default Bar;