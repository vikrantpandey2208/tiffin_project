// app.get("/api/verify", (req, res, ) => {
//   // Get the token
//   const { query } = req;
//   const { token } = query;
//   // ?token=test
//   // Verify the token is one of a kind and it's not deleted.
//   SellerSession.find(
//     {
//       _id: token,
//       isDeleted: false,
//     },
//     (err, sessions) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: "Error: Server error",
//         });
//       }
//       if (sessions.length != 1) {
//         return res.send({
//           success: false,
//           message: "Error: Invalid",
//         });
//       } else {
//         // DO ACTION
//         return res.send({
//           success: true,
//           message: "Good",
//         });
//       }
//     },
//   );
// });
