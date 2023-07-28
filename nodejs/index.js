const csl = require("@emurgo/cardano-serialization-lib-nodejs");
const wrappedCsl = require('@mlabs-haskell/csl-gc-wrapper')(csl);

module.exports = wrappedCsl;
