const plausibleSnippet = document.createElement('script');
plausibleSnippet.defer = true;
plausibleSnippet.setAttribute('data-domain', 'thinkwong.com');
plausibleSnippet.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(plausibleSnippet);

const beehiivSnippet = document.createElement('script');
beehiivSnippet.src = 'https://embeds.beehiiv.com/attribution.js'
beehiivSnippet.async = true;
beehiivSnippet.type = 'text/javascript'
document.body.appendChild(beehiivSnippet);

