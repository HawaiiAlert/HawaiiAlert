import { Session } from 'meteor/session';

class TextDevice {
  constructor(){
    this.message = "";
  }
  setMessage(message){
    this.message = message;
  }
  send(drill){
    console.log(drill);
    console.log(this.message);
  }
}

export default TextDevice;
