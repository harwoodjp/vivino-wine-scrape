# JSON Endpoint from Web Scrape

Chrome's [puppeteer](https://github.com/GoogleChrome/puppeteer) project uses the Chrome Headless API to make headless automation and web scraping easy.


I tested it out recently, writing a simple script that scrapes my [Vivino]() [profile]() for my most recently added wines. I'll detail the script here but, first, I'll provide some context.

## Scraping JS-rendered Pages

Scraping a static site is easy. All you really need is [curl](https://curl.haxx.se/docs/manpage.html) and a library for HTML parsing.

Scraping SPAs or, more broadly, JavaScript-rendered pages, on other hand, requires the overhead of a browser runtime. SPAs, when client-rendered, are appended to the DOM *after* the intial HTML document has loaded.

