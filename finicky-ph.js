
// Use https://finicky-kickstart.now.sh to generate basic configuration
// Learn more about configuration options: https://github.com/johnste/finicky/wiki/Configuration

module.exports = {
    defaultBrowser: "Google Chrome",
    handlers: [
      {
        match: [
          "https://www.apple.com/de*",
          "https://squifly.app*",
          "https://www.icloud.com*"
        ],
        browser: "Safari",
      },
    ],
  };