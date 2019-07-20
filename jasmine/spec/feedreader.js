/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds).toEqual(jasmine.any(Array));
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a URL that is a non-empty string', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toEqual(jasmine.any(String));
                expect(feed.url).not.toBe('');
            }
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a name that is a non-empty string', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).toEqual(jasmine.any(String));
                expect(feed.name).not.toBe('');
            }
         });
    });


    /* This test suite is about the functioning of the menu */
    describe('The Menu', function() {

        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(document.querySelector('body')).toHaveClass('menu-hidden');
        });

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('opens and closes correctly when clicked', function() {
            document.querySelector('.menu-icon-link').click();
            expect(document.querySelector('body')).not.toHaveClass('menu-hidden');
            document.querySelector('.menu-icon-link').click();
            expect(document.querySelector('body')).toHaveClass('menu-hidden');
        });
    });

    /* This test suite ensures the feed is loading correctly */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('have at least one entry', function(done) {
            expect(document.querySelector('.feed .entry')).not.toBeNull();
            done();
        })
    });

    /* This test suite ensures feeds change correctly */
    describe('New Feed Selection', function() {
        let firstFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, done);
            });
        });

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('has changed the feed list after loading the new feed', function(done) {
            expect(document.querySelector('.feed').innerHTML).not.toEqual(firstFeed);
            done();
        });
     });
}());
