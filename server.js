const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./backend/node_modules/router/authRoutes");
const cors = require('cors');
app.use(cors());
const PORT = 5000;

// 🔹 الاتصال بقاعدة بيانات MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/patrack", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Error connecting to MongoDB:", err));

// فحص حالة الاتصال بقاعدة البيانات
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected Successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

// 🔹 إعداد الميدل وير
app.use(cors());
app.use(express.json());
app.use("/api", authRoutes); // ربط الـ API

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
