# Web Summarizer Ai
This extension harnesses the capabilities of OpenAI's GPT models to provide concise summaries of web content, offering users an efficient way to digest information from websites.


## Setup
1. Clone the repository
2. Change directory to the repository: ``cd Web Summarizer Ai``
3. Install the npm packages using: ``npm install``
4. Compile the development build with ``npm run dev``
5. Go to chrome extensions page: `chrome://extensions/`
6. Turn on developer mode on the top right
7. Click on Load Unpacked and select /dist directory created in the folder

## Directory Structure
1. `background_scripts`: This directory is to store all the background scripts for the extension. Please make sure that only one background script is used as per the best practices for a chrome extension.
2. `content_scripts`: This directory contains content scripts for the extension which are injected into each page matching the regex in the `manifest.json` file. 
3. `popup`: This directory contains the entire react app for the popup's frontend
4. `public`: This directory should contain files that are supposed to be moved to the extension's folder directly

## Webpack setup
The webpack files, `webpack.config.js`, `webpack.dev.js`, and `webpack.prod.js` contains the base webpack config, development, and production configurations respectively. Base config is setup to transform all html, css, and js files.
**IMP** The react components and root app should be all in typescript format (`.ts` or `.tsx`) for them to be recognized and compiled in the build by webpack


