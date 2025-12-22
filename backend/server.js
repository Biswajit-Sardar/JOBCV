const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();

app.use(cors());
app.use(express.json());

/***********************
  FIREBASE ADMIN INIT
************************/
admin.initializeApp({
  credential: admin.credential.cert(
    require("./firebase-admin-key.json")
  ),
});

/***********************
  AUTH VERIFY ROUTE
************************/
app.post("/auth", async (req, res) => {
  const { token } = req.body;

  try {
    const decodedUser = await admin.auth().verifyIdToken(token);

    res.status(200).json({
      success: true,
      uid: decodedUser.uid,
      email: decodedUser.email,
      name: decodedUser.name || "",
    });
  } catch (error) {
    res.status(401).json({ success: false });
  }
});

/***********************
  SERVER START
************************/
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
