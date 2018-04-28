/* README: Depending on whether you're running the application of test you need to make a small change to this file before running. If you are running the APPLICATION, you uncomment the very last line
*          that says "export { TV }" and on the first line you delete "module.exports =", so that the first line just says "class TV {". If you are running the TEST, you do the opposite and comment out
*          the very last line that says "export { TV }" and add "module.exports = " to the first line, so that it says "module.exports = class TV {". This is because the node.js REPL that I used to 
*          conduct the test uses different syntax than meteor. If you don't do this, whatever you're trying to do will not work.
*/

module.exports = class TV {
  constructor(mode, disaster, locations) {
    this.mode = mode;
    this.disaster = disaster;
    this.locations = locations;
  }
  getMode() {
    return this.mode;
  }
  getDisaster() {
    return this.disaster;
  }
  getLocations(){
    return this.locations;
  }
  setMode(mode) {
    this.mode = mode;
  }
  setDisaster(disaster) {
    this.disaster = disaster;
  }
  setLocations(locations){
    this.locations = locations;
  }
  send(message, alert){
    console.log(message);
    console.log("This is " + this.mode);
    console.log(alert);
  }
}
//export { TV }
