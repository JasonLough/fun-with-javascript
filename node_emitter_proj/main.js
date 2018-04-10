/*
  This is the starting point for this experiment.
  
  Objectives:
  Understand how to create, import, and use our own package in node_modules
  Create a simple custom dynamic event handler using Nodes events.EventEmitter
  Create an emitter with chainable functions so you can do stuff like:
      a.b().b().b() etc...
  
*/

'use strict'

const eventSubscriber = require('eventSubscriber').eventSubscriber,
      c = console.log

eventSubscriber
  .subscribe('castLine', function() {c('You cast your fishing line...')})
  .subscribe('feelTugOnLine', function() {c('Something nibbles at the line...')})
  .subscribe('reelIn', function() {c('You begin reeling in the line...')})
  .subscribe('omg', function() {c('Holy carp, its the Loch Ness Monster!')})

eventSubscriber
  .emit('castLine')
  .emit('castLine')
  .emit('feelTugOnLine')
  .emit('reelIn')
  .emit('omg')
