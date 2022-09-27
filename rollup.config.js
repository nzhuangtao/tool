import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
export default {
    input:'./main.js',
    output:{
        file:'dist/tool.min.js',
        format:'umd',
        name:'shaymin_tool'
    },
    plugins:[
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
}