/*
    ioBroker.vis iobroker.vis-keyboard Widget-Set

    version: "0.0.2"

    Copyright 10.2015-2016 Steffen Schorling<steffen.schorling@googlemail.com>

*/
"use strict";

// add translations for edit mode
if (vis.editMode) {
    $.extend(true, systemDictionary, {
        "myColor":         {"en": "Color",        "de": "Farbe",        "ru": "Цвет"},
        "layout":          {"en": "Layout",       "de": "Layout",       "ru": "Раскладка"},
        "wname":           {"en": "Widget name",  "de": "Widget-Name",  "ru": "Имя виджета"}
    });
}

// this code can be placed directly in iobroker.vis-keyboard.html
vis.binds.keyboard = {
    version: "0.0.2",
    showVersion: function () {
        if (vis.binds.keyboard.version) {
            console.log('Version iobroker.vis-keyboard: ' + vis.binds.keyboard.version);
            vis.binds.keyboard.version = null;
        }
    },
    layouts: {
        "de": "german-qwertz-1",
        "ru": "russian-qwerty",
        "numpad": "numpad"
    },
    _applyForWidget: function (id, layout, lang) {
        if (layout === 'numpad') {
            return num();
        }

        if ($('#' + id).hasClass('keyboard-num')) {
            num();
        } else if ($('#' + id).hasClass('keyboard-all')) {
            all();
        } else if ($('#' + id).find('input').attr('type')) {
            var type = $('#' + id).find('input').attr('type');

            if (type == 'number') {
                num();
            } else {
                all();
            }
        }

        function all() {
            $('#' + id).find('input').keyboard({
                layout: layout,
                language: lang,
                appendTo: $('#' + id).parent(),
                position: {
                    of:  window, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
                    my:  'center bottom',
                    at:  'center bottom-20',
                    at2: 'center top' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
                }
            });
        }

        function num() {
            $('#' + id).find('input').keyboard({
                layout: 'custom',
                language: lang,
                customLayout: {
                    'default': ['7 8 9', '4 5 6', '1 2 3', '{b} 0 {a}']
                },
                appendTo: $('#' + id).parent(),
                position: {
                    of:  window, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
                    my:  'center bottom',
                    at:  'center bottom-20',
                    at2: 'center top' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
                }
            });
        }
    },
    all: function (el, data, view) {
        if (!vis.editMode) {
            var layout = vis.binds.keyboard.layouts[data.layout] || undefined;
            var lang   = data.layout;
            if (lang === 'numpad') lang = vis.language;

            $(el).hide();

            // apply to yet existing widgets
            $('#visview_' + view + ' .vis-widget').each(function () {
                vis.binds.keyboard._applyForWidget($(this).attr('id'), layout, lang);
            });

            $(document).on('wid_added', function (e, id) {
                if ($('#visview_' + view + ' #' + id).length) {
                    vis.binds.keyboard._applyForWidget(id, layout, lang);
                }
            });
        }
    },
    one: function (el, data, view) {
        if (!vis.editMode) {
            var layout = vis.binds.keyboard.layouts[data.layout] || undefined;
            var lang   = data.layout;
            if (lang === 'numpad') lang = vis.language;
            var widget = data.wname;

            $(el).hide();
            // apply to widget if yet exists
            $('#' + widget).each(function () {
                vis.binds.keyboard._applyForWidget($(this).attr('id'), layout, lang);
            });

            $(document).on('wid_added', function (e, id) {
                if (id == widget) {
                    vis.binds.keyboard._applyForWidget(id, layout, lang);
                }
            });

        }
    }
};
	
vis.binds.keyboard.showVersion();