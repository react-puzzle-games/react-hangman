## Hangman game
A basic game of Hangman written in React using create-react-app scaffolding. There are no bells and whistles to be found here.

There is no CSS-in-JS, no ES2016, ES2017, no Webpack, no Redux, Flux, Flummox, no Next.js, no TypeScript, LiveScript, Elm, no LESS, SASS or Stylus.

## FAQ
- Q: Is it really possible to write a web app in 2017 without all of the above?
- A: Yes.
- Q: But, you're using `React` 15, why didn't you use stateless components?!
- A: The real question is, had I did, would my code have been any better for it?
- Q: Yes.
- A: Why?
- Q: Because stateless components are better.
- A: ...
- Q: How did you manage state without Redux?!
- A: By using local React state.
- Q: What's that? Is it like `localStorage`?
- A: ...
- Q: You could've at least used `Flux`!
- A: You don't need state management for a hangman game.
- Q: Yes but your code could have been better, why not use it?
- A: Next question.
- Q: I can't find your `webpack.config.js` file, where is it?
- A: I'm using the excellent `create-react-app` project and it takes care of that for you.
- Q: So how do you update the `webpack` config?
- A: I don't.
- Q: Are you using `webpack` 2?
- A: No.
- Q: Why not?
- A: How would it help me in a hangman game?
- Q: `webpack` 2 just got released.
- A: Is that a question?
- Q: How did you bundle your app?
- A: `yarn build`
- Q: The bundle size is huge! Why didn't you use `webpack`'s code split feature?!
- The only reason why the bundle has a large file size is because I embedded `an-array-of-english-words`, which is a pretty big dependency. Had I used a backend, I would've saved some KB, at the expense of network latency, of course.
- Q: So.. can you make the bundle smaller?
- A: No.
- Q: How did you write CSS? I thought browsers were already running LESS natively?!
- A: There's no support for anything other than CSS in create-react-app, and, frankly, I'm glad they didn't add it.

## License
MIT
