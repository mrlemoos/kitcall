# KitCall!

:warning: As of September 16, 2022, kitcall package is **deprecated** in favour of [grabkit](https://github.com/mrlemoos/grabkit).

`kitcall` is a lib focused on calling asynchronous HTTP APIs through a problem-freely, faster and more semantic way.

### Installation

Yarn                                   |  PNPM                               | NPM
:------------------------------------- | :---------------------------------- | :------------------------------ |
`yarn install kitcall`          | `pnpm add kitcall`           | `npm install kitcall`    |

### Code examples

Take a look how to use it:

```typescript

import call from 'kitcall';

const request = call({
  baseURL: 'https://api.github.com/users',
});

async function myAsyncFunction() {
  const [response, statusCode] = await request('GET /mrlemoos/repos');

  console.log(response);
  // List my repos here :)
}

// Or

const request = call()

async function myAsyncFunction() {
  const [response, statusCode] = await request('GET https://api.github.com/users/mrlemoos/repos');
  
  console.log(response);
  // List my repos here too!
}

```

But we're not done just yet, call can help you on treating the errors your machine or the remote server returns when a HTTP request is made, either globally or locally.

```typescript

const request = call({
  baseURL: 'https://api.github.com/users',
});

// Locally

async function myAsyncFunction() {
  try {
    const [response, statusCode] = await request('GET /mrlemoos/repos12u0939asda0sd0');
  } catch (err) {
    // Error caught down here :)
  }
}

// Or globally

const request = call({
  baseURL: 'https://api.github.com/users',
  onCatch: (err) => {
    // Error caught up here :)
  }
})

async function myAsyncFunction() {
  const [response, statusCode] = await request('GET /mrlemoos/repos12u0939asda0sd0');
}

```

### Customization

In the `CallOptions` parameter, we have these options:

| Property         | Type definition                            |
| :--------------- | :----------------------------------------- |
| onCatch          | ((error: Error) => void) | undefined       |
| onSuccess        | (result: unknown) => void | undefined      |
| baseURL          | string | undefined                         |

### Conclusion

1. We add the HTTP method at first and in uppercase, giving the explicitness so a project developers know shortly which method is being used over which endpoint of their application.

2. It is a multiple instance possibility. That means that kitcall can be created in as many files as you like, adding single responsibility to specific pieces of your code.

3. If you want to use a `baseURL` to determine the URL where the service is running, it's way easier to get the data from with just passing the endpoint after the method, so we don't need to rewrite the protocol, the hostname and so on if we need to just call a request.

4. Happy coding :smile:
