var should = require('should'); 
var request = require('supertest'); 
var assert = require('assert'); 
var winston = require('winston');
var requireHelper = require('./require_helper');
var app = requireHelper('app');

var url = 'http://localhost:3000'; //server address

//To check signup api
 describe('Account', function() {
    it('checking for user signup', function(done) {
      var profile = {
        name: 'pradeep',
        username: 'test123',
        email: 'pradeep@test.com',
        password: 'test'
      };
    request(url)
    .post('/signup')
    .send(profile)
    .expect(200,done);
    });
});

//To check signin api
 describe('', function() {
    it('checking for user signin', function(done) {
      var profile = {
        email: 'pradeep123@test.com',
        password: 'test'
      };  
        request(url)
      .post('/signin')
      .send(profile)
    .expect(200,done);
        });
    });