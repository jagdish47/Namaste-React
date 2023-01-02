# What is `NPM`?

NPM is a default package manager of javascript.<br>
NPM manages all the packages that you use/need in your projects.

<br>

# What is `Parcel/Webpack`? Why do we need it?

Parcel and Webpack are both JavaScript bundlers. They take modules with dependencies and generate static assets that represent those modules.

JavaScript is often used to build single-page web applications that consist of many smaller modules, and these modules may have dependencies on other modules. For example, one module might contain a function that depends on another module containing a utility that it uses. In order to use these modules in a web browser, they need to be bundled together into a single file (or a few files) that can be loaded by the browser. This is where a JavaScript bundler like Parcel or Webpack comes in.

Parcel and Webpack are both tools that can be used to bundle your JavaScript modules into a single file (or a few files) that can be loaded by a web browser. They both have their own approaches and features, and which one you choose to use will depend on your specific needs and preferences.

Some of the benefits of using a JavaScript bundler like Parcel or Webpack include: <br>
1.HMR - (Hot Module reloding) <br> 2.File Watcher Algorithm <br> 3.Building <br> 4.Minify <br> 5.cleaning our code <br> 6.super fast <br> 7. HTTPS <br> 8.Image Optimization <br> 9. caching while development <br> 10. Compression <br> 11. Compatable with older version of browser <br> 12. Consistent Hasing Algorithm <br> 13. Zero config <br> 14. creater server for you <br> 15. Tree shaking

# What is `.parcel-cache

.parcel-cache is a directory that is used by the JavaScript bundler Parcel to store cache files.

When you run Parcel to bundle your code, it will create a .parcel-cache directory in the root of your project to store cache files. These cache files are used to speed up the bundling process by storing information about the files that have been processed, so that Parcel doesn't have to re-process them again if they haven't changed.

The .parcel-cache directory is typically hidden, so you might not see it unless you have your operating system's file explorer set to show hidden files. It is safe to delete the .parcel-cache directory if you need to, but keep in mind that doing so will clear the cache and may cause the bundling process to take longer the next time you run it.

# What is `npx` ?

npx allows you to run npm packages that you have installed locally or globally, without having to specify the full path to the package executable.

This is useful because it means you don't have to type out the full path to the package executable every time you want to run it. npx will automatically find and run the executable file for you.

In addition to running executables from local or global packages, npx can also be used to run npm packages that are not installed on your local machine. When you run npx with the name of a package that is not installed, it will automatically download and install the package from the npm registry, and then run the executable file for you.

# What is difference between `dependencies` vs `devDependencies`

**dependencies:** Packages listed under the dependencies property are required for your project to run in production. They should include packages that are needed to run the application or packages that are needed by other packages in the dependencies list. When you run npm install, npm will install these packages and any of their dependencies in the dependencies list.

**devDependencies:** Packages listed under the devDependencies property are only needed for development and are not required to run the application in production. They might include development tools, testing frameworks, linters, etc. When you run npm install, npm will only install these packages if the --production flag is not set (or if the NODE_ENV environment variable is not set to production).

By separating the packages that are required for production from those that are only needed for development, you can ensure that only the necessary packages are installed when you deploy your application. This can help reduce the size of your production build and improve its performance.

# What is Tree Shaking?

Tree shaking is a term that refers to the ability to remove unused code from your JavaScript bundle. It is a technique that is often used to reduce the size of JavaScript bundles and improve the performance of web applications.

Tree shaking works by analyzing the dependencies between modules and removing any code that is not actually used by the application. For example, if a module exports several functions, but the application only uses one of those functions, the tree shaking process will remove the code for the unused functions from the bundle. This can help reduce the size of the bundle and improve the performance of the application.

# What is Hot Module Replacement?

Hot Module Replacement (HMR) is a feature that allows you to update parts of your application without having to fully reload the page. It is typically used during development to speed up the process of making changes and testing them.

When HMR is enabled, the application will listen for changes to certain types of modules, and when a change is detected, it will automatically update the relevant part of the application without reloading the page. This can save a lot of time and make the development process more efficient, as you don't have to manually refresh the page every time you make a change.

HMR is typically used in combination with a build tool or bundler, such as Webpack or Parcel, which is responsible for detecting changes to the application's modules and triggering the HMR process.

To use HMR, you will need to configure your build tool or bundler to enable the feature, and you will also need to update your application code to support HMR. The specific steps for doing this will depend on the tools and frameworks you are using.

# List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

