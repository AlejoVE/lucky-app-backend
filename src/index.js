const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const app = express();
require('dotenv').config();

//cors
app.use(cors());

app.use(express.json());

//database
dbConnection();

const PORT = process.env.PORT || 3000;

app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
	console.log(`Server is working on port ${PORT}`);
});
