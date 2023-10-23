
# redpapr

[`redpapr`](https://www.npmjs.com/package/redpapr) is an npm package containing [Redpapr UI](https://ui.redpapr.com)
components that are used across all [Redpapr](https://www.redpapr.com) websites.



## Table of contents
* [redpapr](#redpapr)
    * [Table of contents](#table-of-contents)
    * [Installation](#installation)
    * [Setup](#setup)



## Installation
You can install [`redpapr`](https://www.npmjs.com/package/redpapr) with the following command:
```
npm i redpapr
```



## Setup
* Add the following path to your `tailwind.config.js`:
    ```
    content: [
        // add the line below
        './node_modules/redpapr/dist/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    ```

* Import the following `CSS` file in your project:
    ```
    import '../node_modules/redpapr/css/redpapr.css';
    ```

Now you should be able to import and use Redpapr UI components in your project.


