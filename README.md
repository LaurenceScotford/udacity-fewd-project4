# Feedreader test

This project has been set up to run a series of tests to verify the functionality of the Feedreader app is as expected.


## How to run the tests?

To run the tests, copy the entire application to the web server, including the jasmine folder, and navigate an ES6 compliant browser to index.html in the application root.

The tests will run whenever the page is loaded. Test results are shown at the bottom of the web page.

## A note on the test code

All the tests are contained in jasmine/spec/feedreader.js. Note that, although jQuery is currently required by the app, the tests do not make use of JQuery functions on the basis that this might not be a dependency of future versions of the app.


## The tests

The following tests will be run each time the page is loaded or refreshed:

#### RSS Feeds are defined
This tests that the allFeeds variable, used by the app to contain the list of available feeds, is:
- defined
- a non-empty array.

#### RSS Feeds have a URL that is a non-empty string
This tests that each feed in allFeeds has a property called 'url' that is a non-empty string.

#### RSS Feeds have a name that is a non-empty string
This tests that each feed in allFeeds has a property called 'name' that is a non-empty string.

#### The Menu is hidden by default
This tests that the feeds menu is not visible when the page loads.

#### The Menu opens and closes correctly when clicked
This tests that, when the menu button is clicked the menu is shown, and when it is clicked again the menu is hidden.

#### Initial Entries have at least one entry
This tests that there is at least one entry in the feed, when the default feed is loaded.

#### New Feed Selection has changed the feed list after loading the new feed
 This tests that the content of the feed list changes after a new feed is loaded.
