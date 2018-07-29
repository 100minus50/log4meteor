// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by log4meteor.js.
import { name as packageName } from "meteor/100minus50:log4meteor";

// Write your tests here!
// Here is an example.
Tinytest.add('log4meteor - example', function (test) {
  test.equal(packageName, "log4meteor");
});
