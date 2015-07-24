#### Installation

1. Install the following utilities:
    - [Git](http://git-scm.com/downloads): a free and open source distributed version control system.
        - Unfamiliar with Git? I recommend using [GitHub for Windows](https://windows.github.com/) or [GitHub for Mac](https://mac.github.com/).
    - [Node.js](http://nodejs.org/download/): a software platform that is used to build server-side applications.
    - [Grunt](http://gruntjs.com/getting-started): a JavaScript task runner.

            $ sudo npm install -g grunt-cli
    - [Bower](http://bower.io/#installing-bower): a package manager for the web.

            $ sudo npm install -g bower
2. Make sure you have a github account set up with your SSH key

3. Clone this repository to wherever you prefer to keep your projects:

        $ git clone https://github.com/erundle/patternfly-examples.git

4. Navigate to where you've installed Teradata UI Platform:

        $ cd ~/code/patternfly-examples

5. Install the dependencies:

        $ npm install
        $ bower install


#### Running the App

- Run the app from your localhost:

        $ grunt serve

- The development harness should automatically open in your default browser. If not, visit [http://localhost:8090/](http://localhost:8090/) in your preferred browser.

#### Building the App

- Building the minified version of the application

		$ grunt build

#### Deploying the App

- The GIT master branch is currently being deployed to: [http://patternfly-erundle.rhcloud.com/dist/](http://patternfly-erundle.rhcloud.com/dist/)