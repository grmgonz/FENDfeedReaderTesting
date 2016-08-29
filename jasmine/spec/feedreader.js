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
    'use strict';

    /*RSS Feeds Definitions TEST SUITE*/
    describe('RSS Feeds.', function() {


        /*TEST 1: RSS Feeds are Defined*/
        it('are defined.', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            });


        /*TEST 2: RSS Feed URLS are Defined*/
        it('have URLs defined.', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            });


        /*TEST 3: RSS Feeds Names Are Defined & Aren't Empty*/
        it('have a name defined and names are not empty.', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(true);
            });
        });
    });


    /*The Menu TEST SUITE*/
    describe('The Menu', function() {
        var body = $('body'),
        menuIcon = $('.menu-icon-link');


        /*TEST 4: Menu Element is Hidden by Default */
        it('is hidden by default.', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });


        /*TEST 5: Menu Changes Visibility When it's Icon is Clicked*/
        it('changes visibility when icon is clicked.', function() {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });


    /*Initial Entries TEST SUITE*/
    /*Done() is used as a callback to load feeds before tests are run */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });


    /*TEST 6: Menu Changes Visibility When it's Icon is Clicked*/
        it('have at least one entry.', function() {
            var entries = $('.feed .entry').length;
            expect(entries).toBeGreaterThan(0);
        });
    });


    /*New Feed Selection TEST SUITE*/
    /*Done() is used as a callback to load feeds before tests are run */
    describe('New Feed Selection', function() {
        var oldFeed;
        var newFeed;


    /*TEST 7: Content Changes When New Feed is Loaded*/
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                console.log('loadFeed is finished');
                done();
            });
        });


        it('changes the content displayed.', function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                expect(oldFeed).not.toBe(newFeed);
                done();
            });
        });
    });
}());
