const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

/*the database module */
const { database } = require('./config/database');

//Connect with the database
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set('useCreateIndex', true);

// Initial the app
const app = express();

//Define the PORT
const PORT = process.env.PORT || 5000;

//cors Middleware
app.use(cors());
//bodyParser Middleware
app.use(bodyParser.json());
//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Check the user role
const roleCheck = (req, res, next) => {
  const role = req.originalUrl.split('/')[2];
  /*Bring the auth strategy */
  require('./config/passport')(role, passport);
  next();
}
app.use(roleCheck);



//Bring in the user routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Bring the admin routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);







app.get('/api/hello', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Server started on the PORT ${PORT}`);
});