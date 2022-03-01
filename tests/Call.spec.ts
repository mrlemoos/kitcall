import call from "../src/Call";

class GitHubProfileLinkMock {
  constructor(public baseURL: string) {}
}

describe("Call unit tests", () => {
  const mock = new GitHubProfileLinkMock("https://api.github.com/users");
  it(`should attempt to call 'mrlemoos' profile at ${mock.baseURL}`, async () => {
    const request = call({ baseURL: mock.baseURL });
    const [res, statusCode] = await request("GET /mrlemoos");

    console.log(`1. response received is '${JSON.stringify(res, null, 2)}'`);
    console.log(`2. status code is '${statusCode}'`);

    expect(res).toBeDefined();
    expect(statusCode).toBe(200);
  });
});
