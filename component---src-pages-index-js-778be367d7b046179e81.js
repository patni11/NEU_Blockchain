"use strict";(self.webpackChunknu_blockchain_website=self.webpackChunknu_blockchain_website||[]).push([[678],{2450:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var n=l(i(7294)),a=i(5444),c=l(i(5697)),r=i(9650);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){m(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function d(e){var t=e.to,i=e.title,c=e.children,l=e.className,s=e.stripHash,m=void 0!==s&&s,d=e.gatsbyLinkProps,u=void 0===d?{}:d,N=e.onAnchorLinkClick,A=m?r.handleStrippedLinkClick:r.handleLinkClick,f=o(o({},u),{},{to:m?(0,r.stripHashedLocation)(t):t,onClick:function(e){return A(t,e,N)}});return i&&(f.title=i),l&&(f.className=l),n.default.createElement(a.Link,f,c||i)}d.propTypes={to:c.default.string.isRequired,title:c.default.string,className:c.default.string,stripHash:c.default.bool,gatsbyLinkProps:c.default.object,onAnchorLinkClick:c.default.func,children:c.default.node}},9869:function(e,t,i){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return n.AnchorLink}});var n=i(2450)},6652:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(7294);function a(){return n.createElement("ul",{className:"circles"},n.createElement("li",null),n.createElement("li",null),n.createElement("li",null),n.createElement("li",null),n.createElement("li",null),n.createElement("li",null),n.createElement("li",null),n.createElement("li",null),n.createElement("li",null),n.createElement("li",null))}},6933:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(7294),a=i(5444),c=i(9869);function r(){var e=(0,n.useState)(!1),t=e[0],i=e[1],r=function(){i(!1),console.log("close")};function l(){return n.createElement("div",{className:t?"nav2":"nav",onClick:t?function(){r()}:function(){}},n.createElement("div",{className:t?"item-container2":"item-container"},n.createElement("ul",null,n.createElement(a.Link,{to:"/",className:"items"},n.createElement("img",{src:"logo.png",alt:"",className:t?"logo2":"logo"})),n.createElement("div",{className:t?"all_links":"abcd"},n.createElement("a",{href:"https://lu.ma/neublockchain",className:"items",onClick:function(){r()},target:"_blank"},n.createElement("h3",{className:"nav-title",id:"title-scroll"},"Contact Us")),n.createElement(c.P,{to:"/#about",className:"items",onClick:function(){r()}},n.createElement("h3",{className:"nav-title",id:"title-scroll"}," ","About"," ")),n.createElement(a.Link,{to:"/Gallery",className:"items",onClick:function(){r()}},n.createElement("h3",{className:"nav-title",id:"title-scroll"}," ","Gallery"," ")),n.createElement("a",{href:"https://open.spotify.com/show/3PlymH5URCaCy8OqSBMOdN?si=c3fc6748eb6744b3",className:"items",onClick:function(){r()},target:"_blank"},n.createElement("h3",{className:"nav-title",id:"title-scroll"},"Podcast")),n.createElement("a",{href:"https://web3.career/",className:"items",onClick:function(){r()},target:"_blank"},n.createElement("h3",{className:"nav-title",id:"title-scroll"},"Jobs")),n.createElement(a.Link,{to:"/Events",className:"items",onClick:function(){r()}},n.createElement("h3",{className:"nav-title",id:"title-scroll"}," ","Events"," ")),n.createElement(a.Link,{to:"/Research",className:"items",onClick:function(){r()}},n.createElement("h3",{className:"nav-title",id:"title-scroll"}," ","Research"," ")))),t?"":n.createElement("div",{onClick:function(){return i(!0),void console.log("open")},className:"hamburger"},n.createElement("button",null,n.createElement("img",{src:"hamburger.svg",alt:""})))))}return n.createElement(n.Fragment,null,n.createElement(l,null," "))}},5255:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(7294);function a(e){var t=e.image,i=e.title;e.description,e.link;return n.createElement("div",{className:"card"},n.createElement("img",{src:t||"me.png",alt:"",className:"card-image"}),n.createElement("h3",{className:"card-title"}," ",i||"Title"," "))}function c(e){var t,i,a=e.title,c=e.image,r=e.description,l=e.link,s=e.closePopup,o=e.link_title,m=e.date;e.children;return n.createElement("div",{className:"popup",onClick:s()},n.createElement("div",{className:"card-info"},n.createElement("img",{src:c,alt:"",className:"card-image-info"}),n.createElement("div",{className:"card-content"},n.createElement("h3",{className:"card-info-title"}," ",a," "),n.createElement("p",{className:"card-info-para"},r.length>300?r.substring(0,300)+"....":r),n.createElement("br",null),console.log(r),m?(t={date:m},i=new Date(Date.parse(t.date)).toLocaleString().split(",")[0],n.createElement("h3",{className:"date"},"Publish on: ",i)):"",n.createElement("a",{href:l,className:"card-info-link"},o))))}function r(e){var t=e.title,i=e.data,r=e.link_title,l=e.children,s=e.bg,o=(0,n.useState)(!1),m=o[0],d=o[1],u=(0,n.useState)(i?i[0]:""),N=u[0],A=u[1];var f="#1d1d20";function M(){d(!m)}return(0,n.useEffect)((function(){f=s||"#1d1d20"}),[]),n.createElement("section",{className:"section-secondary bg",style:{background:f}},n.createElement("div",{className:"secondary-container"},n.createElement("center",null,n.createElement("div",null,n.createElement("h2",{className:"section-secondary-title"},t),i?n.createElement("div",{className:"researches"},i.map((function(e,t){return n.createElement("a",{onClick:function(){!function(e){d(!m),A(e)}(e)},target:"_blank",key:e.id},n.createElement(a,{image:e.image,description:e.description,title:e.title,link:e.link,key:e.id}))})),m&&n.createElement(c,{key:N.id,image:N.image,description:N.description,title:N.title,link:N.link,link_title:r,closePopup:function(){return M},date:N.date})):""),l)))}},4152:function(e,t,i){i.d(t,{Z:function(){return N}});i(7294);var n=i.p+"static/nsh-88216ce836249604eb0a906f1ec4f07a.jpeg",a=i.p+"static/ben-4f27a43bb67996d6bb2d7b7fb1c670bf.jpeg",c=i.p+"static/ivan-97f91f00f1e69198821e1a89aed4ab39.jpeg",r=i.p+"static/shubh-b0e5b9b133120eb68cfe2bea83082efe.jpeg",l=i.p+"static/Youssef-5b324667ea7513f3073b3c2bc112ebb5.jpeg",s=i.p+"static/vasu-30b73a14973b5275a1add6914eba164e.jpeg",o=i.p+"static/nora-fa97fa944f58525abbc746c780bc5983.jpeg",m=i.p+"static/meg-828c3a0518f120d67b00fafb7040c663.jpeg",d=i.p+"static/ally-785e1d4bcd403a59f012718d71011654.jpeg",u=i.p+"static/jeremy-5733dd17ba46cf9f805c1984b58d9d0c.jpeg",N=[{description:" Alyson is doing Master’s in Business Analytics (MSBA’22). She loves Music, food, and clean. Her favorite crypto is Cosmos",title:"Alyson (Ran) Liu (Co-President)",image:d,link:"https://www.linkedin.com/in/alysonliu/",id:1},{description:"David is doing Master's in Computer Science and he loves Video Games, Yield Farming, and Snowboarding. His favorite crypto is Bitcoin",title:"David Hsu (Co-President)",image:i.p+"static/david-8accfce2c00fd5cc7bf713b2628368ec.jpeg",link:"https://www.linkedin.com/in/david-hsu-cfa-13858542/",id:2},{description:"Bennett is a 2nd Year, Data Science and FinTech Major working on his startup called BlockBeam. His favorite crypto is Algorand",title:"Bennett Thompson (Co Vice President)",image:a,link:"https://www.linkedin.com/in/thompsonbennett/",id:3},{description:"",title:"Jeremy Koch (Co Vice Presidents)",image:u,link:"https://www.linkedin.com/in/jeremy-kochnu/",id:4},{description:"Noura is a 2nd year student studying Finance and Experience Design. She is into MMA, Fencing, Origami, and Travelling. Her favorite crypto is Ethereum",title:"Noura Abdalla (Events Co-Director)",image:o,link:"https://www.linkedin.com/in/noura-a/",id:14},{description:"Youssef is a 4th Year student majoring in Finance and Corporate Innovation & Ventures. He is interested in NFTs, Art, Fashion, DeFi, and Layer 2s. His favorite crypto is Ethereum",title:"Youssef Haidar (Research Co-Director)",image:l,link:"https://www.linkedin.com/in/youssefhh/",id:6},{description:"Vasu is a 3rd year student studying CS & Finance. He loves Climbing and economics. His favorite crypto is Ethereum",title:"Vasu Zalawadia (Research Co-Director)",image:s,link:"https://www.linkedin.com/in/vzalawadia/",id:7},{description:"",title:"Nishay Madhani (Director of Technology)",image:n,link:"https://nshmadhani.com",id:8},{description:"Ivan is a 2nd year Computer Science & Mathematics major. He is into Soccer and DeFi. His favorite crypto is Ethereum.",title:"Ivan Rosales (Director of Governance)",image:c,link:"https://www.linkedin.com/in/ivangrosales/",id:9},{description:"",title:"Bernice Luong (Director of Marketing)",image:i.p+"static/bernice-8f4c0e893ae17f174cc61ee2ff51dc1b.jpeg",link:"https://www.linkedin.com/in/bernice-luong/",id:10},{description:"",title:"Megan Gilbert (Head of link Media)",image:m,link:"https://www.linkedin.com/in/megan--gilbert/",id:11},{title:"Shubh Patni (Head of Public Relations)",image:r,description:"Shubh Patni is a first year student studying CS and Economics. He is a Blogger, Programmer, and creates content related to programming and tech. He is working at Phemex Student Fellowship and Coinbase Analyst Program. His Favorite Crypto is Ethereum",link:"https://shubhpatni.com",id:12},{description:"",title:"Luke O'Neal (Head of Public Relations)",image:i.p+"static/luke-62802e668854e4593f6b61dfc9658170.jpeg",link:"https://www.linkedin.com/in/lukefoneill",id:13}]},2381:function(e,t,i){i.r(t),i.d(t,{default:function(){return o}});var n=i(7294),a=i(6933),c=i(5255),r=i(4152),l=i(6652),s=[{description:"",title:"a16z",image:"data:image/png;base64,UklGRmYLAABXRUJQVlA4TFoLAAAvV8KVEDegqG0bqPxp3hD2Gw0CSRv7d96voG0bpvx5tfuDMgoj0rYpn3+px4//n4hRFtYC7Fyg5Gx71ubCUJ0xpKjj/KCM02AxboLlHXwLaGOx/zX09/XzvC8wOkT0XxZsW1ErbRwe5sYWWy5cZMrvv1Xlwqpym/9s/rP5z+Y/m/9s/rP5z+Y/m/9s/rP5z+Y/m//87wBpynN6wrEU+D7PMRiE178UlHXhMnw1Y1/JQlAvBkWO49xb4fVfVgqtkMc6IZUy9nGdMBQy3sMqIT2Lte062Tih9ErhXMj4WCekSigd1gmD0H9bTHRk6sbFREWm7hLXCYNYejFRkamL64Qgll4nnKXSKwVppi4uKAr872Gd0ErN9SVFQaZupeClBbErhVYqvagoyNQtKvRMXVhW2CVml4WF7f9YWOjS64RUSqUXFnKmblxauP5LXFq4F38P64Sz1FxfIE7H3xyPSsbbEjH95gYeTmquL5GLvzhPoxNn6pbNiWBm6t7DOsFLpRcYZqZurSD0f6wUzlLplUIlNddXCk4mPS4yNP8lrhQqqfQiQ8vUxZVCK5VeZlh21bjQkPz7uNDQpFcKbvbN9Th9uphscJ71gtiUpikG78f+W0GrAaoZL4hNU/T98XhoPt1hd+z7z4/oLJZ0mkJ/bP64w4frOEUyS5Wpm+JpJ9HwzdcfeknlTEun2O8KoWuu6dcvpRD/9FHxUnN9Do+6Qu4O46R18zTPmbrJ7zLfWl9T/MHx8Lej4nRIT1wXGevXUdQiucBcCJm6d3y/NUeu+6CuOVKPqJBKxrX/cmMCHii47o2zYhZ9FDLct8ttjtc+TSagrKhFG222vjl+/mEAxopaEgV8idlfWfBxirNC6hwwQK+JQX51S0BaNs0IyX+uyGUiAMvU5eUpZ4M0lAWU+h414WBhvU5zQXxGB6l+4MlrywJcVAMVwodpr4iqgC6zwOAKgtMDNmjXaQaIZWGAvEwd9k+9II9ZICdTB0/MrDM4y/gCn5hF26TnwjItITFLtjkXpmFEpdfJMqk0gqbn4x51AtubpqJQPwxT2oaUmr1Gs3SFFTKkSYeMkkoz6Ar0PhnlXJjG84J4iwrB7G3zxKN+mGQo7JAjzfqKQdKzIdQlZw+LG2eaVFF5jfZoC9sbV3B35kilbV6KgryzxlBYQt8DUqvb8P118+W0oPABuVnDZR45XPuv5hJ9f2x00tLZG+Oc+Vefpil+umma/KlRSFKQ9H/YosK9i0+T3/FhG3WYupkNyjkOCVrJMsWTY0PP1EEaVPUoJ03K7rn4vHpwsuo75A1aRzeH4/G4axxWGFbJ0uWn5mCL+ZBkxQdT57iAdfS3aoTT79X7YW0UeNbkLT8DDF5DSCdVZPm/UrP4c+RDf3R5xijDOVIICG/+pmdNuLzULP4eoX1DNB6F5QScKvwt441yLJnA/PV9ElSz2sGydszi5w/WWV9j5ptxNTzJV1FNuBQzlhGPZylcJ36dnFvjQg0OHJkylpse6fyzkmJBqQQPfz07ODVflp85/xNSO6WzElq53sFXOEaskPC+Rc4nNSD1T5UOKrzemZ7FXrg06czJ0Zq/DTrI0Dv4pP8C5kxTIPJMJWKngTMs5Udcaw2mIiUNoSO2quw08ETRO6lScNIhR1ptq8pUKkDah3fkKJ0bVpp25RUz5X9RgPCxSqyBClSYoABJ6rPh6Hi53qHs6giVpuk7biapovMkTc5oPSjxTVBEwsBtL3+mUwkDTQvvHSjNszheuH34Jkch+7I/eErnjR0Lb6wLDkAqMp6XP0tPXEHxmRGUZPv3TKYj3umBKtjypJNj55DItMz+MkqiYCqJpd/0nHfFpWKaSDLvnWyCIvB0i66lkhxT2XleUpgyTFDEueglBR13w7WQiP+/TIu/5ZdAUfFcvSN6LPdUE5Smb+5gSiad3ECi3euaaoLSHouALoFi8iTUO9QPqCYo63Hco3lhUgn1DvWDkSkNgj+ahGdSirNJxOzZnWeCwp4KBa/ZmTiy3nkSxQbd0iFoeBvqiIgeLLbSeaOZoMSYO+IHWOPhWVlK7mV3YmkeAU7F40zvm0gUHWgmKDG7H+E84ckK840dkWpa4SKPPX7T8mjpeqeSQDrzHXeDNdDhyYoI/IjEkiZyMURFIy8+cOqZANFQi9ETocelTgRHGhh/VNT45FFq5M4xQZncLEHXO14ExwSdNyBmHdHWoZigxnB2cRIYJujckWUC60b8upnLfd55Y0hD89zzTimBcGbsZnEgmKAzzl0BDBOULDLz4E3QBaWSADdBDVLMyoYjbcwOnRURTj0TW+Ub8wLcBKVzmXlI9UxMlcfOCjeWCTqH5fyFHZs9OSFJAXWw8/7IqYRmgs7ge0nH09FZmR1Wk4M5fN9dqkSpCaooI5qc3XJ+LwLe+pyva97x9XM0USt4f6TUBFWkrM7FrLyXFDYYBLU+p9UnxJ9rVt53R4IJSq+MAD8Xkf9EOlrjLfN5Z1Zwi0f19Z/zqqnToyLeBMVHXbqgI9LRDQaHYcBJG2mvwURhfcI3ignKDmkdzbQDYj9nHYbkgJ2pzF37skJh/WegCcrCsT8omCRH/mKFuWqAND/9vATl7WHzgnwj23SjLhMUlZbX4FzdrLQD0iqd3X5Xeft9RhMxmMm012qCZrcLR/q5dOR2i5Db1aF6XyLHoRroJ+NFvFNj0ptWEzS/Hwsr/dhw21lD9J/XIg3oHwXmZ1Myc3ZPEL2BrGdCjr8P1f1u5d7ED2YsBEozBYl6dyjotMr6G9mrPTOgnzAj/QR2vOctVZD/XbE0GSfcGel/suB92cmeVB0m6Iz1a5qcMH2k6asRaoIyLQbpDrDXsKlU9edWg84c2AwFZzeVKniRRk/WtP/Y0uSc7D6q7d8b8NCx+p9803FmnsK7q+03XkF65qV5W5g0/wPCoWlXEIGkZ5ystxoTlJY6HFLQOc4Fph86htbZayhcJNtIr1PGrE3U4MX9e0eC1rnBTFAN3oxFvlKBFFLWiTBI6qhIOltJZ80kIgqHMOKCKXl7nXLT/ezQvGSdWcVJM77w9zhiE38cMVBx0i2iJyJzUSoNH9b5zwnuTMPux2pz/JSUkUW6/yWteqZfPnPyROOPiUzFaYoKxz2ssOPyDLsC46+kezXzzsp8RpvDdUw/Bj5zhTo65HhPWWMuXiB3cYdyd4AXMEzrbrdrGp3jtLq8GRvhFPR9Kcf/rTJ19K/j0+1y1noxx5XuckfT/T7gY+gzk7LLrI1Xbmw8zcPx0GTr58dyjYOv8fHYB2s8G8Yr4Lak83ao6NTBHKEyTKdgWOlFnWdIyeZhcJNKw7T0vcl50cz3HCcWdr49qSXvbdKZ2WjbPYJNYmWYlro3SvCGCSVzb5XwbJiOxmtc4nmyJdaufizz/OsGNy9zqUL9CxZQpXf2KZhmcHaJJePYGGwTLM9DsnN4rlEvWk9Yj3pI+EOHFMwzlPBnioGWQ/vH/M7HNQU8ah6P+h5NkaOwsNFPFalzYKFZIJ2Q0S8yyAyxg87Gdx4I8QRbxxiUEaYTclUMfsGt6gjxhFs1Q1gc4hufKwdAiEGraigLZCWhIMT1NQXVaJ33OwtIiHPXPoW5IaS8CjGHr/tEAxXizKnsK4f3OwXkR3+/T6f++qcvdw5YmBCfGjHNNUXAZfdcN/Lm339qpDNKj5mzvAqZV4ULsfjhmJu59/8x1bO/K1w1qJnK5/w8Blxk8qed5EdKJNAd/BbAmFhy7F+h0X+fT1jdNMdrH9B/sUN82jW/1ZXtQ4oz+Js9puCD7/vef8Uqaz9X4puevX5pL/KzYexmfX11SjaD/Iv2WlVu85/Nfzb/2fxn85/Nfzb/2fxn85/Nfzb/2fxn85//neLfmnL/AA==",link:"https://a16z.com",id:1},{description:"",title:"Baf",image:i.p+"static/baf-1175afafc77d4b3cac5b4274adf545fa.png",link:"https://www.blockchainacceleration.org",id:2},{description:"",title:"Ben",image:i.p+"static/ben-4a4ab4d263473054098a8a655415c353.png",link:"https://www.blockchainedu.org",id:3},{description:"",title:"Bitcoin",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAuMDA0IDAgNjMuOTkzIDY0Ij48cGF0aCBkPSJNNjMuMDQgMzkuNzQxYy00LjI3NCAxNy4xNDMtMjEuNjM4IDI3LjU3NS0zOC43ODMgMjMuMzAxQzcuMTIgNTguNzY4LTMuMzEzIDQxLjQwNC45NjIgMjQuMjYyIDUuMjM0IDcuMTE3IDIyLjU5Ny0zLjMxNyAzOS43MzcuOTU3YzE3LjE0NCA0LjI3NCAyNy41NzYgMjEuNjQgMjMuMzAyIDM4Ljc4NHoiIGZpbGw9IiNmNzkzMWEiLz48cGF0aCBkPSJNNDYuMTEgMjcuNDQxYy42MzYtNC4yNTgtMi42MDYtNi41NDctNy4wMzktOC4wNzRsMS40MzgtNS43NjgtMy41MTItLjg3NS0xLjQgNS42MTZjLS45MjItLjIzLTEuODctLjQ0Ny0yLjgxMi0uNjYybDEuNDEtNS42NTMtMy41MDktLjg3NS0xLjQzOSA1Ljc2NmMtLjc2NC0uMTc0LTEuNTE0LS4zNDYtMi4yNDItLjUyN2wuMDA0LS4wMTgtNC44NDItMS4yMDktLjkzNCAzLjc1czIuNjA1LjU5NyAyLjU1LjYzNGMxLjQyMi4zNTUgMS42OCAxLjI5NiAxLjYzNiAyLjA0MmwtMS42MzggNi41NzFjLjA5OC4wMjUuMjI1LjA2MS4zNjUuMTE3bC0uMzctLjA5Mi0yLjI5NyA5LjIwNWMtLjE3NC40MzItLjYxNSAxLjA4LTEuNjA5LjgzNC4wMzUuMDUxLTIuNTUyLS42MzctMi41NTItLjYzN2wtMS43NDMgNC4wMiA0LjU3IDEuMTM5Yy44NS4yMTMgMS42ODMuNDM2IDIuNTAyLjY0NmwtMS40NTMgNS44MzUgMy41MDcuODc1IDEuNDQtNS43NzJjLjk1Ny4yNiAxLjg4Ny41IDIuNzk3LjcyNkwyNy41MDQgNTAuOGwzLjUxMS44NzUgMS40NTMtNS44MjNjNS45ODcgMS4xMzMgMTAuNDkuNjc2IDEyLjM4My00LjczOCAxLjUyNy00LjM2LS4wNzUtNi44NzUtMy4yMjUtOC41MTYgMi4yOTQtLjUzMSA0LjAyMi0yLjA0IDQuNDgzLTUuMTU3ek0zOC4wODcgMzguNjljLTEuMDg2IDQuMzYtOC40MjYgMi4wMDQtMTAuODA3IDEuNDEybDEuOTI4LTcuNzI5YzIuMzguNTk0IDEwLjAxMSAxLjc3IDguODggNi4zMTd6bTEuMDg1LTExLjMxMmMtLjk5IDMuOTY2LTcuMSAxLjk1MS05LjA4MyAxLjQ1N2wxLjc0OC03LjAxYzEuOTgzLjQ5NCA4LjM2NyAxLjQxNiA3LjMzNSA1LjU1M3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",link:"https://bitcoin.org/en/",id:4},{description:"",title:"Cardano",image:i.p+"static/cardano-2dd2bc4a78f1955647f3c6d7115b5f39.jpeg",link:"https://cardano.org",id:5},{description:"",title:"Coinmetrics",image:i.p+"static/coinmetrics-bc7ef1813cc3ac37393c850a61b775fe.jpeg",link:"https://www.linkedin.com/in/noura-a/",id:6},{description:"",title:"Encode",image:i.p+"static/encode-b8aa6c3aae3a377cc46d0d6795e066bf.png",link:"https://www.encode.club",id:7},{description:"",title:"EOS",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAwIDIwMDAiIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiPjxjaXJjbGUgY3g9IjEwMDAiIGN5PSIxMDAwIiByPSIxMDAwIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iODAiIGQ9Ik02ODAuMzkgNzI1LjYxbDMxOS41OCAxMDAzLjYtNDc0LjIxLTI5Ny4xNCAxNTQuNjMtNzA2LjQ2TDk5OS45NyAyODl2MzA2LjIzbC00NzQuMjEgODM2Ljg0aDk0OC45bC00NzQuMjEtODM2Ljg0VjI4OWwzMTkuNTggNDM2LjYxIDE1NC42MyA3MDYuNDYtNDc0LjIxIDI5Ny4xNCAzMTkuNTgtMTAwMy42Ii8+PC9zdmc+",link:"https://eos.io",id:8},{description:"",title:"ETH",image:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzNSIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDQxNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgIDxwYXRoIGZpbGw9IiMzNDM0MzQiIGQ9Ik0xMjcuOTYxIDBsLTIuNzk1IDkuNXYyNzUuNjY4bDIuNzk1IDIuNzkgMTI3Ljk2Mi03NS42Mzh6Ii8+CiAgIDxwYXRoIGZpbGw9IiM4QzhDOEMiIGQ9Ik0xMjcuOTYyIDBMMCAyMTIuMzJsMTI3Ljk2MiA3NS42MzlWMTU0LjE1OHoiLz4KICAgPHBhdGggZmlsbD0iIzNDM0MzQiIgZD0iTTEyNy45NjEgMzEyLjE4N2wtMS41NzUgMS45MnY5OC4xOTlsMS41NzUgNC42TDI1NiAyMzYuNTg3eiIvPgogICA8cGF0aCBmaWxsPSIjOEM4QzhDIiBkPSJNMTI3Ljk2MiA0MTYuOTA1di0xMDQuNzJMMCAyMzYuNTg1eiIvPgogICA8cGF0aCBmaWxsPSIjMTQxNDE0IiBkPSJNMTI3Ljk2MSAyODcuOTU4bDEyNy45Ni03NS42MzctMTI3Ljk2LTU4LjE2MnoiLz4KICAgPHBhdGggZmlsbD0iIzM5MzkzOSIgZD0iTTAgMjEyLjMybDEyNy45NiA3NS42Mzh2LTEzMy44eiIvPgo8L3N2Zz4=",link:"https://ethereum.org/en/",id:9},{description:"",title:"Sol",image:"data:image/png;base64,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",link:"https://solana.com",id:10},{description:"",title:"Storj",image:i.p+"static/storj-6f77de580d9c7c0a04fdf608dd296dc2.jpeg",link:"https://www.storj.io",id:11}],o=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,null),n.createElement("section",{className:"area"},n.createElement(l.Z,null),n.createElement("div",{className:"main"},n.createElement("h1",{className:"home-title"}," NEU Blockchain"),n.createElement("h3",{className:"home-subheading"},"Advancing Blockchain Education, Development, and Research"))),n.createElement("section",{className:"secondary"},n.createElement("center",{className:"secondary-content"},n.createElement("h1",{className:"secondary-title"}," About Us "),n.createElement("h3",{className:"secondary-subheading"},"NEU Blockchain is a blockchain club run by students of Northeastern University. We believe that decentralized ledger technology will be a integral part of society in future.",n.createElement("br",null),n.createElement("br",null)," Our aim is to educate students and general public about applications of blockchain and intricate technical details that make all of it possible. We do it through virtual/inperson events every monday, educational posts, podcasts, and in-depth research articles/papers."))),n.createElement(c.Z,{title:"Meet the Team",data:r.Z,link_title:"Link To Socials"}),n.createElement(c.Z,{title:"Our Partners",data:s,link_title:"Link To Website"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-778be367d7b046179e81.js.map