# BurgerButton

BurgerButton is a simple and easy-to-use hamburger menu React component. It allows you to quickly add a responsive hamburger button to your web applications. Just copy and paste the code into your project, and you're good to go!

## Usage

1. Copy the `BurgerButton` component code from below:

```jsx
import React, { useState } from 'react';

const BurgerButton = () => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuIsOpen((state) => !state);
  };

  return (
    <div>
      <button
        className="flex flex-col gap-1"
        onClick={toggleBurgerMenu}
      >
        <div
          className={`w-10 h-1 transform rounded-md bg-green-200 duration-500 ${
            burgerMenuIsOpen
              ? 'rotate-45 origin-center translate-y-2'
              : 'rotate-0'
          }`}
        ></div>
        <div
          className={`w-10 h-1 transform bg-green-200 rounded-md ${
            burgerMenuIsOpen
              ? 'opacity-0'
              : 'opacity-100 duration-500'
          }`}
        ></div>
        <div
          className={`w-10 h-1 transform rounded-md duration-500 bg-green-200 ${
            burgerMenuIsOpen
              ? '-rotate-45 origin-center -translate-y-2'
              : 'rotate-0'
          }`}
        ></div>
      </button>

      {burgerMenuIsOpen && (
        <div className="pt-10">
          <h1>Menu</h1>
        </div>
      )}
    </div>
  );
};

export default BurgerButton;
```

2. Use the `BurgerButton` component in your React application:

```jsx
import React from 'react';
import BurgerButton from './BurgerButton'; // Adjust the path to your BurgerButton file

const App = () => {
  return (
    <div>
      {/* Your other content */}
      <BurgerButton />
    </div>
  );
};

export default App;
```

That's it! Now you have a functional hamburger button in your application. Customize the button's appearance by tweaking the CSS classes as needed. Feel free to use and modify the `BurgerButton` component in your projects. Happy coding! 🍔🚀

## License

This project is licensed under the [MIT License](LICENSE).
