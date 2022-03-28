var page = require('webpage').create(), system = require('system'), address, output, size;

if (system.args.length < 3 || system.args.length > 5) {
    phantom.exit(1);
} else {
    address = system.args[1];
    output = system.args[2];
    
    page.viewportSize = {
        width : 1320,
        height : 150
    };
    
    page.open(address, function (status) {
        console.log(address);
        if (status === 'success') {
            console.log('page opened...')
            // if (page.injectJs('timeline.js')) {
            //     console.log('js injected...')
            var timeline = page.evaluate(function () {                
                return document.getElementById('container').getBoundingClientRect();
            });
            
            var rect = page.evaluate(function () {                
                return document.getElementsByTagName('svg')[0].getBoundingClientRect();
            });

            page.viewportSize = {
                width : rect.width,
                height : rect.height
            };
            console.log(rect.width);
            console.log(rect.height);

            page.clipRect = {
                top: timeline.top,
                left: timeline.left,
                width: timeline.width,
                height: timeline.height
            };
            page.render(output);
            page.close();
            console.log('done...');

            // }
            // else {
            //     console.log('js injecting failed...')
            // }
        }
        else {
            console.log('page opening failed...')
        }
        phantom.exit();
    });
}