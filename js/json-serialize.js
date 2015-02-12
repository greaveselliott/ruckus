/*
* json-serialize.js
* This snippet adds 2 functions to the JSON object prototype,
* enabling the serialization and de-serialization of the JSON objects and arrays
*
* Author: Craig Buckler
* Snippet found at: http://www.sitepoint.com/javascript-json-serialization/
*
* License: MIT
*/

// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function (obj) {

    var t = typeof (obj);
    if (t != "object" || obj === null) {

        // simple data type
        if (t == "string") obj = '"'+obj+'"';
        return String(obj);

    }
    else {

        // recourse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
            v = obj[n]; t = typeof(v);

            if (t == "string") v = '"'+v+'"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);

            json.push((arr ? "" : '"' + n + '":') + String(v));
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

// implement JSON.parse de-serialization
JSON.parse = JSON.parse || function (str) {
    if (str === "") str = '""';
    eval("var p=" + str + ";");
    return p;
};