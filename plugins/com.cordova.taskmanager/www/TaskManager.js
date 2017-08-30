var exec = require('cordova/exec');

var TaskManager = function () {
};

TaskManager.login = function (arg0,success, error) {
  exec(success, error, "TaskManager", "login", [arg0]);
}

module.exports = TaskManager;
