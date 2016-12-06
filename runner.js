#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('innersourceadventure');

var problems = [ 
    {title:'Generate Minimal Documents', folder:"generatemindocs"},
    {title:'Key Data in Main Document', folder:"keydatainmaindoc"},
    {title:'InnerSource Tenets', folder:"istenets"},
    {title:'Discussion', folder:"discussion"}];
problems.forEach(function (prob) {
    shop.add(prob.title, function () { return require('./problems/' + prob.folder) });
});

shop.execute(process.argv.slice(2));
