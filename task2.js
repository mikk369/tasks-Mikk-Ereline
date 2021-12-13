require("dns").lookup(require("os").hostname(), function (err, add) {
  console.log("Result: " + add);
});
