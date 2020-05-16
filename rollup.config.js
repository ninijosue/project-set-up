import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import rimraf from "rimraf";
import htmlEng from "./lib/rollup-plugin-copyFile.js";

rimraf.sync("build");

const globby = require('globby');

const paths = {};
globby.sync(["**src/app.js", "**/components/products*/index.js"]).forEach((inputFile)=>{
    const p = inputFile.split('/');
    let output = p[p.length - 2];
    if(output === "src") output = "index";
    paths[ output ] = inputFile; 
});
console.log(paths);

    
export default {
    input: paths,
    output: {
      dir: "./build/",
      format: "amd",
      entryFileNames: "[name].js",
      chunkFileNames: "[name]-[hash].js"
  },
    plugins:[
        terser(),
        cleanup({
            comments: "none"
        }),
        resolve(),
        babel({
            exclude: 'node_modules/**',
          }),
        htmlEng({
            src: "./src/view/index.html",
            target: "./build/index.html"
        })
        
    ],
    external: [ 'litHtml' ] 
  };