const Seller = require("../modals/SellerSchema");
const SellerSession = require("../modals/SellerSessionSchema");

module.exports = (app) => {
  app.post("/api/seller-signin", (req, res) => {
    const { body } = req;
    const { data } = body;
    const { password } = data;
    let { email } = data;
    const { photo } = data;

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

    Seller.find(
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
        const newUser = new Seller();
        newUser.email = email;
        newUser.firstname = data.firstName;
        newUser.lastname = data.lastName;
        newUser.phone = data.phone;
        newUser.password = newUser.generateHash(password);
        newUser.photo = photo;
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
  app.post("/api/seller-login", (req, res) => {
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
    Seller.find(
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
        const userSession = new SellerSession();
        userSession.sellerId = user._id;
        userSession.save((err) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: server error",
            });
          }
          // create token
          return res.send({
            success: true,
            message: "Valid sign in",
            seller: user,
          });
        });
      },
    );
  });

  // logout
  app.get("/api/seller-logout", (req, res) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    SellerSession.updateMany(
      {
        sellerId: token,
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
