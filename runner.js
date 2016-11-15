#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('innersource-adventure');

var problems = [ 
    {title:'read innersource docs', folder:"readinnersourcedocs"}, 
    {title:'generate minimal documents', folder:"generatemindocs"}, 
    {title:'commit minimal documents', folder:"commitmindocs"}];
problems.forEach(function (prob) {
    shop.add(prob.title, function () { return require('./problems/' + prob.folder) });
});

shop.execute(process.argv.slice(2));
