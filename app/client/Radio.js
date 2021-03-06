class Radio {
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
export {Radio}
