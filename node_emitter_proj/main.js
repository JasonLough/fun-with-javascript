'use strict'

/************
  This is the entry point for this experiment.
************/

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

/************
  Now go look at /node_modules/start.js
************/
