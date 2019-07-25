import React from 'react';
import './style.css';
import axios from 'axios';
const idreg = RegExp(/^[0-9]{3,}$/);
const namereg = RegExp(/^[A-Za-z ]{3,}$/);
const urlreg = RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
const emailreg = RegExp(/^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      namePI : '',
      emailPI:'',
      title:'',
      funding:'',
      url:'',
      type:'',
      coPI:'',
      amount:'',
      reviewsubdate:'',
      propsubdate:'',
      comments:'',
      noofattempts:'',
      
      errors: {
      namePI : '',
      emailPI:'',
      title:'',
      funding:'',
      url:'',
      type:'',
      coPI:'',
      amount:'',
      reviewsubdate:'',
      propsubdate:'',
      comments:'',
      noofattempts:''

      }
    }
  }

  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
   
    

  }
  

  handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    let errors = this.state.errors;
    switch (name) {
        case 'emailPI':
          errors.emailPI = emailreg.test(value) ? '':'enter correct email ID';
          break;
        case 'namePI':
            errors.namePI= namereg.test(value)? '' : 'name should contain atleast 3 chars and only alphabets';
            break;
        case 'title' :
            errors.title = namereg.test(value)?'':'name should contain atleast 3 chars and only alphabets';
            break;
        case 'funding' :
            errors.funding = namereg.test(value)?'':'name should contain atleast 3 chars and only alphabets';
            break;
        case 'url':
            errors.url = urlreg.test(value) ? '':'enter correct URL';
            break;
        case 'type':
            errors.type = namereg.test(value) ? '':'enter correct ID';
            break;


        default:
            break;

    }
    this.setState({errors,[name]:value});
    //console.log(this.state);

}
handleSubmit = (event) => {
    //event.preventDefault();
    if(validateForm(this.state.errors)) {
        console.info('Valid Form',this.state);
        try {
          const response = (axios.post('http://localhost:4000', { posted_data: JSON.stringify(this.state) }));
          //console.log(' Returned data:', response.then(result => {return result.data}));

        } catch (e) {
          console.log(` Axios request failed: ${e}`);
        }
        

        
    }else {
        console.log('Invalid Form');
        alert("please check the form correctly")
    }
}



render () {
  const {errors} = this.state;
  return (
    <div>
      <header className="App-header">
        <h1>
          Proposal Submission Form
        </h1>
       </header>
       <body>
         <form onSubmit={this.handleSubmit} className="form-style-2" method="POST" action="http://18.191.188.174:4000">
           <p>hi user, this is a dummy message. TQ</p>
           <p><span className="required">*</span>Required</p>
           <div>
           <label className="form-style-2 label" htmlFor="namePI">
            1. Name of the PI in Amrita<span className="required">*</span> <br/>
            <input type="text" name="namePI" className="input-field" value={this.state.value} placeholder="Enter your name here" onChange={this.handleChange}></input>
            {errors.namePI.length > 0 && 
                <span className='error'>{errors.namePI}</span>} 
           </label>
           </div>

           <div>
           <label className="form-style-2 label" htmlFor="emailPI">
            2. Email of the PI in Amrita <span className="required">*</span><br/>
            <input type="text" name="emailPI" className="input-field" value={this.state.value} placeholder="Enter your email here" onChange={this.handleChange}></input>
            {errors.emailPI.length > 0 && 
                <span className='error'>{errors.emailPI}</span>} 
           </label>
           </div>

           <div>
           <label className="form-style-2 label" htmlFor="title">
            3. Title of the project <span className="required">*</span> <br/>
            <input type="text" name="title" className="input-field" value={this.state.value} placeholder="Enter your answer here" onChange={this.handleChange}></input>
            {errors.title.length > 0 && 
                <span className='error'>{errors.title}</span>} 
           </label>
           </div>

           <div>
           <label className="form-style-2 label" htmlFor="funding">
            4. Funding Agency <span className="required">*</span><br/>
            <input type="text" name="funding" className="input-field" value={this.state.value} placeholder="Enter your answer here" onChange={this.handleChange}></input>
            {errors.funding.length > 0 && 
                <span className='error'>{errors.funding}</span>} 
           </label>
           </div>

           <div>
           <label className="form-style-2 label" htmlFor="url">
            5. URL of the funding agency<span className="required">*</span> <br/>
            <input type="text" name="url" className="input-field" value={this.state.value} placeholder="Enter your answer here" onChange={this.handleChange}></input>
            {errors.url.length > 0 && 
                <span className='error'>{errors.url}</span>} 
           </label>
           </div>

           <div>
           <label className="form-style-2 label" htmlFor="type">
            6. Type of CALL<span className="required">*</span><br/>(international, Travel grant) <br/>
            <input type="text" name="type" className="input-field" value={this.state.value} placeholder="Enter your answer here" onChange={this.handleChange}></input>
            {errors.type.length > 0 && 
                <span className='error'>{errors.type}</span>} 
           </label>
           </div>

           <div>
           <label className="form-style-2 label" htmlFor="coPI">
            7.Co-PIs<span className="required">*</span> <br/>
            <input type="text" name="coPI" className="input-field" value={this.state.value} placeholder="Enter your answer here" onChange={this.handleChange}></input>
            {errors.coPI.length > 0 && 
                <span className='error'>{errors.coPI}</span>} 
           </label>
           </div>

           <div>
             <input type="submit" className="submit"></input>
           </div>
         </form>
         </body>
    </div>
  );
}
}

export default App;
