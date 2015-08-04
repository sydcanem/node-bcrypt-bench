var bcrypt = require('bcrypt');

// Vector inputs
var pass_extender = 'ZE18QHA2dE1aKYGWfxIJTlfqxqo0CXBZrWVoYWj6o9UBN3fQ4yQcdhxDIJkaQzy';
var pass          = 'awooken256295';

// Work factor - Increase this then check how much time it took to compare.
var hash_rounds = 8;

bcrypt.genSalt(hash_rounds, function (err, salt) {

  bcrypt.hash((pass + pass_extender), salt, function (err, hash) {
    if (err) {
      return console.log(err);
    }

    console.log('hashed password : ' + hash);
    console.log('starting bcrypt compare');
    console.time('bcrypt');

    bcrypt.compare((pass + pass_extender), hash, function (err, response) {
      if (err) {
        return console.log(err);
      }
      console.timeEnd('bcrypt');
    });

  });

});
