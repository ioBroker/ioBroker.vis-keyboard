/*
    ioBroker.vis iobroker.vis-keyboard Widget-Set

    version: "0.0.1"

    Copyright 10.2015-2016 Steffen Schorling<steffen.schorling@googlemail.com>

*/
"use strict";

// add translations for edit mode
if (vis.editMode) {
    $.extend(true, systemDictionary, {
        "myColor":          {"en": "myColor",       "de": "mainColor",  "ru": "Мой цвет"},

    });
}

// add translations for non-edit mode
$.extend(true, systemDictionary, {
    "Instance":  {"en": "Instance", "de": "Instanz", "ru": "Инстанция"}
});

// this code can be placed directly in iobroker.vis-keyboard.html
vis.binds.iobroker.vis_keyboard = {
    version: "0.0.1",
    showVersion: function () {
        if (vis.binds.iobroker.vis_keyboard.version) {
            console.log('Version iobroker.vis-keyboard: ' + vis.binds.iobroker.vis_keyboard.version);
            vis.binds.iobroker.vis_keyboard.version = null;
        }
    },


    all: function (el, data) {

        $(document).on("wid_added", function (e, id) {
            if ($("#" + id).hasClass("vkb_num")) {
                num()
            } else if ($("#" + id).hasClass("vkb_all")) {
                all()
            } else if ($("#" + id).find("input").attr("type")) {
                var type = $("#" + id).find("input").attr("type")

                if (type == "number") {
                    num()
                } else {
                    all()
                }

            }

            function all() {
                $("#" + id).find("input").keyboard({

//                        layout : 'custom',
//                        customLayout: {
//                            'default': ['7 8 9', '4 5 6','1 2 3', '{b} 0 {a}'],
//                        },
                    appendTo: $("#" + id).parent(),
                    position: {
                        of: window, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
                        my: 'center bottom',
                        at: 'center bottom-20',
                        at2: 'center top' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
                    }

                })
            }

            function num() {
                $("#" + id).find("input").keyboard({

                    layout: 'custom',
                    customLayout: {
                        'default': ['7 8 9', '4 5 6', '1 2 3', '{b} 0 {a}'],
                    },
                    appendTo: $("#" + id).parent(),
                    position: {
                        of: window, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
                        my: 'center bottom',
                        at: 'center bottom-20',
                        at2: 'center top' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
                    }

                })
            }
        })


    }

};
	
vis.binds.iobroker.vis_keyboard.showVersion();