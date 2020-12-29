# react-animation-loader

This is simple animation loader with some css animation and an image with moving animation. Check it out.

## Table of Contents

- [Install](#install)
- [Example](#example)
- [Props](#props)
- [License](#license)

# Install

```sh
$ npm install react-animation-loader
```
  or
```sh
$ yarn add react-animation-loader
```

## Example
![gif1](https://raw.githubusercontent.com/radhakishan404/react-animation-loader/master/demo.gif)

```JSX
import React, { useEffect, useState } from 'react';
function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000);
    }, []);
    
    return (
        <div>
            <Loader isLoading={isLoading} bgColor="f2f2f2" icon="https://s.gravatar.com/avatar/d2ce5c403a09447328dc8354aaa915ba?size=100&default=retroa" />
        </div>
    )
}

export default App;
```
## Props

- **isLoading** (bool) (required)
- **bgColor** (string) (required)
- **icon** (string)


## License

[MIT © Radhakishan Jangid](https://radhakishan.vpran.in)
