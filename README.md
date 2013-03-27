backbone-jeditable
==================

jquery jeditable plugin in backbone.js and tweeter bootstrap

This plugin is just the convertion of https://github.com/tuupola/jquery_jeditable into backbone js.
Author: https://github.com/tuupola

Documentation
==================

## Include "jquery.jeditable.js" in the index.html

```
<script src="js/jeditable/jquery.jeditable.js"></script>
```

## Copy "jquery.jeditable.js" inside your /path/to/your/js/

you can download this file from
```

https://github.com/bikashrai/backbone-jeditable/blob/master/js/jeditable/jquery.jeditable.js
```

## template file

```

<div>

    <p>You might also want to check <a href="http://10.0.14.134/backbone-jeditable/" target="_blank">custom inputs demo</a>.

    <h2>Normal textarea</h2>

    <p class="editable_textarea" id="paragraph_1">Text area contents..</p>

    <h2>Inlined select</h2>
    <p><b class="editable_select" id="select_1" style="display: inline"> inline select</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <b class="editable_select_json" id="select_2" style="display: inline"> <?php print file_get_contents($url . 'load.php?id=select_2') ?></b> euismod tincidunt ut laoreet dolore magna aliquam erat volutp</p>

    <h2>Textile renderer</h2>
    <div class="editable_textile" id="paragraph_2">Text Inline Render</div>

    <h2>Different events</h2>
    <p>
        <b class="click" style="display: inline">Click me if you dare!</b></> or maybe you should
        <b class="dblclick" style="display: inline">doubleclick</b> instead? Really lazy people can just
        <b class="mouseover" style="display: inline">mouseover me</b>...
    </p>

</div>
```

## Add events for each class selectors in the view file

```

events: {
        'click .editable_textarea': 'editTextarea',
        'click .editable_select': 'editSelect',
        'click .editable_textile': 'editTextile',
        'click .click': 'editClick',
        'dblclick .dblclick': 'editDblClick',
        'mouseover .mouseover': 'editMouseOver'

    }
```

## Define the event handlers

```

editTextarea: function () {
        $(".editable_textarea").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            type   : 'textarea',
            submitdata: { _method: "put" },
            select : true,
            submit : 'OK',
            cancel : 'cancel',
            cssclass : "editable"
        });
    },

    editSelect: function () {
        $(".editable_select").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            data   : "{'Lorem ipsum':'Lorem ipsum','Ipsum dolor':'Ipsum dolor','Dolor sit':'Dolor sit'}",
            type   : "select",
            submit : "OK",
            style  : "inherit",
            submitdata : function() {
                return {id : 2};
            }
        });
    },

    editTextile: function () {
        $(".editable_textile").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            loadurl   : appConfig.host+"/"+appConfig.project+"/README.md",
            type      : "textarea",
            submit    : "OK",
            cancel    : "Cancel",
            tooltip   : "Click to edit..."
        });
    },

    editClick: function () {
        $(".click").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Click to edit...",
            style  : "inherit"
        });
    },

    editDblClick: function () {
        $(".dblclick").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Doubleclick to edit...",
            event     : "dblclick",
            style  : "inherit"
        });
    },

    editMouseOver: function () {
        $(".mouseover").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Move mouseover to edit...",
            event     : "mouseover",
            style  : "inherit"
        });
    }
    ```
