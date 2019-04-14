import React,{Component} from 'react';
import ReactDom from 'react-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './bar.css';
import {Form,FormGroup, FormControl} from 'react-bootstrap'



class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            value_status1st:this.props.value_status1st,
            value_status2nd:this.props.value_status2nd,
            value_status3th:this.props.value_status3th,

            status1:false,
            status2:false,
            status3:false,

            texts:this.props.texts,

            

            error: null,
            isLoaded: false,
            items: []
        }
       this.min_25=this.min_25.bind(this);
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
            this.setState(prevState=>({ 
                status3:false,
                status1:false,
                status2:false  
            }));
            console.log('default-status:'+getvalues);
            
        }   
    }
    
    min_25(btn1){
            if(this.state.status1==true){
                if(this.state.value_status1st>=btn1&&this.state.value_status1st-btn1<150){
                   
                    this.setState(
                    
                        prevalue=>{return {value_status1st:(prevalue.value_status1st-btn1)}}
                    );
                    
                    
                    
                }else if(this.state.value_status1st-btn1>=150){
                    this.setState(prevalue=>{return {value_status1st:150}});
                }
                else{
                    this.setState(prevalue=>{return {value_status1st:0}});
                }
                    
                
                console.log(this.state.value_status1st)
            }else if(this.state.status2==true){
                if(this.state.value_status2nd>=btn1&&this.state.value_status2nd-btn1<150){
                    this.setState(prevalue=>{return {value_status2nd:(prevalue.value_status2nd-btn1)}});
                }else if(this.state.value_status2nd-btn1>=150){
                    this.setState(prevalue=>{return {value_status2nd:150}});
                }
                else{
                    this.setState(prevalue=>{return {value_status2nd:0}});
                }
                    
                
                console.log(this.state.value_status2nd)
            }else if(this.state.status3==true){
                if(this.state.value_status3th>=btn1&&this.state.value_status3th-btn1<150){
                    this.setState(prevalue=>{return {value_status3th:(prevalue.value_status3th-btn1)}});
                }else if(this.state.value_status3th-btn1>=150){
                    this.setState(prevalue=>{return {value_status3th:150}});
                }
                else{
                    this.setState(prevalue=>{return {value_status3th:0}});
                }

               
                    
                
                console.log(this.state.value_status3th)
            }
        
    }

   
    render(){
        const updatestyles={
            width:this.state.value_status1st
        }
        let texts= this.state.texts;
        let btn1, btn2, btn3,btn4 ='';
        // texts.map(text=>(
        //     btn1 =text.buttons[0],
        //     btn2 = text.buttons[1],
        //     btn3 = text.buttons[2],
        //     btn4 = text.buttons[3]
        // ))

        console.log('texts:'+texts);
        console.log('btn1:'+btn1)
        console.log('type:'+typeof(btn1));
        if(btn1<0||btn2<0||btn3<0||btn4<0){
            btn1=(-btn1);
            btn2=(-btn2);
            btn3=(-btn3);
            btn4=(-btn4); 
        }

        return (
            <div >
                <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
                crossorigin="anonymous"/>
                <div className='progress-bar'>
                    
                    <ProgressBar animated className='singleBar progressbar' id='first' striped variant="success"  now={parseInt(this.state.value_status1st)} label={this.state.value_status1st+'%'}/> 
                    <ProgressBar animated className='singleBar progressbar' id='second' striped variant="warning" now={this.state.value_status2nd} label={`${this.state.value_status2nd}%`}/>
                    <ProgressBar animated className='singleBar progressbar' id='third' striped variant="info" now={this.state.value_status3th} label={`${this.state.value_status3th}%`}/>
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
                    <p>here is :{texts}</p>
                    <button type='button' onClick={()=>this.min_25(btn1)}>{btn1}</button>
                    <button type='button' onClick={()=>this.min_25(btn2)}>{btn2}</button>
                    <button type='button' onClick={()=>this.min_25(btn3)}>{btn3}</button>
                    <button type='button' onClick={()=>this.min_25(btn4)}>{btn4}</button>  
                </Form>
                
            </div>
            
        );
    }
}
export default Bar;