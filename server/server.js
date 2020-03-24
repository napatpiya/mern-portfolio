const express = require('express');
const cors = require('cors');
const app = express();
const db_name = "petDB";
const port = 8000;
// const cookieParser = require('cookie-parser');

require('./config/mongoose.config')(db_name);

// app.use(cookieParser());
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/pet.route')(app);

app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
})