
var prompt = require('prompt-sync')();
var ipAddress = prompt("Enter an ip address")


var validIPAddress = function(ip) {
    if(ip.indexOf('.') > 0)
        return validateIPv4(ip) ? 'IPv4' : 'Neither';
    else
        return validateIPv6(ip) ? 'IPv6' : 'Neither';
};

var validateIPv4 = function(ip) {
    var strs = ip.split('.');
    if(strs.length !== 4) return false;
    for(var str of strs) {
        if(str.length === 0) return false;
        if(str.match(/[^0-9]/)) return false;
        if(str.length > 1 && str.charAt(0) === '0') return false;
        if((+str) > 255) return false;
    }
    return true;
};

var validateIPv6 = function(ip) {
    var strs = ip.split(':');
    if(strs.length !== 8) return false;
    for(var str of strs) {
        if(str.length === 0) return false;
        if(str.length > 4) return false;
        if(str.match(/[^0-9a-fA-F]/g)) return false;
    }
    return true;
};

console.log(validIPAddress(ipAddress))