"use strict";
exports.__esModule = true;
var log_class_1 = require("../lib/log-class");
var assert_1 = require("assert");
var winstonLog = new log_class_1.WinstonLog();
describe("Test For log ", function () {
    it("Write Log in File", function (done) {
        var username = "test", massage = "this is test ", type = "error";
        winstonLog.writeLog(type, massage, username);
        done();
    });
    it("Reade Log from File", function (done) {
        var options = {
            limit: 1,
            start: 0,
            order: 'desc',
            fields: ['message', 'timestamp']
        };
        winstonLog.readLog(options, function (result) {
            if (result == false) {
                assert_1.fail("Don't Read File");
            }
            else {
                console.log(result);
                done();
            }
        });
    });
});
//# sourceMappingURL=log-test.js.map