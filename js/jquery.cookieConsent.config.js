
$(function () {
    $.cookieConsent({
        mode: 'tab', // Default, tab or popover
        persistence: 'heavy', // Light (hides after viewed once) or Heavy (requires user to interact/close)
        color: {
            main: '#29f', // Border & icon color
            bg: '#fff', // Background color
            popover: 'rgba(0,0,0,.3)', // Popover background color
            text: '#444' // Text color
        },
        font: '12px Tahoma, sans-serif', // Font size & family
        width: 'auto', // Width of the banner
        maxWidth: '50%', // Responsiveness
        link: {
            cookies: "http://en.wikipedia.org/wiki/HTTP_cookie", // The cookies link
            policy: "link/to/your/policy" // The cookie policy link
        },
        content: {
            // Allows you to specify the text content of the plugin, using an aray & object based syntax (explained below)
            // You can also pass in a string, eg: "<p>Read our <a href='/policy.html'>policy</a></p>"
            heading:
                ['strong', {content: 'This site uses '},
                    ['a', {href: 'http://en.wikipedia.org/wiki/HTTP_cookie', content: 'cookies.'}]
                ],
            text:
                ['p', {content: "We won't share your data with any third parties."}]
        }
    });
});