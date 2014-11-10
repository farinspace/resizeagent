jQuery.resizeagent
===========
 Intuitive `window.resize` events, includes `tick` (e.g. `resize`), `start` and `finish`.


```
jQuery(document).ready(function($){

    $.resizeagent.wait = 750;

    $.resizeagent.on('tick', function(){
        console.log('tick-A');
    });

    $(window).on('resize', function(){
        console.log('tick-B');
    });

    $.resizeagent.on('start', function(){
        console.log('start-1');
    });

    $.resizeagent.on('start.foo', function(){
        console.log('start-2');
    });

    $.resizeagent.off('start.foo');

    $.resizeagent.on('finish', function(){
        console.log('finish');
    });
});
```
