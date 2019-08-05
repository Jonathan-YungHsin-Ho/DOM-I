const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Nav Bar
const navs = document.querySelectorAll('nav a');
navs.forEach((element, index) => {
  element.textContent = Object.values(siteContent.nav)[index];
  element.style.color = 'green';
});

// New Content
const navBar = document.querySelector('nav');

const firstLink = document.createElement('a');
firstLink.textContent = 'First';
navBar.prepend(firstLink);

const lastLink = document.createElement('a');
lastLink.textContent = 'Last';
navBar.append(lastLink);

const updatedNavs = document.querySelectorAll('nav a');
updatedNavs.forEach(element => (element.style.color = 'green'));

// Images
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// CTA
const mainHeader = document.querySelector('h1');
mainHeader.innerText = siteContent.cta.h1.split(' ').join('\n');

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

// Main Content //

// Top Content
const topHeader1 = document.querySelector(
  '.top-content .text-content:first-of-type h4',
);
const topContent1 = document.querySelector(
  '.top-content .text-content:first-of-type p',
);

topHeader1.textContent = siteContent['main-content']['features-h4'];
topContent1.textContent = siteContent['main-content']['features-content'];

const topHeader2 = document.querySelector(
  '.top-content .text-content:last-of-type h4',
);
const topContent2 = document.querySelector(
  '.top-content .text-content:last-of-type p',
);

topHeader2.textContent = siteContent['main-content']['about-h4'];
topContent2.textContent = siteContent['main-content']['about-content'];

// Bottom Content
const bottomHeader1 = document.querySelector(
  '.bottom-content .text-content:first-of-type h4',
);
const bottomContent1 = document.querySelector(
  '.bottom-content .text-content:first-of-type p',
);

bottomHeader1.textContent = siteContent['main-content']['services-h4'];
bottomContent1.textContent = siteContent['main-content']['services-content'];

const bottomHeader2 = document.querySelector(
  '.bottom-content .text-content:nth-of-type(2) h4',
);
const bottomContent2 = document.querySelector(
  '.bottom-content .text-content:nth-of-type(2) p',
);

bottomHeader2.textContent = siteContent['main-content']['product-h4'];
bottomContent2.textContent = siteContent['main-content']['product-content'];

const bottomHeader3 = document.querySelector(
  '.bottom-content .text-content:last-of-type h4',
);
const bottomContent3 = document.querySelector(
  '.bottom-content .text-content:last-of-type p',
);
bottomHeader3.textContent = siteContent['main-content']['vision-h4'];
bottomContent3.textContent = siteContent['main-content']['vision-content'];

// Contact
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo.forEach(
  (element, index) =>
    (element.textContent = Object.values(siteContent.contact)[index + 1]),
);

const addressArray = siteContent.contact.address.split(' ');
addressArray.splice(4, 0, '\n');
const address = contactInfo[0];
address.innerText = addressArray.join(' ');

// Footer
const footerText = document.querySelector('footer p');
footerText.textContent = siteContent.footer.copyright;
