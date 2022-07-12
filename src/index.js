const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

//header section
const header = document.querySelector("header");

//Finding all the anchor tags inside the nav element
const anchor = document.querySelectorAll("nav a");

anchor[0].textContent = siteContent.nav["nav-item-1"]
anchor[1].textContent = siteContent.nav["nav-item-2"]
anchor[2].textContent = siteContent.nav["nav-item-3"]
anchor[3].textContent = siteContent.nav["nav-item-4"]
anchor[4].textContent = siteContent.nav["nav-item-5"]
anchor[5].textContent = siteContent.nav["nav-item-6"]

anchor[0].classList.add("italic")
anchor[1].classList.add("italic")
anchor[2].classList.add("italic")
anchor[3].classList.add("italic")
anchor[4].classList.add("italic")
anchor[5].classList.add("italic")

//console.log(anchor[0]);


//Putting the logo image that is on the top right
const Logo_Image = document.querySelector("header img");
Logo_Image.src = siteContent.images["logo-img"];

//Setting the h1
const Header_h1 = document.querySelector(".cta h1");
Header_h1.textContent = siteContent.cta["h1"];

//Setting the button
const button = document.querySelector(".cta button");
button.textContent = siteContent.cta["button"];

//Setting the image of code snippet 
const image_of_code = document.querySelector(".cta #cta-img");
image_of_code.src = siteContent.images["cta-img"];



//Setting the main content title features
const Features = document.querySelector(".main-content .text-content:nth-of-type(1) h4");
Features.textContent = siteContent["main-content"]["features-h4"];


//Setting the content in features
const Features_Content = document.querySelector(".main-content .text-content:nth-of-type(1) p");
Features_Content.textContent = siteContent["main-content"]["features-content"];


//Setting the content title in about
const About = document.querySelector(".main-content .text-content:nth-of-type(2) h4");
About.textContent = siteContent["main-content"]["about-h4"];

//Setting the content in about
const About_Content = document.querySelector(".main-content .text-content:nth-of-type(2) p");
About_Content.textContent = siteContent["main-content"]["about-content"];


//Setting the image in the main content
const Main_Content_Image = document.querySelector(".main-content img");
Main_Content_Image.src = siteContent.images["accent-img"];


//Setting the content title in services
const Services = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) h4");
Services.textContent = siteContent["main-content"]["services-h4"];

//Setting the content in services
const Services_Content = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) p");
Services_Content.textContent = siteContent["main-content"]["services-content"];


//Setting the content title in product
const Product = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) h4");
Product.textContent = siteContent["main-content"]["product-h4"];

//Setting the content in product
const Product_Content = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) p");
Product_Content.textContent = siteContent["main-content"]["product-content"];


//Setting the title in vision
const Vision = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) h4");
Vision.textContent = siteContent["main-content"]["vision-h4"];

//Setting the content in vision
const Vision_Content = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) p");
Vision_Content.textContent = siteContent["main-content"]["vision-content"];



//Contact 
const Contact = document.querySelector(".contact h4");
Contact.textContent = siteContent.contact["contact-h4"];

//address
const Address = document.querySelector(".contact p:nth-of-type(1)");
Address.textContent = siteContent.contact["address"];

//Phone Number
const Phone_Number = document.querySelector(".contact p:nth-of-type(2)");
Phone_Number.textContent = siteContent.contact["phone"];

//email
const Email = document.querySelector(".contact p:nth-of-type(3)");
Email.textContent = siteContent.contact["email"];


//--------------Footer Section-------------------
const Copyright = document.querySelector("footer a");
Copyright.textContent = siteContent.footer["copyright"];

Copyright.classList.add("bold")