Zero configuration: One of the most appealing aspects of Parcel is that it requires zero configuration to get started. This means you can jump right in and start bundling your code without having to spend time setting up a configuration file or manually installing and configuring plugins and loaders.

Fast performance: Parcel is known for being fast and efficient. It uses a clever algorithm to determine the optimal way to bundle your code, and it can also make use of multiple cores and worker processes to speed up the bundling process.

Support for a wide range of file types: Parcel can handle a wide range of file types, including JavaScript, TypeScript, CSS, HTML, and even images and fonts. It uses plugins and loaders to process these different file types, and it can automatically install and configure the necessary plugins as needed.

Hot Module Replacement (HMR): As mentioned earlier, HMR allows you to update parts of your application without having to fully reload the page. Parcel supports HMR out of the box, so you can take advantage of this feature to speed up your development workflow.

Server-side rendering (SSR): Parcel can also be used to build applications that are designed for server-side rendering (SSR). This means that the initial rendering of the application can be done on the server, rather than in the browser, which can improve the performance and SEO of the application.

# What is `.gitignore`? What should we add and not add into it?

.gitignore is a file that you can create in a Git repository to specify patterns for files and directories that should be excluded from version control. Git will ignore files and directories that match patterns listed in the .gitignore file, and they will not be tracked or committed to the repository.

There are a few common types of files and directories that you might want to add to your .gitignore file:

Build artifacts:- Files and directories that are created as part of the build process (such as compiled files or temporary files) are often not needed in the repository and can be added to the .gitignore file.

Environment-specific files:- Files and directories that are specific to your development environment (such as local configuration files) are often not needed in the repository and can be added to the .gitignore file.

Sensitive information:- It is generally a good idea to avoid committing sensitive information, such as passwords or API keys, to a repository. You can use the .gitignore file to exclude these types of files from version control.

It is generally not a good idea to add files and directories that are necessary for your project to run to the .gitignore file. For example, you should not add your source code or dependencies to the .gitignore file. These types of files should be tracked and committed to the repository so that they can be shared with other developers and deployed to production environments.

# What is the difference between `package.json` and `package-lock.json`

In the context of npm (Node Package Manager), package.json is a file that is used to define metadata for a JavaScript project. It includes information such as the project's name, version, dependencies, scripts, and more.

package-lock.json, on the other hand, is a file that is used to lock the versions of the packages (dependencies, devDependencies, and optionalDependencies) that are installed in a project. It is generated automatically when you run npm install, and it ensures that the installed packages are always the same, regardless of the version constraints in the package.json file.

The main difference between package.json and package-lock.json is that package.json specifies the dependencies and their version constraints, while package-lock.json specifies the exact versions of the dependencies that are installed.

# Why should I not modify `package-lock.json`?

It is generally not a good idea to modify package-lock.json directly, because it is generated automatically by npm (Node Package Manager) when you run npm install. Modifying package-lock.json directly can lead to inconsistencies between the version of packages that are listed in package-lock.json and the actual packages that are installed in your project.

Instead of modifying package-lock.json directly, you should update the dependencies in your project by modifying the version constraints in the package.json file and then running npm install again. This will update package-lock.json with the new versions of the dependencies, and it will also update the actual packages that are installed in your project.

# What is `node_modules` ? Is it a good idea to push that on git?

It is generally not a good idea to commit the node_modules directory to your version control system (such as Git). This is because the node_modules directory can get quite large, as it contains not only the packages that you have explicitly installed, but also all of their dependencies. Committing the node_modules directory to your repository can lead to a large repository size and slower performance.

Instead of committing the node_modules directory, it is generally a good idea to include the package.json and package-lock.json files in your repository, and to have other developers install the necessary packages by running npm install. This ensures that everyone working on the project has the same version of the packages that are needed to run the project.

# What is the `dist` folder?

The dist folder (short for "distribution") is a directory that is used to store the built version of a software project. The contents of the dist folder are typically the files that are ready to be deployed or distributed.

The specific contents of the dist folder will depend on the type of project you are working on. For example, if you are building a web application, the dist folder might contain the bundled and minified JavaScript, CSS, and HTML files that are needed to run the application in a web browser. If you are building a library or an application that is intended to be run on a server, the dist folder might contain the compiled code and any necessary resources.

The dist folder is often created as part of the build process, and its contents are typically generated by a build tool or bundler, such as Webpack or Parcel. The dist folder is usually not committed to version control, as its contents can be generated from the source code by running the build process.

# What is `browserlists`

