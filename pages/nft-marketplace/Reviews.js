import React, {useState} from 'react';

//mapp to a state
function Reviews (){
  const [state, setState] = useState('');
  
  const handleChange= (event) => {
    this.setState({content: event.target.value});
  }

  const handleSubmit= (event) => {
    alert("Your review was successfully submitted: "+ this.state.content);
    event.preventDefault();
  }

    return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea 
             rows="20"
             cols="80"
             value={this.state.content}
             onChange={this.handleChange}
            />
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
}


 /*does not work check video instead + do front of karaoke nhar thnin perhaps deploy ml model or do another one with spotify + 
 do<nload the spotify mls and test them maa spotify of firas, but gotta deploy em :/ nhar thnin
*/
export default Reviews;