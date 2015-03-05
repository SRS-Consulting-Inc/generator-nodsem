var should = require('should'); 
var request = require('supertest'); 
var assert = require('assert'); 
var winston = require('winston');

var url = 'http://localhost:3000'; //server address



//To check signup api
 describe('Mocha test case 1', function() {
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
 describe('Mocha test case 2', function() {
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

