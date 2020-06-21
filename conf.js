const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
exports.config = {
  directConnect: true,
  specs: ["specs/cadastro.js"],
  baseUrl: "https://automacaocombatista.herokuapp.com",
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser
      .manage()
      .timeouts()
      .implicitlyWait(3000);

      jasmine.getEnv().addReporter(
        new SpecReporter({
          suite: { displayNumber: true },
          spec: {
            displayFailed: true,
            displayPending: true,
            displayDuration: true,
            displayStackTrace: true
          },
          summary: { displayFailed: true }
        })
      );

      var JasmineHtmlReporter = require("protractor-jasmine2-html-reporter");

      jasmine.getEnv().addReporter(
        new JasmineHtmlReporter({
          savePath: "reports",
          screenshotsFolder: ".shots",
          cleanDestination: false,
          fixedScreenshotName: true
        })
      );
  },
  //jasmineNodeOpts: { random: true, print: function() {} },
  capabilities: { browserName: "firefox" }
};
