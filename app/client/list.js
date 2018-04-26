/* This is list that if you run as a script in the node.js REPL will create an array containing every possible combination of TVs. There are 240 combinations. You can get this number through using 
*  the combination formula n!/(r!*(n-r), where n is the number of items (islands) and r is how many you can choose. With 8 disasters, 2 drills, and 4 islands, the equation is below...
*  4*8*2 + (4!/(2!*(4-2))*8*2 + (4!/(3!*(4-3))*8*2 + 1*8*2 = 64 + 96 + 64 + 16 = 240.
*/

a = [];
const TV = require('./TV.js');

//Device withs one island

a.push(new TV('A Drill','Missile',['Kauai']));
a.push(new TV('A Drill','Hurricane',['Kauai']));
a.push(new TV('A Drill','Flooding',['Kauai']));
a.push(new TV('A Drill','Tsunami',['Kauai']));
a.push(new TV('A Drill','Wildfire',['Kauai']));
a.push(new TV('A Drill','Earthquake',['Kauai']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai']));
a.push(new TV('A Drill','Meteor',['Kauai']));

a.push(new TV('A Drill','Missile',['Oahu']));
a.push(new TV('A Drill','Hurricane',['Oahu']));
a.push(new TV('A Drill','Flooding',['Oahu']));
a.push(new TV('A Drill','Tsunami',['Oahu']));
a.push(new TV('A Drill','Wildfire',['Oahu']));
a.push(new TV('A Drill','Earthquake',['Oahu']));
a.push(new TV('A Drill','Terrorist Attack',['Oahu']));
a.push(new TV('A Drill','Meteor',['Oahu']));

a.push(new TV('A Drill','Missile',['Maui']));
a.push(new TV('A Drill','Hurricane',['Maui']));
a.push(new TV('A Drill','Flooding',['Maui']));
a.push(new TV('A Drill','Tsunami',['Maui']));
a.push(new TV('A Drill','Wildfire',['Maui']));
a.push(new TV('A Drill','Earthquake',['Maui']));
a.push(new TV('A Drill','Terrorist Attack',['Maui']));
a.push(new TV('A Drill','Meteor',['Maui']));

a.push(new TV('A Drill','Missile',['Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Kauai']));
a.push(new TV('Not a Drill','Hurricane',['Kauai']));
a.push(new TV('Not a Drill','Flooding',['Kauai']));
a.push(new TV('Not a Drill','Tsunami',['Kauai']));
a.push(new TV('Not a Drill','Wildfire',['Kauai']));
a.push(new TV('Not a Drill','Earthquake',['Kauai']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai']));
a.push(new TV('Not a Drill','Meteor',['Kauai']));

a.push(new TV('Not a Drill','Missile',['Oahu']));
a.push(new TV('Not a Drill','Hurricane',['Oahu']));
a.push(new TV('Not a Drill','Flooding',['Oahu']));
a.push(new TV('Not a Drill','Tsunami',['Oahu']));
a.push(new TV('Not a Drill','Wildfire',['Oahu']));
a.push(new TV('Not a Drill','Earthquake',['Oahu']));
a.push(new TV('Not a Drill','Terrorist Attack',['Oahu']));
a.push(new TV('Not a Drill','Meteor',['Oahu']));

a.push(new TV('Not a Drill','Missile',['Maui']));
a.push(new TV('Not a Drill','Hurricane',['Maui']));
a.push(new TV('Not a Drill','Flooding',['Maui']));
a.push(new TV('Not a Drill','Tsunami',['Maui']));
a.push(new TV('Not a Drill','Wildfire',['Maui']));
a.push(new TV('Not a Drill','Earthquake',['Maui']));
a.push(new TV('Not a Drill','Terrorist Attack',['Maui']));
a.push(new TV('Not a Drill','Meteor',['Maui']));

a.push(new TV('Not a Drill','Missile',['Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Hawaii Island']));


//Begin devices with two islands.

a.push(new TV('A Drill','Missile',['Kauai','Oahu']));
a.push(new TV('A Drill','Hurricane',['Kauai','Oahu']));
a.push(new TV('A Drill','Flooding',['Kauai','Oahu']));
a.push(new TV('A Drill','Tsunami',['Kauai','Oahu']));
a.push(new TV('A Drill','Wildfire',['Kauai','Oahu']));
a.push(new TV('A Drill','Earthquake',['Kauai','Oahu']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai','Oahu']));
a.push(new TV('A Drill','Meteor',['Kauai','Oahu']));

a.push(new TV('Not a Drill','Missile',['Kauai','Oahu']));
a.push(new TV('Not a Drill','Hurricane',['Kauai','Oahu']));
a.push(new TV('Not a Drill','Flooding',['Kauai','Oahu']));
a.push(new TV('Not a Drill','Tsunami',['Kauai','Oahu']));
a.push(new TV('Not a Drill','Wildfire',['Kauai','Oahu']));
a.push(new TV('Not a Drill','Earthquake',['Kauai','Oahu']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai','Oahu']));
a.push(new TV('Not a Drill','Meteor',['Kauai','Oahu']));

a.push(new TV('A Drill','Missile',['Kauai','Maui']));
a.push(new TV('A Drill','Hurricane',['Kauai','Maui']));
a.push(new TV('A Drill','Flooding',['Kauai','Maui']));
a.push(new TV('A Drill','Tsunami',['Kauai','Maui']));
a.push(new TV('A Drill','Wildfire',['Kauai','Maui']));
a.push(new TV('A Drill','Earthquake',['Kauai','Maui']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai','Maui']));
a.push(new TV('A Drill','Meteor',['Kauai','Maui']));

a.push(new TV('Not a Drill','Missile',['Kauai','Maui']));
a.push(new TV('Not a Drill','Hurricane',['Kauai','Maui']));
a.push(new TV('Not a Drill','Flooding',['Kauai','Maui']));
a.push(new TV('Not a Drill','Tsunami',['Kauai','Maui']));
a.push(new TV('Not a Drill','Wildfire',['Kauai','Maui']));
a.push(new TV('Not a Drill','Earthquake',['Kauai','Maui']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai','Maui']));
a.push(new TV('Not a Drill','Meteor',['Kauai','Maui']));

a.push(new TV('A Drill','Missile',['Kauai','Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Kauai','Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Kauai','Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Kauai','Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Kauai','Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Kauai','Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai','Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Kauai','Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Kauai','Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Kauai','Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Kauai','Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Kauai','Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Kauai','Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Kauai','Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai','Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Kauai','Hawaii Island']));

a.push(new TV('A Drill','Missile',['Oahu','Maui']));
a.push(new TV('A Drill','Hurricane',['Oahu','Maui']));
a.push(new TV('A Drill','Flooding',['Oahu','Maui']));
a.push(new TV('A Drill','Tsunami',['Oahu','Maui']));
a.push(new TV('A Drill','Wildfire',['Oahu','Maui']));
a.push(new TV('A Drill','Earthquake',['Oahu','Maui']));
a.push(new TV('A Drill','Terrorist Attack',['Oahu','Maui']));
a.push(new TV('A Drill','Meteor',['Oahu','Maui']));

a.push(new TV('Not a Drill','Missile',['Oahu','Maui']));
a.push(new TV('Not a Drill','Hurricane',['Oahu','Maui']));
a.push(new TV('Not a Drill','Flooding',['Oahu','Maui']));
a.push(new TV('Not a Drill','Tsunami',['Oahu','Maui']));
a.push(new TV('Not a Drill','Wildfire',['Oahu','Maui']));
a.push(new TV('Not a Drill','Earthquake',['Oahu','Maui']));
a.push(new TV('Not a Drill','Terrorist Attack',['Oahu','Maui']));
a.push(new TV('Not a Drill','Meteor',['Oahu','Maui']));

a.push(new TV('A Drill','Missile',['Oahu','Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Oahu','Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Oahu','Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Oahu','Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Oahu','Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Oahu','Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Oahu','Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Oahu','Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Oahu','Hawaii Island']));

a.push(new TV('A Drill','Missile',['Maui','Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Maui','Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Maui','Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Maui','Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Maui','Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Maui','Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Maui','Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Maui','Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Maui','Hawaii Island']));

//Begin devices with three islands.

a.push(new TV('A Drill','Missile',['Kauai','Oahu','Maui']));
a.push(new TV('A Drill','Hurricane',['Kauai','Oahu','Maui']));
a.push(new TV('A Drill','Flooding',['Kauai','Oahu','Maui']));
a.push(new TV('A Drill','Tsunami',['Kauai','Oahu','Maui']));
a.push(new TV('A Drill','Wildfire',['Kauai','Oahu','Maui']));
a.push(new TV('A Drill','Earthquake',['Kauai','Oahu','Maui']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai','Oahu','Maui']));
a.push(new TV('A Drill','Meteor',['Kauai','Oahu','Maui']));

a.push(new TV('Not a Drill','Missile',['Kauai','Oahu','Maui']));
a.push(new TV('Not a Drill','Hurricane',['Kauai','Oahu','Maui']));
a.push(new TV('Not a Drill','Flooding',['Kauai','Oahu','Maui']));
a.push(new TV('Not a Drill','Tsunami',['Kauai','Oahu','Maui']));
a.push(new TV('Not a Drill','Wildfire',['Kauai','Oahu','Maui']));
a.push(new TV('Not a Drill','Earthquake',['Kauai','Oahu','Maui']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai','Oahu','Maui']));
a.push(new TV('Not a Drill','Meteor',['Kauai','Oahu','Maui']));

a.push(new TV('A Drill','Missile',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Kauai','Oahu','Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai','Oahu','Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Kauai','Oahu','Hawaii Island']));

a.push(new TV('A Drill','Missile',['Kauai','Maui','Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Kauai','Maui','Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Kauai','Maui','Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Kauai','Maui','Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Kauai','Maui','Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Kauai','Maui','Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai','Maui','Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Kauai','Maui','Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Kauai','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Kauai','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Kauai','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Kauai','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Kauai','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Kauai','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Kauai','Maui','Hawaii Island']));

a.push(new TV('A Drill','Missile',['Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Oahu','Maui','Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Oahu','Maui','Hawaii Island']));

//Begin devices with four islands.

a.push(new TV('A Drill','Missile',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Hurricane',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Flooding',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Tsunami',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Wildfire',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Earthquake',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Terrorist Attack',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('A Drill','Meteor',['Kauai','Oahu','Maui','Hawaii Island']));

a.push(new TV('Not a Drill','Missile',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Hurricane',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Flooding',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Tsunami',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Wildfire',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Earthquake',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Terrorist Attack',['Kauai','Oahu','Maui','Hawaii Island']));
a.push(new TV('Not a Drill','Meteor',['Kauai','Oahu','Maui','Hawaii Island']));

