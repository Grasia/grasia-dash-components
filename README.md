**Attention!** This repo is **unmantained**.

If you are looking for the Import component, have a look at https://github.com/zouhairm/dash_defer_js_import

# grasia-dash-components

[Dash](https://github.com/plotly/dash) UI component suite for [GRASIA](https://github.com/Grasia/) projects.

## Use it

If you just want to use any of the components offered by this suite, add it to your system with `pip install grasia-dash-components` and import it with `import grasia_dash_components`.

You can see a very basic example of its usage in `usage.py` or in https://github.com/Akronix/test_grasia_dash_components.

## Hack it
If you want to hack with the code, keep reading.

```sh
# Install dependencies
$ npm install

# Watch source for changes and build to `lib/`
$ npm start
```

Go to this link to learn more about [Dash plugins](https://plot.ly/dash/plugins).

### Play with the components

If you just want to play around with the available components that grasia-dash-components offers you, just follow the instructions below:

```sh
# clone git repo and enter there
$ git clone https://github.com/Grasia/grasia-dash-components && cd grasia-dash-components
# create a Python3 new virtual environment
$ virtualenv -p python3 venv/
# activate it
$ source venv/bin/activate
# and install dependencies
$ pip install -r requirements.txt
# generate metadata.json of the Components
$ npm run prepublish
# launch the playground
$ python usage.py
```

Feel free to modify usage.py source file and play with the different options of the components.

### React demo server

For easy developing and testing of the react components, you can start up a demo development server:

```sh
$ npm run demo
$ open http://localhost:9000
```

You have to maintain the list of components in `demo/Demo.react.js`.

### Code quality and tests

#### To run lint and unit tests:

```sh
$ npm test
```

#### To run unit tests and watch for changes:

```sh
$ npm run test-watch
```

#### To debug unit tests in a browser (Chrome):

```sh
$ npm run test-debug
```

1. Wait until Chrome launches.
2. Click the "DEBUG" button in the top right corner.
3. Open up Chrome Devtools (`Cmd+opt+i`).
4. Click the "Sources" tab.
5. Find source files
  - Navigate to `webpack:// -> . -> spec/components` to find your test source files.
  - Navigate to `webpack:// -> [your/repo/path]] -> grasia-dash-components -> src` to find your component source files.
6. Now you can set breakpoints and reload the page to hit them.
7. The test output is available in the "Console" tab, or in any tab by pressing "Esc".

#### To run a specific test

In your test, append `.only` to a `describe` or `it` statement:

```javascript
describe.only('Foo component', () => {
    // ...
})l
```

### Testing your components in Dash

1. Build development bundle to `lib/` and watch for changes

        # Once this is started, you can just leave it running.
        $ npm start

2. Install module locally (after every change)

        # Generate metadata, and build the JavaScript bundle
        $ npm run install-local

        # Now you're done. For subsequent changes, if you've got `npm start`
        # running in a separate process, it's enough to just do:
        $ python setup.py install

3. Run the dash layout you want to test

        # Import grasia-dash-components to your layout, then run it:
        $ python my_dash_layout.py


### Installing python package locally

Before publishing to PyPi, you can test installing the module locally:

```sh
# Install in `site-packages` on your machine
$ npm run install-local
```

### Uninstalling python package locally

```sh
$ npm run uninstall-local
```
