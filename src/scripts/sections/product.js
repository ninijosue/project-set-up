import products from "../components/products/index";
export default{
    init(){
        try {
            if(customElements.get("all-product") === undefined)
            customElements.define("all-product", products)
        } catch (error) {
            console.log(error);
            
        }
    }
}