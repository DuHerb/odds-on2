// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";

// admin.initializeApp();
// const db = admin.firestore();


// // // Start writing Firebase Functions
// // // https://firebase.google.com/docs/functions/typescript
// //
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// export const taskRunner = functions.pubsub
//     .schedule("* * * * *").onRun( async (context) => {
//       db.collection("log").add({
//         message: "tick",
//         type: "everyminute",
//         timeStamp: admin.firestore.Timestamp.now(),
//       })
//           .then(() => {
//             runEvents();
//           });
//     });

// const runEvents = async () => {
//   const query = db.collection("events");
//   const events = await query.get();

//   events.forEach((snapshot) => {
//     const {name, odds} = snapshot.data();
//     const hit = Math.floor((Math.random() * odds) + 1) === 1;
//     if (hit) {
//       db.collection("hitEvents").add(snapshot.data())
//           .then(() => db.collection("log").add({
//             type: "hitEvent",
//             timeStamp: admin.firestore.Timestamp.now(),
//             message: name,
//           }))
//           .catch(() => {
//             db.collection("log").add({
//               type: "error",
//               timeStamp: admin.firestore.Timestamp.now(),
//               message: "db hitEvent write error",
//             });
//           });
//     }
//   });
// };
