const fs = require('fs');
const path = require("path");
/*
the option's the object that takes two objects 
whitch is the string and the path
include src and target
*/
export default function copyfiles(options){
  function onGenerate(){
        const targDist = path.dirname(options.target);
        if(!fs.existsSync(targDist)) fs.mkdirSync(targDist);
        fs.writeFileSync(options.target, fs.readFileSync(options.src));
    }
    return onGenerate()
    
}