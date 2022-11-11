const User = require("./modals/User");

module.exports = (app) => {
  app.post("/api/signin", (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;

    if (!email) {
      return res.send({
        success: false,
        message: "Error: Email cannot be blank.",
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: Password cannot be blank.",
      });
    }
    email = email.toLowerCase();
    email = email.trim();
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.find(
      {
        email: email,
      },
      (err, previousUsers) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error",
          });
        } else if (previousUsers.length > 0) {
          return res.send({
            success: false,
            message: "Error: Account already exist.",
          });
        }
        // Save the new user
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: Server error",
            });
          }
          return res.send({
            success: true,
            message: "Signed up",
          });
        });
      },
    );
  }); // end of sign up endpoint

  // sign in module
  app.post("/api/login", (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;
    if (!email) {
      return res.send({
        success: false,
        message: "Error: Email cannot be blank.",
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: Password cannot be blank.",
      });
    }
    email = email.toLowerCase();
    email = email.trim();
    User.find(
      {
        email: email,
      },
      (err, users) => {
        if (err) {
          console.log("err 2:", err);
          return res.send({
            success: false,
            message: "Error: server error",
          });
        }
        if (users.length != 1) {
          return res.send({
            success: false,
            message: "Error: Invalid Email not found",
          });
        }
        const user = users[0];
        if (!user.validPassword(password)) {
          return res.send({
            success: false,
            message: "Error: Invalid Password",
          });
        }
        // Otherwise correct user
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
          if (err) {
            console.log(err);
            return res.send({
              success: false,
              message: "Error: server error",
            });
          }
          return res.send({
            success: true,
            message: "Valid sign in",
            token: doc._id,
          });
        });
      },
    );
  });

  // logout
  app.get("/api/logout", (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.findOneAndUpdate(
      {
        _id: token,
        isDeleted: false,
      },
      {
        $set: {
          isDeleted: true,
        },
      },
      null,
      (err, sessions) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: "Error: Server error",
          });
        }
        return res.send({
          success: true,
          message: "Good",
        });
      },
    );
  });

  // verify
  app.get("/api/verify", (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.find(
      {
        _id: token,
        isDeleted: false,
      },
      (err, sessions) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: "Error: Server error",
          });
        }
        if (sessions.length != 1) {
          return res.send({
            success: false,
            message: "Error: Invalid",
          });
        } else {
          // DO ACTION
          return res.send({
            success: true,
            message: "Good",
          });
        }
      },
    );
  });
};
