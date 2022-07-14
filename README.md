### 1. init project -> upload github

- `git init`
- `git add .`
- `git commit -m "your commit"`
- `git remote add origin [your-link-remote]`
- `git branch -M main`
- `git push -u origin main`

### 2. install & config library customize-cra

- docs: https://github.com/arackaf/customize-cra
- read before docs : https://github.com/timarney/react-app-rewired/
- insert terminal: `npm i -D customize-cra react-app-rewired `

### 3. install & config library babel-plugin-module-resolver

- docs: https://github.com/tleunen/babel-plugin-module-resolver
- insert terminal: `npm install --save-dev babel-plugin-module-resolver`
- create .babelrc

  ```babelrc
      {
          "plugins": [
              [
                  "module-resolver",
                  {
                      "alias": {
                          "~": "./src"
                      }
                  }
              ]
          ]
      }
  ```

- create jsconfig.json
  `json { "compilerOptions": { "baseUrl": ".", "paths": { "~/*": [ "src/*" ] } } } `

- customize config-overrides.js

  ```JS
      const { override, useBabelRc } = require("customize-cra");

      module.exports = override(
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useBabelRc()
      );
  ```

### 4. install & config Prettier in VSCode

- create file .prettierrc in root

```
    {
        "arrowParens": "always",
        "bracketSameLine": false,
        "bracketSpacing": true,
        "embeddedLanguageFormatting": "auto",
        "htmlWhitespaceSensitivity": "css",
        "insertPragma": false,
        "jsxSingleQuote": false,
        "printWidth": 120,
        "proseWrap": "preserve",
        "quoteProps": "as-needed",
        "requirePragma": false,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 4,
        "trailingComma": "all",
        "useTabs": false,
        "vueIndentScriptAndStyle": false
    }
```

- in .vscode/setting.json

```json
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
```

### 5. config CSS/SCSS

- create component GlobalStyles

  ```JSX
    import './GlobalStyles.scss';

    const GlobalStyles = ({ children }) => {
        return children;
    };

    export default GlobalStyles;
  ```

- install library SCSS: `npm i -D scss`
- reset css: `npm install --save normalize.css`
- default css:
  - font-family: google.font
  - font-size
  - line-height

### 6. config router/ layout

- Overview analysis of Layout
- install react-router-dom: `npm i react-router-dom`
- move config routers outside

  ```js
  import Home from '~/pages/Home';
  import Following from '~/pages/Following';

  //public routers
  const publicRoutes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/following',
      component: Following,
    },
  ];

  const privateRoutes = [];

  export { publicRoutes, privateRoutes };
  ```

- conduct mechanism load layout

### 7. Create frame Layout

- `npm i classnames`
- use bind function in classnames library

### 8. Create UI header

- install fontawesome:

  - `npm i --save @fortawesome/fontawesome-svg-core`
  - `npm i --save @fortawesome/free-solid-svg-icons`
  - `npm i --save @fortawesome/free-regular-svg-icons`
  - `npm i --save @fortawesome/react-fontawesome@latest`

- install library tippyjs-react:
  - `npm i @tippyjs/react`
  - show tooltip
