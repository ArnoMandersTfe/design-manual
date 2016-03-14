'use strict';
/* global require */

var DesignManual = require('../../index');

new DesignManual({
  output: 'test/tmp/',
  pages: 'test/fixtures/pages/',
  components: 'test/fixtures/data/components.json',
  websiteCss: ['test/fixtures/assets/style1.css', 'test/fixtures/assets/style2.css'],
  meta: {
    domain: 'mywebsite.com',
    title: 'My Design Manual',
    avatar: 'http://placehold.it/80x80'
  },
  subnav: [
    {
      domain: 'google.com',
      title: 'Title',
      href: 'http://www.google.com',
      avatar: 'http://placehold.it/80x80'
    },
    {
      domain: 'google.com',
      title: 'Title',
      href: 'http://www.google.com',
      avatar: 'http://placehold.it/80x80'
    }
  ],
  headHtml: '<script>console.log("im in the head");</script>',
  bodyHtml: '<script>console.log("im in the footer");</script>',
  contentsId: '#contents'
});