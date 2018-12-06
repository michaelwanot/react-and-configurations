This file is about configuring react with webpack and babel.
The following istruction are provided by https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75, with some adjusting in libraries

<h1>Download Dependencies</h1>
<h4><blockquote>First step is to create the react app from the CLI: create-react-app react-and-configurations.
It provide a base react application with a css file, an html entry point, an index.js and an "App" components.</h4>It provides also base react packages as react, react-dom, react-scripts as dependencies.
You can also start from scratch initializing an app via npm init, answering to the questions about the app (or skipping them with -y option) and then install reacts packages via npm:

<i>react<br />
react-dom<br />
react-scripts<br /></i>

We need to install as Dev-dependencies the following lybraries via <b>npm i <i>"name_of_packages"</i> -D</b>(for dev-dependencies-only):

<h4><blockquote>webpack is used for</h4>
<i>webpack<br />
webpack-cli<br />
webpack-dev-server</i> - to watch changes in real time when we save the modified file

the in scripts section of package.json we add those commands:

<i>"start": "webpack-dev-server --mode development --open [--hot]"</i>    to create a dist folder where the code is build for local environment and look for the real-time changes in the default host port 8080. The second option is used to refresh only the component who received changes.

<i>"build": "webpack --mode production"</i>    for minifing the source code in dist folder for production mode

<h4><blockquote>babel libs are used for make old browser compatibles with modern javascript sintax</h4>
<i>babel-loader</i> - webpack helper to transform js imports with babel<br>
<i>babel-preset-env</i> - Determines which transformations/plugins to use and polyfills<br />
<i>@babel/core</i> - transform modern ES sintax to ES5 sintax<br />
<i>@babel/preset-react</i> - Babel preset for all React plugins, for example turning JSX into functions<br />
<i>html-webpack-plugin</i> - This plugin generates an HTML file with the script tag injected, writes this to dist/index.html, and minifies the file.

<h4><blockquote>css packages to load styles</h4>
<i>css-loader</i><br />
<i>style-loader</i>

<h1>Configuring .babelrc</h1>
Now packages are installed let's create a ".babelrc" file to say what preset we use: @babel/preset-env, @babel/preset-react.
You can also configure this in the packageaction.payloadaction.payloadaction.payload.json file in a babel object:

  "babel": {
  "presets": [
    @babel/preset-env,
    @babel/preset-react
    ]
  }

<h4><blockquote>eslint-babel packages</h4>
We want to add eslint to our configurations. It will be used to lint our code to check sintax errors or warning and follow guide line the align code with other users if needed. This rules will be written in a .eslintrc file.
A complete documentation and a complete collection of examples are available in this link: https://eslint.org/

<i>eslint-loader</i>
<i>babel-eslint</i>
<i>eslint-plugin-react</i> - to define rules for React specifically

Then we add the first loader in our webpack config file with the babel-loader, createing a new file .eslintrc and add few basic lines
{
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
  }
}
in rules we will add some rules referenced to the documentation; To add specific react rules, we must write rules in this form: "react/[rule]"

<h1>Configuring base webpack file</h1>
We start configuring base webpack file called "webpack.config.js":
<ul>
  <li>define an HtmlWebPackPlugin requiring the html-webpack-plugin, add to this object a filename and a template whee find the entry point.</li>

  <li>now export the module with base rules array with object that contains infos about the build. So we are excluding the /node_modules directory and use the babel-loader.
  We use also css modules and append them in the end of rules array because webpack reads rules from the last element of it and the order of those elements are very important! We must load css rules before add them to the DOM.
  We can also add more options to each rule; <i>we added some options to css-loader module.</i></li>

  <li>to import files as .svg images, we need to download and apply the file-loader lib and add as a rule in the file.</li>
</ul>
