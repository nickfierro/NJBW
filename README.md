# NJBW
Node + Jade(Pug) + Bootstap + Webpack

Boilerplate code.

Install with:
`npm install`

or

With npm:
`npm install njbw`


Load and sever to a webpack dev server using:
` npm run dev`

Compile to dist/ using :
` npm run prod`

Clean dist/ using:
`npm clean`

Change `entry` in `webpack.config.js` to point to your entry script, change the template in the HtmlWebpackPlugin object to point to your pug template. Boostrap is included, just write your template and viola! include images using `img(src=require(./path-to-your-file))`
