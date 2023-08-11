const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// app.post('/login', (req, res) => {
//     const enteredEmail = req.body.email;
//     const enteredPassword = req.body.password;

//     if (enteredEmail === credential.email && enteredPassword === credential.password) {
//         // Authentication successful, redirect to index.html
//         res.redirect('/http://127.0.0.1:5500/index(5).html');
//     } else {
//         // Invalid credentials, render login page with an error message
//         res.render('login', { error: "Invalid credentials" });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
