const Seller = require("./modals/Seller");
const SellerSession = require("./modals/SellerSession");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, "photo" + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

module.exports = (app) => {
  app.post("/api/seller-signin", upload.single("photo"), (req, res, next) => {
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
  app.post("/api/seller-login", (req, res, next) => {
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
        userSession.save((err, doc) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: server error",
            });
          }
          // create token
          const token = user._id;
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
  app.get("/api/seller-logout", (req, res, next) => {
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
      (err, sessions) => {
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

  // verify
  app.get("/api/verify", (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    SellerSession.find(
      {
        _id: token,
        isDeleted: false,
      },
      (err, sessions) => {
        if (err) {
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
