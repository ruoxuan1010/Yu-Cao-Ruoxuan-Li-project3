const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

const jobRouter = require('./controller/jobRouter');
const userRouter = require('./controller/userRouter');

mongoose
    .connect('mongodb://localhost:27017/jobboard', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api/job', jobRouter);
app.use('/api/user', userRouter);

// render any “built” React code when go to your node server
// easily deploy to Heroku 
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', function (req, res) {
//     console.log("received request");
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });


app.listen(process.env.PORT || 8000, () => {
    console.log('Starting server');
});
