const mongoose = require("mongoose");

const helper = require("../api/helpers/Id_code_generator.js");
const bcrypt = require("bcrypt");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require("../api/models/user");

async function runAdmin() {
  try {
    bcrypt.hash("trader@2020", 10, (err, hash) => {
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        code: helper.randomStr(5),
        email: "manager@nmarketradezone.com",
        password: hash,
        __v: 0,
      });

      newUser.save();
      console.log(`created Admin`);
    });
  } catch (err) {
    console.log(err);
  }
}

runAdmin();
