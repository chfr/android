/*
 
GPII Acceptance Testing for eCmobile and eCtouch
 
Copyright 2014 Omnitor
 
Licensed under the New BSD license. You may not use this file except in
compliance with this License.
 
You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

/*global require,process*/

"use strict";
var fluid = require("universal"),
    path = require("path"),
    gpii = fluid.registerNamespace("gpii");

fluid.require("./AcceptanceTests_include", require);

var testDefs = [
    {
        name: "Testing eCmobile/eCtouch settings",
        token: "omnitor4",
        settingsHandlers: {
            "gpii.settingsHandlers.XMLHandler": {
                "se.omnitor.ecmobile": [
                    {
                        "settings": {
                            "fontsize": "50",
                            "theme": "yellow-black"
                        },
                        "options" : {
                            "filename": "/sdcard/output.xml",
                            "encoding": "utf-8",
                            "xml-tag": "<?xml version='1.0' encoding='utf-8' standalone='yes' ?>",
                            "rules": {
                                "map": "map",
                                "map.string": {
                                    "transform": {
                                        "type": "fluid.transforms.arrayToObject",
                                        "inputPath": "map.string",
                                        "key": "name"
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        },
        processes: []
    }
];

gpii.acceptanceTesting.android.runTests("ecmobile_config", testDefs);
