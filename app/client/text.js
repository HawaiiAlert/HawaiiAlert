class Text {
  constructor(){
    this.message = "";
  }
  setMessage(message){
    this.message = message;
  }
  send(drill){
    console.log("Text Alert");
    console.log("This is " + drill);
    console.log(this.message);
  }
}
export {Text}
