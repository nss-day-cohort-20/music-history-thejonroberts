'use strict';

window.jQuery = require("jquery");
window.Tether = require("tether");
require("../lib/node_modules/bootstrap/dist/js/bootstrap");

let $ = require('jquery');
let factory = require('./song-factory');
let songController = require('./song-controller');

require('./user-factory');

//load songs and load song list to dom


//run view controller after dom is loaded
require('./view-controller');
