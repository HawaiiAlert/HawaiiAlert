import { Session } from 'meteor/session';

class TextDevice {
  constructor(device){
    try{
      this.message = device.message;
    }catch(error){
      this.message = "";
    }
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
