# Prepare the dev environment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Enable relative paths

Create `jsconfig.json` at the root level, and specify the root folder for the relative path, and other folders to exclude from this configuration:

```
{ 
  "compilerOptions": { 
    "baseUrl": "src" 
  }, 
  "exclude": ["node_modules", "build"], 
  "include": ["src"] 
} 
```

### Default webpack configuration override

Install the following packages:

* buffer
* process
* stream-browserify
* crypto-browserify
* react-app-rewired

Create `config-overrides.js` at the root level, and specify the webpack configuration override:

```
const webpack = require("webpack")
module.exports = function override(config, env) { 
    // define polyfill fallbacks 
    config.resolve.fallback = { 
        ...config.resolve.fallback, 
        stream: require.resolve("stream-browserify"), 
        buffer: require.resolve("buffer"), 
        crypto: require.resolve("crypto-browserify") 
    }
 
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"] 

    // define plugins 
    config.plugins = [ 
        ...config.plugins, 
        new webpack.ProvidePlugin({ 
            process: "process/browser", 
            Buffer: ["buffer", "Buffer"], 
        }), 
    ] 
 
    return config 
} 
```

Update the scripts section in `package.json`:

```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

## Available Scripts

The available scripts are exactly the same as any React projects initialized from Create-React-App:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.