browserslist is a configuration file that is used to specify the browsers and versions that you want to support in your project. It is typically used in conjunction with tools such as Autoprefixer and Babel, which can use the browserslist configuration to automatically add vendor prefixes to CSS rules and to transpile JavaScript code to a version that is compatible with the specified browsers.

The browserslist configuration is typically stored in a file called .browserslistrc in the root of your project. It consists of a list of queries that specify the browsers and versions that you want to support. For example, you might specify that you want to support all versions of Chrome that are greater than or equal to 50

# Read about: ^ - caret and ~ - tilda

In the context of semantic versioning, the ^ (caret) and ~ (tilde) characters are used to specify version constraints in package.json files. They can be used to specify a range of versions that are compatible with a given package.

The ^ character is used to specify a range of versions that are compatible with the major version of a package. For example, if you specify a dependency as ^1.2.3, this means that you are willing to accept any version of the package that is compatible with version 1.x.x. This includes patch and minor updates (e.g. 1.2.4, 1.3.0, etc.), but not major updates (e.g. 2.0.0).

The ~ character is similar to the ^ character, but it is more restrictive. It specifies a range of versions that are compatible with the latest patch version of a package. For example, if you specify a dependency as ~1.2.3, this means that you are willing to accept any version of the package that is compatible with version 1.2.x. This includes patch updates (e.g. 1.2.4), but not minor or major updates (e.g. 1.3.0, 2.0.0, etc.).

In general, the ^ character is a good choice if you want to ensure that your project stays up-to-date with the latest patches and minor updates, while still maintaining a level of stability. The ~ character is a good choice if you want to ensure that your project stays compatible with a specific patch version, and you are not interested in receiving minor updates.

# Read about dif bundlers: vite, webpack, parcel

Vite -
Vite (short for "Vite Is a Very Fast Dev Server") is a new generation bundler that is designed to be fast and lightweight. It uses native ES modules and a new approach to code-splitting to achieve fast build times and runtime performance.

One of the main advantages of Vite is its speed. It uses native ES modules and a Just-in-Time (JIT) compiler to achieve fast build times and runtime performance, and it is optimized for modern JavaScript development practices such as module-based code organization. Vite is also lightweight and easy to use, with a simple configuration file and a small number of dependencies.

Vite is particularly well-suited for small to medium-sized projects, and it is easy to get started with. It supports a wide range of file types, including JavaScript, TypeScript, CSS, and HTML, and it can be extended with plugins to support additional file types or features.

Overall, Vite is a fast and lightweight bundler that is well-suited for small to medium-sized projects, and it is a good choice if you want a simple and fast solution for building and deploying your code.

Webpack -
Webpack is a powerful and feature-rich bundler that is widely used in the JavaScript community. It can handle a wide range of file types, and it offers a variety of plugins and loaders to enable advanced features such as code-splitting, tree shaking, and minification.

One of the main advantages of Webpack is its versatility. It can handle a wide range of file types, including JavaScript, TypeScript, CSS, HTML, and many others, and it can be extended with plugins and loaders to support additional file types or features. Webpack also offers a variety of advanced features such as code-splitting, tree shaking, and minification, which can help you optimize the size and performance of your code.

Another advantage of Webpack is its strong ecosystem. It has a large and active community of users, and there are many plugins and loaders available that can be used to customize and extend the functionality of Webpack.

Overall, Webpack is a powerful and feature-rich bundler that is well-suited for large and complex projects. It can handle a wide range of file types and offers a variety of advanced features to help you optimize the size and performance of your code. However, it can be a bit more complex to set up and configure than some other bundlers, so it may not be the best choice for small or simple projects.

Parcel -
Parcel is a fast and easy-to-use bundler that is designed to make it simple to get started with web development. It offers a variety of features to help you build and deploy your code quickly and easily, including fast build times, automatic code splitting, and a simple configuration file.

One of the main advantages of Parcel is its simplicity. It has a simple configuration file and a small number of dependencies, making it easy to get started with. Parcel also offers fast build times and automatic code splitting, which can help you optimize the size and performance of your code.

Another advantage of Parcel is its flexibility. It can handle a wide range of file types, including JavaScript, TypeScript, CSS, HTML, and many others, and it can be extended with plugins to support additional file types or features.

Overall, Parcel is a fast and easy-to-use bundler that is well-suited for small to medium-sized projects. It offers a variety of features to help you build and deploy your code quickly and easily, and it is a good choice if you want a simple and fast solution for building and deploying your code.
