const express = require("express");
const app = express();
const bfhlRoutes = require("./routes/bfhlRoutes");

app.use(express.json());
app.use("/bfhl", bfhlRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});