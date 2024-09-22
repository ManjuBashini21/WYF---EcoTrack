const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; 


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('public'));


app.get('/', (req, res) => {
    console.log("Rendering index view");
    res.render('index');
});


app.get('/govern-home', (req, res) => {
    res.render('govern-home');
});

app.get('/gvt-report', (req, res) => {
    res.render('gvt-report');
});

app.get('/gvt-overall-report', (req, res) => {
    res.render('gvt-overall-report');
});

app.get('/gvt-energy-report', (req, res) => {
    res.render('gvt-energy-report');
});

app.get('/gvt-healthy-report', (req, res) => {
    res.render('gvt-healthy-report');
});

app.get('/gvt-plastic-report', (req, res) => {
    res.render('gvt-plastic-report');
});

app.get('/gvt-ReducingWaste-report', (req, res) => {
    res.render('gvt-ReducingWaste-report');
});

app.get('/gvt-water-report', (req, res) => {
    res.render('gvt-water-report');
});

app.get('/gvt-wetlands-report', (req, res) => {
    res.render('gvt-wetlands-report');
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/bag', (req, res) => {
    res.render('bag');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/community1', (req, res) => {
    res.render('community1');
});

app.get('/community2', (req, res) => {
    res.render('community2');
});

app.get('/community3', (req, res) => {
    res.render('community3');
});

app.get('/container', (req, res) => {
    res.render('container');
});

app.get('/program_form', (req, res) => {
    res.render('program_form');
});

app.get('/program2', (req, res) => {
    res.render('program2');
});

app.get('/scheme_form', (req, res) => {
    res.render('scheme_form');
});

app.get('/schemes1', (req, res) => {
    res.render('schemes1');
});

app.get('/schemes2', (req, res) => {
    res.render('schemes2');
});

app.get('/schemes3', (req, res) => {
    res.render('schemes3');
});

app.get('/service_form', (req, res) => {
    res.render('service_form');
});

app.get('/service1', (req, res) => {
    res.render('service1');
});

app.get('/service2', (req, res) => {
    res.render('service2');
});

app.get('/service3', (req, res) => {
    res.render('service3');
});

app.get('/straw', (req, res) => {
    res.render('straw');
});

app.get('/wax', (req, res) => {
    res.render('wax');
});

app.get('/product2', (req, res) => {
    res.render('product2');
});

app.get('/nut', (req, res) => {
    res.render('nut');
});

app.get('/user-login', (req, res) => {
    res.render('user-login');
});

app.get('/user', (req, res) => {
    res.render('user');
});

app.get('/user-profile', (req, res) => {
    res.render('user-profile');
});

app.use((req, res) => {
    res.status(404).render('404');
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
