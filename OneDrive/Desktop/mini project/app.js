const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'shhhhha',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        req.flash('error', 'Please login first');
        return res.redirect('/login');
    }

    try {
        const payload = jwt.verify(token, 'shhhhha');
        const user = await userModel.findById(payload.userid);
        if (!user) {
            req.flash('error', 'Invalid session, please login again');
            res.clearCookie('token');
            return res.redirect('/login');
        }

        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        res.clearCookie('token');
        req.flash('error', 'Please login to continue');
        return res.redirect('/login');
    }
};

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.get("/profile", isLoggedIn, (req, res) => {
    console.log(req.user);
    res.render("profile", { user: req.user });
});

app.post('/register', async (req, res) => {
    const { username, name, age, email, password } = req.body;

    if (!username || !name || !age || !email || !password) {
        req.flash('error', 'Please fill in all fields');
        return res.redirect('/');
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            req.flash('error', 'User already exists');
            return res.redirect('/');
        }

        const hash = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            name,
            username,
            age,
            email,
            password: hash
        });

        const token = jwt.sign({ email: newUser.email, userid: newUser._id }, 'shhhhha');
        req.flash('success', 'Account created successfully');
        return res.redirect('/');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Server error, please try again');
        return res.redirect('/');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        req.flash('error', 'Please fill in all fields');
        return res.redirect('/login');
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            req.flash('error', 'Invalid email or password');
            return res.redirect('/login');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            req.flash('error', 'Invalid email or password');
            return res.redirect('/login');
        }
        const token = jwt.sign({ email: user.email, userid: user._id}, 'shhhhha');
        res.cookie('token', token, { httpOnly: true, maxAge: 60000 });
        req.flash('success', 'Logged in successfully');
        return res.redirect('/profile');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Server error, please try again');
        return res.redirect('/login');
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    req.flash('success', 'Logged out successfully');
    req.session.destroy(err => {
        if (err) {
            console.error(err);
        }
        return res.redirect('/login');
    });
});



app.listen(3000);