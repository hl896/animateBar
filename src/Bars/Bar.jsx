import React,{Component} from 'react';
import ReactDom from 'react-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './bar.css';
import {Form,FormGroup, FormControl} from 'react-bootstrap'



class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            value_status1st:20,
            value_status2nd:30,
            value_status3th:70,
            status1:false,
            status2:false,
            status3:false
        }
       
    }
    
    onpick(e){
        const getvalues = this.inputEl.value;
        console.log('[Onpick:]'+getvalues);
        if(getvalues=="1"){
            
            this.setState(prevState=>({ 
                status1:!prevState.status1,
                status2:false,
                status3:false   
            }));
            console.log('status1:'+this.state.status1);
        }else if(getvalues=="2"){
            this.setState(prevState=>({ 
                status2:!prevState.status2,
                status1:false,
                status3:false  
            }));
            console.log('status2:'+this.state.status2);
                
        }else if(getvalues=="3"){
            this.setState(prevState=>({ 
                status3:!prevState.status3  ,
                status1:false,
                status2:false  
            }));
            console.log('status3:'+this.state.status3)
        }
        else{
            console.log('default-status:'+getvalues);
            
        }   
    }
    min_25(){
        if(this.state.status1==true){
            this.setState(prevalue=>{return {value_status1st:(prevalue.value_status1st-25)}});
            console.log(this.state.value_status1st)
        }else{

        }
        
    }
    render(){
        return (
            <div >
                <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
                crossorigin="anonymous"/>
    
                <div>
                    <ProgressBar animated className='singleBar' id='first' striped variant="success" now={this.state.value_status1st} label={this.state.value_status1st+'%'}/>
                    <ProgressBar animated className='singleBar' id='second' striped variant="warning" now={this.state.value_status2nd} label={`${this.state.value_status2nd}%`}/>
                    <ProgressBar animated className='singleBar' id='third' striped variant="info" now={this.state.value_status3th} label={`${this.state.value_status3th}%`}/>
                </div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select"
                            onChange={this.onpick.bind(this)}
                            ref={el=>this.inputEl=el}
                            placeholder="select"
                            componentClass="select"
                            >
                        <option value="">select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        </Form.Control>
                    </Form.Group>
                    <button type='button' onClick={this.min_25.bind(this)}>-25</button>
                    <button >-10</button>
                    <button >10</button>
                    <button >25</button>
                </Form>
                
            </div>
            
        );
    }
}
export default Bar;