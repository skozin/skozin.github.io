require.config({paths:{underscore:"libs/underscore",jquery:"libs/jquery","jquery-wrapper":"libs/jquery-wrapper",backbone:"libs/backbone",text:"libs/text",settings:"empty:"},map:{"*":{jquery:"jquery-wrapper"},"jquery-wrapper":{jquery:"jquery"}},shim:{underscore:{exports:"_",init:function(){return this._.noConflict()}},backbone:{exports:"Backbone",deps:["underscore","jquery"],init:function(){return this.Backbone.noConflict()}}}});