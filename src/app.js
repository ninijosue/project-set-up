import {html, render} from "lit-html";

const pathname = window.location.pathname;
console.log(pathname);
switch (pathname) {
    case "/":
        import('./scripts/sections/home').then(modele=> modele.default);
        break;
    // case "/product":
    //     import('./scripts/sections/product').then(section=>console.log(section)).catch(err=>console.log(err));
    // default:
    //     import('./scripts/sections/home').then(section=>console.log(section)).catch(err=>console.log(err));
    //     break;
}

