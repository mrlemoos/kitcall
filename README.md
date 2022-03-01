# KitCall!

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

| Property         | Type definition                               |
| :--------------- | :-------------------------------------------- |
| onCatch          | `((error: Error) => void) | undefined`        |
| onSuccess        | `(result: unknown) => void | undefined`       |
| baseURL          | `string | undefined`                          |

### Conclusion

With the 