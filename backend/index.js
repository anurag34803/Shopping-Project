const dbConnection = require('./dbConnection');
const { ObjectId } = require('mongodb');
dbConnection();

const express = require('express');
const app = express();
const path = require('path');
const ejsmate = require('ejs-mate');
// const session = require('express-session');
const cookieParser = require('cookie-parser');


// const passport = require('passport');
// const LocalStrategy = require('passport-local');

// // const User = require('./Models/User');
const product = require('./Models/product');
const deals = require('./Models/deals');

// app.use(session({
//     secret: 'keyboardcat',
//     resave: false,
//     saveUninitialized: true,
//     cookie:{
//         httpOnly:true,
//         maxAge: 7 * 24 * 60 * 60 * 1000 * 1
//     }
//   }))

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password'
// }, (email, password, done) => {
//     User.authenticate()(email, password, (err, user) => {
//         if (err) {
//             return done(err);
//         }
//         if (!user) {
//             return done(null, false, { message: 'Incorrect email or password' });
//         }
//         return done(null, user);
//     });
// }));

// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, '../frontend/static')));
app.use(express.static(path.join(__dirname, '../frontend/images')));

app.use(express.urlencoded({extended:true}));

app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsmate);
app.use(cookieParser());

app.get('/', async (req,res) => {
  let men = await product.find({category:"Men"}).limit(8); 
  let women = await product.find({category:"Women"}).limit(8);
  
//   let todaydeals = await deals.find({}, { productid: 1, _id: 0 });
//   console.log(todaydeals);

//   // Extract productid values and convert them to ObjectId
//   let productIds = todaydeals.map(deal => deal.productid).map(id => new ObjectId(id));
//   console.log(productIds);
//   // Use $in operator to find products with matching productids
//   let dealsproduct = await product.find({ productid: { $in: productIds } });

//   console.log(dealsproduct);

   res.render('home',{men:men,women:women});
})


app.get('/cart', async (req,res) => {
    let products;
    try {
        const cartItem = JSON.parse(req.cookies.storedData);
        const productIds = Object.keys(cartItem);

        // Extract the product IDs from the keys of the cartItem object
        // Use the product IDs to find the corresponding products in MongoDB
        products = await product.find({ _id: { $in: productIds.map(id => new ObjectId(id)) } });

        products.forEach(prod => {
            const productId = prod._id.toString(); // Convert ObjectId to string
            if (cartItem[productId]) {
                prod.qty = cartItem[productId].quantity;
                prod.size = cartItem[productId].size;
            }
        });
    }
    
    catch {
        product = {};
    }

    res.render('cart', { products });
}) 

app.get('/login', (req,res) => {
    res.render('login');
})

// // app.post('/login', async (req,res) => {
// //     try {
// //         let {email,password} = req.body;

// //         let isEmailRegistered = await User.findOne({ email });
// //         if(!isEmailRegistered) return res.send('Email not registered!');
    
        
// //         res.redirect('/');
// //     }

// //    catch (e) {
// //        res.send('Something went wrong');
// //    }
// // })

// app.post('/login', 
//          passport.authenticate('local',
//             { failureRedirect: '/login'}), 
  
//   (req, res) => {
//   console.log(req.user);
//   res.redirect('/');
// });

app.get('/signup', (req,res) => {
    res.render('signup');
})

// app.post('/signup', async (req,res) => {

//     try {
//         let {name,email,number,password} = req.body;

//         let isEmailRegistered = await User.findOne({ email });
//         let isNumberRegistered = await User.findOne({ number });

//         if(isEmailRegistered) return res.send('Email Already Registered!');
//         if(isNumberRegistered) return res.send('Mobile Number Already Registered!');
    
//         const newUser = new User({name,email,number});
//         await User.register(newUser,password);
//         res.redirect('/');
//     }

//     catch (e) {
//        res.send('Something went wrong');
//     }
// })

app.get('/viewall', async (req,res) => {
    let products = await product.find({category:"Men"}); 
     res.render('viewall',{products});
  })
app.get('/:productid', async (req, res) => {
    let id = req.params.productid;
    const Item = JSON.parse(req.cookies.storedData);
    let size;
    let qty;
    
    try {
        size = Item[id].size;
        qty = Item[id].quantity;
    }

    catch {
        size = 'S';
        qty = 0;
    }
    
    const products = await product.findById(id);
    res.render('product',{product : products, size:size, qty:qty});
})

app.listen(9080,() => {
    console.log('server create succesf');
});
