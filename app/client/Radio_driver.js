import { Radio, getMode } from './Radio.js';

class Radio_driver {
	constructor() {
	}
	open(device) { 
		return "device open";
	}
	test(device){
		if (device.getMode() === "A Drill") {
			return "Test Complete";
		}
		else {
			return "Device Fail";
		}
	}
	use(device) {
		if (device.getMode() === "Not a Drill") {
			return "Real Alert Complete";
		}
		else {
			return "Device Fail";
		}
	}
}

export {Radio_driver}
