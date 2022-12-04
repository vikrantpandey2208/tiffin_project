const User = require("../modals/UserSchema");
const UserSession = require("../modals/UserSessionSchema");

module.exports = (app) => {
  app.post("/api/signin", (req, res) => {
    const { body } = req;
    const { data } = body;
    const { password } = data;
    let { email } = data;

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
        newUser.firstname = data.firstName;
        newUser.lastname = data.lastName;
        newUser.phone = data.phone;
        newUser.password = newUser.generateHash(password);
        newUser.save((err) => {
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
  app.post("/api/login", (req, res) => {
    const { body } = req;
    const { data } = body;
    const { password } = data;
    let { email } = data;

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
        userSession.save((err) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: server error",
            });
          }
          return res.send({
            success: true,
            message: "Valid sign in",
            user: user,
          });
        });
      },
    );
  });

  // logout
  app.get("/api/logout", (req, res) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.updateMany(
      {
        userId: token,
        isDeleted: false,
      },
      {
        $set: {
          isDeleted: true,
        },
      },
      null,
      (err) => {
        if (err) {
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
};
