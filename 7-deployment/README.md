# my-first-nuxt-app

## Deploying a Universal App

First of all, build the app with ```npm run build```.

Thereafter, upload the entire project folder (including the ```.nuxt/``` folder and the ```node_modules``` folder as well as the ```package.json``` and ```nuxt.config.js``` files) to our web server.

Important: This web server has to run Node.js version 8.x or higher!

We can use any hosting provider such as Heroku, AWS (EC2 or Elastic Beanstalk), etc.

Depending on the provider, we might not need to upload the node_modules folder because the npm install command will be run automatically.

Make sure that the ```npm start``` command gets executed on the chosen hosting platform - for most providers, this should be the default. ```npm start``` will start the Node server provided and configured by Nuxt.js and will basically enable the server-side rendering of Vue apps.

## Deploying SPAs and Static Webpages

After building the app with ```npm run build```, we need to upload the ```dist/``` folder content (just the content, not the folder itself) to a static host like AWS S3 or Firebase Hosting.
