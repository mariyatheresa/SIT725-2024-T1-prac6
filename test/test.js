var expect = require("chai").expect;
var assert = require("assert");
var request = require("request");
var sampleFood = {
  foodName: "New Test Food",
  imageURL: "Sample URL",
  review: "This is a new food to test API",
};
describe("POST METHOD", function () {
  var url = "http://localhost:2008/submit-feedback";

  it("post food to DB", function (done) {
    request.post(
      { url: url, form: sampleFood },
      function (error, response, body) {
        let parsedBody = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsedBody.message).to.equal("Success");
        done();
      }
    );
  });
});

describe("GET METHOD", function () {
  it("Retrieved Feedbacks from Database", function (done) {
    var url = "http://localhost:2008/api/reviews";
    request.get(url, function (error, response, body) {
      const reviews = JSON.parse(body);
      expect(response.statusCode).to.equal(200);
      expect(reviews).to.be.an("array");
      done();
    });
  });
});
