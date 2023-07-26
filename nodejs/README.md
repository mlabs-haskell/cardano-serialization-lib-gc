### cardano-serialization-lib-gc-nodejs

This is a small library that provides a wrapper for managing garbage collection for  [cardano-serialization-library](https://github.com/Emurgo/cardano-serialization-lib). It does this by using a `FinalizationRegistry` object to keep track of objects that are no longer in use, and calling the `free()` method on them when they are finalized.

Simply use it the same way you use `cardano-serialization-lib-nodejs`.
