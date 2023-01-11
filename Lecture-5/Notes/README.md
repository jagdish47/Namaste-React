# What is the difference between Named Export, Default export and \* as export ?

**Named Export :** <br>
In React, named exports allow you to export one or more components or utility functions from a module, so that you can use them in other modules or components. When you use named exports, you specify the name of the exported item explicitly, and you can use this name to import the item in other modules or components.

For example, you might create a module called Button which exports a Button component, and another module called TextInput which exports a TextInput component, like this:

```
export const Button = (props) => {...};
export const TextInput = (props) => {...};

```

Then you can use the import statement in another module or component to bring in the exported components by their name and use them as regular react components

```
import { Button, TextInput } from './components';

function Form() {
  return (
    <div>
      <Button label="Submit" />
      <TextInput label="Name" />
    </div>
  )
}
```

**Default Export :** <br>
In a React application, a default export is used when a component is exported from a file as the default export. This means that the component can be imported into another file without using curly braces to specify the named export.
It's also possible for a file to have both default exports and named exports, In that case default export can be imported as shown above and the named exports can be imported by specifying the names inside curly braces {}.

In general, when you write a component in React, it's common to use export default to make the component available for other files to import it.

** (\*)as export :** <br>
This would import all the named exports of the file and provide them under the alias myComponents so you can access the exports by doing :

```
import * as myComponents from './MyComponent';

```

This can be useful if you want to import multiple values from a module, but the names of the values are already taken in the current scope, or if you want to group multiple values under a single namespace to make the code more organized.
It's also useful when you have long function/class names and you want to use shorter version.
Please note that you would not be able to access the default export in this way.

# What is the importance of config.js file ?

In a React application, a config.js file serves the same purpose as it would in any other type of application - it is a central place to store configuration settings that are specific to the application. However, in a React application, the config.js file is typically used to store configuration settings that are specific to the client-side of the application, rather than server-side settings.

The contents of a config.js file for a React application may include:

API endpoint URLs for making requests to the back-end
External service keys or tokens (such as for Firebase or Google Maps)
Environment-specific settings (such as whether to enable debugging or profiling)

In a React Application, One important use case of config.js file is to manage the different environments, as you are developing and testing the app in development, and once it's ready, you will deploy it to a production environment. Having the config.js file makes it easier to switch the environment and not effecting the rest of the code, you can use a process.env variables to switch the environment, but it's a good practice to keep these environment variables in a config file.

It's also good practice to use environment variables to configure the client-side React application as well, but having a config.js file gives a central location to keep all the client-side configurations and make it easy to manage and version control.

In summary, a config.js file is an important part of organizing and managing the configuration settings of a React application, and allows for easier management and deployment of the application in different environments.

Whatever hard coded data we store in config.js file

# What are React Hooks?

React Hooks are a way to use state and other React features in functional components, instead of having to use class-based components.
Hooks were introduced in React 16.8 as a way to write and manage component logic in functional components.

Hooks are special functions that allow you to "hook into" React state and lifecycle features from functional components.

Hooks are available as a way to replace certain aspects of class-based component's behavior like managing state and side-effects and component's lifecycle.

# Why do we need a useState Hook?

useState is a React Hook that allows you to add state to a functional component and update it. Prior to the introduction of Hooks, state management could only be achieved in class-based components using this.state and this.setState.

The useState Hook provides a way to manage state in functional components, making it possible to write functional components that are just as powerful as class-based components.

Here are a few reasons why useState is useful:

Simplifies state management: useState makes it simple to add and update state in a functional component. It provides a clear and easy-to-understand syntax for managing state, which can make your code more readable and maintainable.

Makes functional components more powerful: By allowing functional components to manage state, useState makes it possible to write functional components that are just as powerful as class-based components. This allows you to choose the best approach for your use case, whether it's a functional or class-based component.

Enables better code organization: useState allows you to extract stateful logic from a component and share it across multiple components, this improves code organization and makes it easier to maintain and reason about the state changes.

Encourages the use of functional components: useState Hooks encourages the use of functional components, since it allows state management in functional components and eliminates the need to use class-based components for the sake of managing state.

In summary, useState is a powerful and important feature that is needed for state management in functional components. It allows you to add state to a functional component, making it possible to write functional components that are just as powerful as class-based components. Additionally, useState improves code organization, making it easier to maintain and reason about state changes.

```
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
```
