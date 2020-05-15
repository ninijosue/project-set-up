import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import rimraf from "rimraf";
import htmlEng from "./lib/rollup-plugin-copyFile.js";

rimraf.sync("./build");

export default {
    input: 'src/app.js',
    output: {
      file: 'build/bundle.js',
      format: 'umd',
      name: "setup"
    },
    plugins:[
        terser(),
        cleanup({
            comments: "none"
        }),
        resolve(),
        babel({
            exclude: 'node_modules/**'
          }),
        htmlEng({
            src: "./src/view/index.html",
            target: "./build/index.html"
        })
        
    ],
    external: [ 'litHtml' ] 
  };