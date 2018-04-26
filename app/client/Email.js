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
    send(addresses, message, alert){
        for(var i = 0; i < addresses.length; i++){
            Meteor.call(
                'sendEmail',
                addresses[i].email,
                "This is " + this.mode,
                message + "\n" + alert
            );
        }
        //console.log(message);
        console.log("This is " + this.mode);
        //console.log(alert);
    }
}
export {Email}
