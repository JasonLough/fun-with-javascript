/*
  This is the starting point for this experiment.
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
