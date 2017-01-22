## Hangman game
A basic game of Hangman written in React using `create-react-app` scaffolding.

Visit [http://rh.oviprojects.xyz/](http://rh.oviprojects.xyz/) to play the game.

There are no bells and whistles to be found here. Consider this project as an experiment in restraint, and as a good tutorial for developing in `React` without additional libraries.

- This project does not adhere to the `CSS-in-JS` movement, so there's no `radium`, `glamor`, `styled-components`, `uranium`, `smart-css`, or `aphordite`.
- The language level is `ES6` with `JSX`, so no `public class fields`, no `function bind syntax`, no `zones`, no `Observable`, no `decorators` or other stage 0 up to 2 features. I love `Babel` as much as anyone, but I'd like someone reading this project 4 years from now to still understand the syntax.
- Because of `create-react-app` I don't directly use `webpack`, at least on the surface, because under the hood that's exactly what the project is built with. Not having to write the configuration file lets me concentrate on the code.
- In addition there is no `Redux`, `Flux`, `Flummox`, `Alt`, `Fluxxor`, `MartyJS`, `McFly`, `Fluxible`, `Delorean` (kinda sensing a theme here), `Lux`, `Reflux` or `Fluxy`. State management libraries are insanely great, but only if you need them.
- I could have used a backend but I'm not building an MMO, so I decided against it. Obviously that means there's no `Next.js`.
- I like to think JavaScript has come a long way since I first started using it circa 2005, so I choose not to use: `TypeScript`, `CoffeeScript`, `LiveScript` or `Elm`, though I'd love to write `Elm` one day.
- `create-react-app` uses only CSS so there's no `LESS`, `SASS` or `Stylus`.
- And since I'm using `ES6` I didn't need `lodash`, `underscore` or `Ramda`.

## FAQ
- Q: Why did you write `react-hangman`?
- A: Because I love games and they're fun to write.
- Q: Still, this game is very simple. Why write it at all?
- A: It was a learning experience. Even though I've been writing `React` for almost a year, I still found new things to learn while writing this game.
- Q: Is it really possible to write a web app in 2017 using only `React`?
- A: Yes.
- Q: But, you're using `React15`, why didn't you use stateless components?!
- A: The real question is, had I did, would my code have been any better for it?
- Q: Yes.
- A: Why?
- Q: Because stateless components are better.
- A: ...
- Q: How did you manage state without Redux?!
- A: By using local `React` state.
- Q: What's that?
- A: It's `React`'s built-in state management system. Each component can store arbitrary data and pass it down to its children via `props`.
- Q: That sounds very difficult. You could've at least used `Flux` if `Redux` is too hard for you to understand.
- A: You don't need state management for a hangman game.
- Q: No, I think you don't understand `Redux`. It's so much faster than anything else.
- A: Fast at what?
- Q: At everything.
- A: Next question.
- Q: I can't find your `webpack.config.js` file, where is it?
- A: I'm using the excellent [create-react-app](https://github.com/facebookincubator/create-react-app) project and it takes care of that for you.
- Q: So how do you update the `webpack` config?
- A: I don't.
- Q: Are you using `webpack2`?
- A: No.
- Q: Why not?
- A: How would it help me in a hangman game?
- Q: `webpack2` just got released.
- A: Is that a question?
- Q: How did you bundle your app?
- A: `yarn build`
- Q: So cool that you're using `yarn`. It's so much faster than `npm`!
- A: Um.. yeah. `yarn` is pretty cool.
- Q: The game's bundle size is huge! Can you make it smaller?
- A: The only reason why the bundle has a large file size is because I embedded [an-array-of-english-words](https://github.com/zeke/an-array-of-english-words), which is a pretty big dependency. Had I used a backend, I would've saved some KB, at the expense of network latency, of course.
- Q: So.. can you make the bundle smaller?
- A: No.
- Q: What other dependencies did you use?
- A: You *could* check `package.json`, you know. The only dependencies are `create-react-app`, `an-array-of-english-words`, and `node-uuid`.
- Q: `node-uuid`?
- A: I needed a way to generate consistently unique keys for the components that make up the word during the game. The only entropy I had was the letter, but a word can have the same letter more than once, so I used `node-uuid` to generate a unique identifier.
- Q: How did you write CSS? I thought browsers were already running `LESS` natively?!
- A: Browsers only support CSS... There's no support for anything other than CSS in create-react-app, and, frankly, I'm glad they didn't add it.
- Q: You mean you don't know `LESS`?
- A: I do know how to write `LESS` but for a simple app it doesn't bring much value.
- Q: It is better, though. You should learn it.
- A: You should teach me...
- Q: How is the hangman drawn?
- A: With `SVG`.
- Q: `SVG` is finished. Why didn't you use `HTML5 Canvas`?
- A: ...it's just a man hanging from a stick. Why would I use the `Canvas` API for that?
- Q: `SVG` is..
- A: Yeah, you know what? I used `Canvas` after all.
- Q: What library did you use for the stick man?
- A: I just rendered it with the S.. `Canvas` API with inspiration from another [Hangman project](https://github.com/dannynelson/angular-hangman).
- Q: Are you using `Jest` to test your app?
- A: Although I'm a strong advocate of unit-tests this game is simple enough that I didn't care enough to write tests for it.
- Q: `Mocha` then?
- A: There are no tests in the project, except for a default one generated by `create-react-app`.
- Q: But how will you accept pull requests without tests?
- A: I won't be accepting any PRs. The game is done.
- Q: You mean your game is not open-source?
- A: No, I mean the game is finished. I'm not taking it any further.
- Q: How/where did you host the bundle?
- A: [Surge](https://surge.sh).
- Q: How can I get your project from `npm`?
- A: This project is not on `npm` and it won't be published. It's not a library, it's just a sample project on how to use `React` to write a fairly basic game.
- Q: What IDE did you use to write the source code?
- A: Atom with some plugins for `Babel` and `ESLint`.
- Q: Why didn't you...
- A: Please stop.

## License
MIT
