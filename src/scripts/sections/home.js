import {html, render} from "lit-html";
import Home from "../components/home";

export default{
    init(){
        try{
            if(customElements.get("home-app") === undefined)
            customElements.define("home-app", Home) 
           } catch (error) {
             console.log(error)  
           }
    }
  
}