class Email {

    //Meteor.call(
    //     'sendEmail',
    //     'Alice <alice@example.com>',
    //     'bob@example.com',
    //     'Hello from Meteor!',
    //     'This is a test of Email.send.'
    // );

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
        Meteor.call(
            'sendEmail',
            'hawaii alert <ics414hawaiialert@gmail.com>',
            'ics414hawaiialert@gmail.com',
            "This is " + this.mode,
            message + "\n" + alert
        );
        //console.log(message);
        console.log("This is " + this.mode);
        //console.log(alert);
    }
}
export {Email}
