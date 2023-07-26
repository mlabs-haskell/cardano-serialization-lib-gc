# cardano-serialization-lib-gc

This is a small ESM library that provides a wrapper for managing garbage collection for  [cardano-serialization-library](https://github.com/Emurgo/cardano-serialization-lib). It does this by using a FinalizationRegistry object to keep track of objects that are no longer in use, and calling the `free()` method on them when they are finalized.

Two packages are provided: `-nodejs` and `-browser` versions.

Example usage with NodeJS:

```javascript
const lib = require("@mlabs-haskell/cardano-serialization-lib-gc-nodejs");

function fixture() {
  lib.PlutusData.new_bytes(
    new Uint8Array(Array(10000000).fill(0))
  );
}

setInterval(() => {
  for (let i = 0; i < 10; i++) {
    fixture()
  }
}, 500) // gc will trigger proxies and underlying pointers
```

If you want to use this library as a CommonJS module, use legacy [csl-gc-wrapper](https://github.com/mlabs-haskell/csl-gc-wrapper) instead.
