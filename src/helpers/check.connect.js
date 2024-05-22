'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const _SECONDS = 10_000

const countConnect = () => {
    const numConnection = mongoose.connect.length;
    console.log(`Number of connections: ${numConnection}`);
}

// check over load
const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connect.length;
        // count cores
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // Example maximum number of connections based on number of cores
        // each core can loaded 5 connections
        const maxConnections = numCores * 5;
        
        console.log(`Active Connections: ${numConnection}`);
        // byte -> MB
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnection > maxConnections) {
            console.log(`Connection overload detected!`);
            // notify.send(...)
        }

    }, _SECONDS);
}

module.exports = {
    countConnect,
    checkOverLoad
}
