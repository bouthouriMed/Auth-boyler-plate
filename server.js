const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

// Use express body parser
app.use(express.json({ extended: false }));

// Use routes
app.use('/api/user', require('./routes/api/userRoute'))
app.use('/api/auth', require('./routes/api/authRoute'))

// Listen to the servere
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at Port ${PORT}...`));
