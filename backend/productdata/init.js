const product = require('../Models/product');
const deals = require('../Models/deals');
const dbConnection = require('../dbConnection');
dbConnection();

// let data = [
//     {
//         "productname": "Premium Denim Blue Jeans for Men",
//         "rating": 4,
//         "price": 150,
//         "mrp": 190,
//         "desc": "Elevate your casual wardrobe with these premium denim blue jeans for men. Crafted from high-quality denim fabric, these jeans offer both style and comfort. Featuring a classic blue wash and a modern slim fit, they are perfect for everyday wear. Pair them with a t-shirt or a button-down shirt for a versatile look that works for any occasion.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=blue%20jeans%20for%20men&imgurl=https%3A%2F%2Freshops.in%2Fwp-content%2Fuploads%2F2023%2F03%2Fmens-denim-skinny-jeans-500x500-1.jpg&imgrefurl=https%3A%2F%2Freshops.in%2Fproduct%2Fblue-denim-mens-skinny-denim-jeans%2F&docid=FfZFeM1uFmOKgM&tbnid=bnhw4Utpc-cnFM&vet=12ahUKEwjFwtDrl-SFAxUYqVYBHdi1BQoQM3oECF4QAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjFwtDrl-SFAxUYqVYBHdi1BQoQM3oECF4QAA",
//     },
//     {
//         "productname": "Classic Leather Jacket for Men",
//         "rating": 5,
//         "price": 120,
//         "mrp": 160,
//         "desc": "Stay stylish and warm with this classic leather jacket for men. Made from genuine leather, this jacket exudes sophistication and timeless appeal. The sleek design and comfortable fit make it a versatile addition to any wardrobe. Whether you're heading out for a night on the town or a casual weekend brunch, this jacket will keep you looking sharp.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=leather%20jacket&imgurl=https%3A%2F%2Fimages.bestsellerclothing.in%2Fdata%2FJJ%2F12-oct-2023%2F258373101_g0.jpg%3Fwidth%3D1080%26height%3D1355%26mode%3Dfill%26fill%3Dblur%26format%3Dauto&imgrefurl=https%3A%2F%2Fwww.jackjones.in%2F258373101-leather-brown&docid=FtmtffpH_Ke8RM&tbnid=39EgTgELyfw2aM&vet=12ahUKEwjcn-r4mOSFAxVpna8BHcZDDggQM3oECBcQAA..i&w=1080&h=1355&hcb=2&ved=2ahUKEwjcn-r4mOSFAxVpna8BHcZDDggQM3oECBcQAA"
//     },
//     {
//         "productname": "Slim Fit Checked Shirt in Red and Black",
//         "rating": 3,
//         "price": 180,
//         "mrp": 220,
//         "desc": "Add a pop of color to your wardrobe with this slim fit checked shirt in red and black. Made from premium cotton fabric, this shirt offers a comfortable and breathable fit. The classic checked pattern adds a touch of sophistication, while the slim fit silhouette creates a modern look. Pair it with jeans or chinos for a versatile ensemble that transitions effortlessly from day to night.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Slim%20Fit%20Checked%20Shirt%20in%20Red%20and%20Black&imgurl=https%3A%2F%2Fassets.myntassets.com%2Fw_412%2Cq_60%2Cdpr_2%2Cfl_progressive%2Fassets%2Fimages%2F2431671%2F2024%2F2%2F22%2F413bb050-ee09-4229-99d4-a6443300952f1708580853884-Hancock-Men-Red--Black-Slim-Fit-Checked-Casual-Shirt-8911708-2.jpg&imgrefurl=https%3A%2F%2Fwww.myntra.com%2Fshirts%2Fhancock%2Fhancock-men-red-%26-black-slim-fit-checked-casual-shirt%2F2431671%2Fbuy&docid=NU7xye8SQ5lpDM&tbnid=_2nyChB57VvxQM&vet=12ahUKEwio8YiJmeSFAxXoia8BHcLBCrkQM3oFCIQBEAA..i&w=824&h=1099&hcb=2&ved=2ahUKEwio8YiJmeSFAxXoia8BHcLBCrkQM3oFCIQBEAA"
//     },
//     {
//         "productname": "Casual V-Neck Sweater for Men",
//         "rating": 2,
//         "price": 90,
//         "mrp": 130,
//         "desc": "Stay cozy and stylish with this casual V-neck sweater for men. Crafted from soft and lightweight knit fabric, this sweater offers warmth without sacrificing comfort. The classic V-neck design and relaxed fit make it perfect for layering over shirts or wearing on its own. Whether you're lounging at home or running errands, this sweater is a must-have addition to your winter wardrobe.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Casual%20V-Neck%20Sweater%20for%20Men&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fsweater%2Fv%2Fx%2Fd%2F3xl-1239117vn-2644-monte-carlo-original-imags593kt4et96n.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fmonte-carlo-self-design-v-neck-casual-men-grey-sweater%2Fp%2Fitm13d2314d1616f%3Fpid%3DSWTGS593EGVTRY8B%26lid%3DLSTSWTGS593EGVTRY8BX8BADU%26marketplace%3DFLIPKART%26cmpid%3Dcontent_sweater_8965229628_gmc&docid=bIMGxgioozXA2M&tbnid=dD4wufTAehfLUM&vet=12ahUKEwj2k52bmeSFAxXXdvUHHUbkD1IQM3oECHgQAA..i&w=786&h=1000&hcb=2&ved=2ahUKEwj2k52bmeSFAxXXdvUHHUbkD1IQM3oECHgQAA"
//     },
//     {
//         "productname": "Cotton Cargo Pants for Men",
//         "rating": 4,
//         "price": 130,
//         "mrp": 180,
//         "desc": "Update your casual wardrobe with these cotton cargo pants for men. Made from durable cotton twill fabric, these pants are built to last. The cargo pocket detailing adds a utilitarian touch, while the straight-leg silhouette offers a modern look. Pair them with a t-shirt and sneakers for a laid-back weekend outfit that's both stylish and comfortable.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nykaafashion.com%2Fcelio-solid-olive-cotton-cargo-pant%2Fp%2F12035901&psig=AOvVaw2ISdbXfLSPn5cdP3JFqmUO&ust=1714369271162000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKja1a-Z5IUDFQAAAAAdAAAAABAE"
//     },
//     {
//         "productname": "Athletic Shorts with Moisture-Wicking Technology",
//         "rating": 3,
//         "price": 170,
//         "mrp": 210,
//         "desc": "Stay cool and comfortable during your workouts with these athletic shorts. Crafted from lightweight and breathable fabric, these shorts feature moisture-wicking technology to keep you dry and comfortable. The elastic waistband and adjustable drawstring ensure a secure fit, while the relaxed fit allows for unrestricted movement. Whether you're hitting the gym or going for a run, these shorts are the perfect choice.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.champion.com%2Fmvp-athletic-shorts-moisure-wicking-c-logo-9-quot.html&psig=AOvVaw2mtKrhrj70TQFTOtzIPeol&ust=1714369338264000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDVvc-Z5IUDFQAAAAAdAAAAABAE"
//     },
//     {
//         "productname": "Classic Wool Coat in Charcoal Gray",
//         "rating": 1,
//         "price": 60,
//         "mrp": 100,
//         "desc": "Stay warm and stylish with this classic wool coat in charcoal gray. Made from high-quality wool blend fabric, this coat offers both warmth and durability. The timeless design features a sleek silhouette and clean lines, making it a versatile addition to any wardrobe. Whether you're dressing up for a formal occasion or heading out for a casual outing, this coat will keep you looking sharp.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Classic%20Wool%20Coat%20in%20Charcoal%20Gray&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71ZMGAnpLbL._AC_UY1100_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FESSENTIELE-Sacramento-Breasted-Business-Overcoat%2Fdp%2FB0BPM6K3LH&docid=GsZd3saAyr9KJM&tbnid=n-1dOsP3RZtFuM&vet=12ahUKEwj44MHAmeSFAxXpaPUHHfrCBjwQM3oECB4QAA..i&w=478&h=1100&hcb=2&ved=2ahUKEwj44MHAmeSFAxXpaPUHHfrCBjwQM3oECB4QAA"
//     },
//     {
//         "productname": "Graphic Print T-shirt Pack for Men",
//         "rating": 5,
//         "price": 110,
//         "mrp": 150,
//         "desc": "Upgrade your casual wardrobe with this pack of graphic print t-shirts for men. Featuring three stylish designs, these t-shirts are perfect for everyday wear. Made from soft and breathable cotton fabric, they offer all-day comfort. The vibrant graphic prints add a pop of color and personality to your look. Whether you're lounging at home or hanging out with friends, these t-shirts will keep you looking cool and stylish.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Graphic%20Print%20T-shirt%20Pack%20for%20Men&imgurl=https%3A%2F%2Fassets.ajio.com%2Fmedias%2Fsys_master%2Froot%2F20220823%2FmErD%2F6303ef52aeb269176192005f%2F-473Wx593H-464857499-gold-MODEL.jpg&imgrefurl=https%3A%2F%2Fwww.ajio.com%2Ffriskers-regular-fit-pack-of-2-graphic-print-t-shirt%2Fp%2F464857499_gold&docid=7ZuFyDnyH4tPKM&tbnid=rvcInyniq7clPM&vet=12ahUKEwispuz1meSFAxWNfPUHHZ1WCO8QM3oECHgQAA..i&w=473&h=593&hcb=2&itg=1&ved=2ahUKEwispuz1meSFAxWNfPUHHZ1WCO8QM3oECHgQAA"
//     },
//     {
//         "productname": "Slim Fit Denim Jeans in Dark Wash",
//         "rating": 3,
//         "price": 140,
//         "mrp": 180,
//         "desc": "Elevate your denim collection with these slim fit jeans in a dark wash. Made from premium denim fabric, these jeans offer a comfortable and flattering fit. The dark wash finish adds a touch of sophistication, while the slim fit silhouette creates a modern look. Pair them with a button-down shirt or a casual tee for a versatile ensemble that takes you from day to night with ease.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Slim%20Fit%20Denim%20Jeans%20in%20Dark%20Wash&imgurl=https%3A%2F%2Fimagescdn.planetfashion.in%2Fimg%2Fapp%2Fproduct%2F7%2F778523-9007553.jpg%3Fauto%3Dformat%26w%3D494.40000000000003&imgrefurl=https%3A%2F%2Fwww.planetfashion.in%2Fproduct%2Fmen-navy-slim-fit-dark-wash-jeans-778523.html&docid=pm1JOMR6EhA4PM&tbnid=q7_HSiTeaxkiMM&vet=12ahUKEwixovPtmeSFAxXjdPUHHceGAi0QM3oECBgQAA..i&w=494&h=741&hcb=2&ved=2ahUKEwixovPtmeSFAxXjdPUHHceGAi0QM3oECBgQAA"
//     },
//     {
//         "productname": "Hooded Sweatshirt with Front Pocket",
//         "rating": 2,
//         "price": 100,
//         "mrp": 140,
//         "desc": "Stay cozy and stylish with this hooded sweatshirt. Made from soft and plush fabric, this sweatshirt offers warmth and comfort on chilly days. The hood with drawstring closure adds a sporty touch, while the front pocket provides convenient storage. Whether you're lounging at home or running errands, this sweatshirt is a versatile addition to your casual wardrobe.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Hooded%20Sweatshirt%20with%20Front%20Pocket&imgurl=https%3A%2F%2Fassets.ajio.com%2Fmedias%2Fsys_master%2Froot%2F20210404%2Fmpfb%2F606a30d9f997dd7b648059cc%2F-473Wx593H-461664082-blue-MODEL3.jpg&imgrefurl=https%3A%2F%2Fwww.ajio.com%2Finstafab-plus-zip-front-hooded-sweatshirt-with-side-pockets%2Fp%2F461664082_blue&docid=DsN5S45VT4e3WM&tbnid=O7QXHK7R5B9nZM&vet=12ahUKEwjOvrjmmeSFAxX3iK8BHW8NAf0QM3oECHEQAA..i&w=473&h=593&hcb=2&ved=2ahUKEwjOvrjmmeSFAxX3iK8BHW8NAf0QM3oECHEQAA"
//     },

//     {
//         "productname": "Crew Neck Sweater in Cable Knit Design",
//         "rating": 5,
//         "price": 130,
//         "mrp": 170,
//         "desc": "Add a cozy layer to your winter wardrobe with this crew neck sweater. Crafted from soft and warm fabric, this sweater features a classic cable knit design for timeless appeal. The crew neckline and ribbed cuffs and hem offer a comfortable and flattering fit. Pair it with jeans or chinos for a versatile look that's perfect for any casual occasion.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Crew%20Neck%20Sweater%20in%20Cable%20Knit%20Design&imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2F0c%2F56%2F7a%2F0c567ac27b6438057c625b8ec7d56613.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fcotton-cable-knit-crew-neck-sweater-in-2024--251990541647074448%2F&docid=r_pLUznzfyKjeM&tbnid=vvsmn7AFC2EiAM&vet=12ahUKEwjRipCjmuSFAxXsR2wGHbLhD_oQM3oECBQQAA..i&w=314&h=393&hcb=2&itg=1&ved=2ahUKEwjRipCjmuSFAxXsR2wGHbLhD_oQM3oECBQQAA"
//     },
//     {
//         "productname": "Plaid Flannel Shirt in Red and Black",
//         "rating": 4,
//         "price": 160,
//         "mrp": 200,
//         "desc": "Upgrade your casual wardrobe with this plaid flannel shirt. Made from soft and breathable fabric, this shirt offers all-day comfort. The classic plaid pattern in red and black adds a touch of timeless style, while the button-down collar and chest pocket provide classic detailing. Pair it with jeans or chinos for a laid-back yet polished look that's perfect for any occasion.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Plaid%20Flannel%20Shirt%20in%20Red%20and%20Black&imgurl=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F636ac8cfda390033033ac5e3-men-39-s-plaid-flannel-shirts.jpg&imgrefurl=https%3A%2F%2Fwww.ubuy.co.in%2Fproduct%2F1NGF2UGBI-men-s-plaid-flannel-shirts-button-down-casual-shirts-long-sleeve-check-shirt-for-men-l-red-black&docid=ZgbngLEljMu9aM&tbnid=VKk3K1yXi9W1wM&vet=12ahUKEwj0t8-YmuSFAxU-e2wGHSdXAcAQM3oECBoQAA..i&w=950&h=1500&hcb=2&ved=2ahUKEwj0t8-YmuSFAxU-e2wGHSdXAcAQM3oECBoQAA"
//     },
//     {
//         "productname": "Cargo Pants with Adjustable Drawstring Waist",
//         "rating": 3,
//         "price": 110,
//         "mrp": 150,
//         "desc": "Stay comfortable and stylish with these cargo pants. Made from soft and durable fabric, these pants feature an adjustable drawstring waist for a customized fit. The cargo pockets offer convenient storage, while the relaxed fit silhouette provides a modern look. Whether you're running errands or lounging at home, these pants are a versatile addition to your casual wardrobe.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Cargo%20Pants%20with%20Adjustable%20Drawstring%20Waist&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51zgoKBfvmL._AC_UY1100_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FRAREBONE-Relaxed-Fit-Waistband-Lightweight-Sweatpants%2Fdp%2FB09TYWKLH6&docid=E2GecISiIpQqJM&tbnid=1L95SzQPe7TjTM&vet=12ahUKEwjhwM_amuSFAxWwTGwGHbDNCkkQM3oECBkQAA..i&w=672&h=1100&hcb=2&ved=2ahUKEwjhwM_amuSFAxWwTGwGHbDNCkkQM3oECBkQAA"
//     },
//     {
//         "productname": "Slim Fit Chino Shorts in Khaki",
//         "rating": 4,
//         "price": 170,
//         "mrp": 220,
//         "desc": "Update your summer wardrobe with these slim fit chino shorts. Made from lightweight and breathable fabric, these shorts offer both style and comfort. The slim fit silhouette and classic khaki color make them perfect for pairing with a variety of tops. Whether you're heading to the beach or running errands, these shorts will keep you looking cool and stylish.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Slim%20Fit%20Chino%20Shorts%20in%20Khaki&imgurl=http%3A%2F%2Fstylox.in%2Fcdn%2Fshop%2Fproducts%2FHyflash_ramil18834_1200x1200.jpg%3Fv%3D1655376792&imgrefurl=https%3A%2F%2Fstylox.in%2Fproducts%2Fstylox-men-slim-fit-chinos-shorts-3&docid=7tSIZ5NKk2ZnnM&tbnid=p8OWGjmfIvwruM&vet=12ahUKEwiG45fUmuSFAxXmRmcHHUekBVEQM3oECHQQAA..i&w=400&h=600&hcb=2&ved=2ahUKEwiG45fUmuSFAxXmRmcHHUekBVEQM3oECHQQAA"
//     },
//     {
//         "productname": "Wool Blend Peacoat in Navy Blue",
//         "rating": 2,
//         "price": 90,
//         "mrp": 130,
//         "desc": "Stay warm and stylish with this wool blend peacoat. Made from high-quality fabric, this peacoat offers both warmth and durability. The classic double-breasted design and notched lapel collar add a timeless touch, while the navy blue color adds a pop of color to your winter wardrobe. Whether you're dressing up for a formal occasion or heading out for a casual outing, this peacoat will keep you looking sharp.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Wool%20Blend%20Peacoat%20in%20Navy%20Blue&imgurl=https%3A%2F%2Fimages.express.com%2Fis%2Fimage%2Fexpressfashion%2F0037_04105500_0125_f001%3Fcache%3Don%26wid%3D480%26fmt%3Djpeg%26qlt%3D85%2C1%26resmode%3Dsharp2%26op_usm%3D1%2C1%2C5%2C0%26defaultImage%3DPhoto-Coming-Soon&imgrefurl=https%3A%2F%2Fwww.express.com%2Fclothing%2Fmen%2Fnavy-wool-blend-peacoat%2Fpro%2F04105500&docid=oP3Xqu_a1BZNmM&tbnid=l5RLxqMQ-mmEKM&vet=12ahUKEwiPzavJmuSFAxXCTGwGHRieBEYQM3oECFAQAA..i&w=480&h=600&hcb=2&ved=2ahUKEwiPzavJmuSFAxXCTGwGHRieBEYQM3oECFAQAA"
//     },
//     {
//         "productname": "Striped Polo T-shirt in Blue and White",
//         "rating": 5,
//         "price": 150,
//         "mrp": 190,
//         "desc": "Add a pop of color to your wardrobe with this striped polo t-shirt. Made from soft and breathable fabric, this t-shirt offers all-day comfort. The classic polo collar and button placket add a touch of sophistication, while the striped pattern in blue and white adds a sporty vibe. Pair it with shorts or chinos for a versatile look that's perfect for any casual occasion.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Striped%20Polo%20T-shirt%20in%20Blue%20and%20White&imgurl=https%3A%2F%2Fstatic.cilory.com%2F687798-thickbox_default%2Fnologo-blue-white-striped-half-sleeves-polo-t-shirt.jpg&imgrefurl=https%3A%2F%2Fwww.cilory.com%2Fstripes%2F184591-nologo-blue-white-striped-half-sleeves-polo-t-shirt.html&docid=j-q6cBT-N9sXvM&tbnid=jtgB0EdUE4za0M&vet=12ahUKEwjblOCam-SFAxX1sVYBHfwGC6sQM3oECB4QAA..i&w=1080&h=1440&hcb=2&ved=2ahUKEwjblOCam-SFAxX1sVYBHfwGC6sQM3oECB4QAA"
//     },
//     {
//         "productname": "Classic Fit Dress Shirt in White",
//         "rating": 3,
//         "price": 120,
//         "mrp": 160,
//         "desc": "Elevate your formal wardrobe with this classic fit dress shirt. Made from high-quality fabric, this shirt offers both style and comfort. The classic fit silhouette and crisp white color make it a versatile choice for any occasion. Whether you're heading to the office or attending a special event, this dress shirt will keep you looking sharp and polished.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Classic%20Fit%20Dress%20Shirt%20in%20White&imgurl=http%3A%2F%2Fwww.cotstyle.com%2Fcdn%2Fshop%2Fproducts%2F8904304331704_1_0565604f-d59a-466f-9a58-7df6e96b1230.jpg%3Fv%3D1674132233&imgrefurl=https%3A%2F%2Fwww.cotstyle.com%2Fproducts%2Fmens-luthai-supima-mercerised-cotton-pin-stripe-jacquard-design-regular-fit-dress-shirt&docid=uBCTi4D9CQajYM&tbnid=6Rcb_GwJM7usWM&vet=12ahUKEwjY56WUm-SFAxWn2DQHHSpOCQsQM3oECHwQAA..i&w=2000&h=2000&hcb=2&itg=1&ved=2ahUKEwjY56WUm-SFAxWn2DQHHSpOCQsQM3oECHwQAA"
//     },
//     {
//         "productname": "Slim Fit Stretch Jeans in Black",
//         "rating": 4,
//         "price": 180,
//         "mrp": 220,
//         "desc": "Upgrade your denim collection with these slim fit stretch jeans. Made from soft and stretchy fabric, these jeans offer both style and comfort. The slim fit silhouette and black wash make them perfect for pairing with a variety of tops. Whether you're dressing up for a night out or keeping it casual for a day off, these jeans will keep you looking sleek and stylish.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Slim%20Fit%20Stretch%20Jeans%20in%20Black&imgurl=https%3A%2F%2Fd118ps6mg0w7om.cloudfront.net%2Fmedia%2Fcatalog%2Fproduct%2F1%2F_%2Ffit-in%2F1000x1333%2F1_mft-29146-r-96-jet-black_3.jpg&imgrefurl=https%3A%2F%2Fwww.muftijeans.in%2Fjet-black-super-slim-fit-denim-deluxe-stretch-jeans-mft-29146-r-black.html&docid=R-dmD1zGwYS9qM&tbnid=mLzBVrOEP-XUiM&vet=12ahUKEwiz-JuNm-SFAxUvrlYBHbCRB4YQM3oECB0QAA..i&w=1000&h=1333&hcb=2&ved=2ahUKEwiz-JuNm-SFAxUvrlYBHbCRB4YQM3oECB0QAA"
//     },

//     {
//         "productname": "Slim Fit Chino Pants in Beige",
//         "rating": 2,
//         "price": 80,
//         "mrp": 120,
//         "desc": "Update your wardrobe with these slim fit chino pants in beige. Made from soft and breathable fabric, these pants offer both style and comfort. The slim fit silhouette and classic beige color make them perfect for pairing with a variety of tops. Whether you're dressing up for a casual outing or heading to the office, these pants will keep you looking sharp.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Slim%20Fit%20Chino%20Pants%20in%20Beige&imgurl=https%3A%2F%2Fimg.tatacliq.com%2Fimages%2Fi14%2F1348Wx2000H%2FMP000000019679546_1348Wx2000H_202310160251331.jpeg&imgrefurl=https%3A%2F%2Fwww.tatacliq.com%2Fnuon-by-westside-solid-beige-skinny-fit-chinos%2Fp-mp000000019679546&docid=DxZVPN4nWzfeOM&tbnid=RcdMfcRVG1jXtM&vet=12ahUKEwjk9tbsm-SFAxW4h1YBHU6yCQ4QM3oECHoQAA..i&w=1500&h=2000&hcb=2&ved=2ahUKEwjk9tbsm-SFAxW4h1YBHU6yCQ4QM3oECHoQAA"
//     },

//     {
//         "productname": "Canvas Sneakers in Navy Blue",
//         "rating": 4,
//         "price": 100,
//         "mrp": 140,
//         "desc": "Step up your casual style with these canvas sneakers in navy blue. Made from durable canvas material, these sneakers offer both comfort and durability. The classic lace-up design and rubber sole provide a secure fit and reliable traction. Whether you're running errands or hanging out with friends, these sneakers will keep you looking cool and stylish.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Canvas%20Sneakers%20in%20Navy%20Blue&imgurl=https%3A%2F%2Ffausto.in%2Fcdn%2Fshop%2Ffiles%2FFST_KI-917_NAVY-MOOD-SHOT_400x.jpg%3Fv%3D1703581760&imgrefurl=https%3A%2F%2Ffausto.in%2Fproducts%2Ffausto-men-navy-blue-mid-top-star-toe-cap-upper-denim-8-eye-lace-up-canvas-sneakers-shoes-fst-ki-917-navy&docid=gYo54q_V2OfOWM&tbnid=1quxw97LQaX5BM&vet=12ahUKEwjsmbnkm-SFAxWkjVYBHdUvDI8QM3oECGYQAA..i&w=400&h=533&hcb=2&ved=2ahUKEwjsmbnkm-SFAxWkjVYBHdUvDI8QM3oECGYQAA"
//     },

//     {
//         "productname": "Printed Swim Trunks in Tropical Print",
//         "rating": 3,
//         "price": 110,
//         "mrp": 150,
//         "desc": "Make a splash with these printed swim trunks featuring a vibrant tropical print. Made from quick-drying fabric, these swim trunks offer comfort and performance in and out of the water. The elastic waistband with drawstring closure ensures a secure fit, while the mesh lining provides added support. Whether you're hitting the beach or lounging by the pool, these swim trunks are a summer essential.",
//         "category" : "Men",
//         "imageurl" : "https://www.google.com/imgres?q=Printed%20Swim%20Trunks%20in%20Tropical%20Print&imgurl=https%3A%2F%2Fwww.thebeachcompany.in%2Fcdn%2Fshop%2Ffiles%2FSD_03_T28_7994M_E4_X_EC_0_800x.jpg%3Fv%3D1686742418&imgrefurl=https%3A%2F%2Fwww.thebeachcompany.in%2Fproducts%2Fquick-dry-tropical-print-swim-shorts&docid=ObwRSQHEsgyaPM&tbnid=UlOKGXgJefrYuM&vet=12ahUKEwi-i4vdm-SFAxW72DQHHdk2D8cQM3oECBsQAA..i&w=504&h=655&hcb=2&ved=2ahUKEwi-i4vdm-SFAxW72DQHHdk2D8cQM3oECBsQAA"
//     },
// ];

// let data2 = [
//     {
//         "productname": "Floral Print Maxi Dress",
//         "rating": 4,
//         "price": 70,
//         "mrp": 100,
//         "desc": "Make a statement with this elegant floral print maxi dress. Crafted from lightweight and flowy fabric, this dress is perfect for both casual outings and special occasions. The floral print adds a touch of femininity, while the maxi length creates a flattering silhouette. Pair it with sandals for a laid-back daytime look or dress it up with heels for an evening event.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/floral-maxi-dress.jpg"
//     },
//     {
//         "productname": "Off-Shoulder Ruffle Top",
//         "rating": 5,
//         "price": 40,
//         "mrp": 60,
//         "desc": "Channel your inner boho-chic with this off-shoulder ruffle top. Featuring a flirty off-shoulder neckline and playful ruffle detailing, this top is perfect for summer days and nights. Pair it with high-waisted jeans for a casual look or tuck it into a skirt for a more dressed-up vibe.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/off-shoulder-top.jpg"
//     },
//     {
//         "productname": "Distressed Denim Shorts",
//         "rating": 4,
//         "price": 35,
//         "mrp": 50,
//         "desc": "Get ready for summer with these distressed denim shorts. Made from soft and stretchy denim fabric, these shorts offer both style and comfort. The distressed detailing adds a trendy edge, while the high-rise waist provides a flattering fit. Pair them with a crop top and sneakers for a casual daytime look.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/distressed-denim-shorts.jpg"
//     },
//     {
//         "productname": "Bohemian Print Wrap Skirt",
//         "rating": 4,
//         "price": 50,
//         "mrp": 70,
//         "desc": "Add a touch of bohemian flair to your wardrobe with this printed wrap skirt. Featuring a colorful bohemian print and a wrap-around design, this skirt is both stylish and versatile. Pair it with a fitted tank top for a casual look or dress it up with a blouse and heels for a night out.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/bohemian-wrap-skirt.jpg"
//     },
//     {
//         "productname": "Embroidered Peasant Blouse",
//         "rating": 5,
//         "price": 45,
//         "mrp": 65,
//         "desc": "Embrace vintage-inspired style with this embroidered peasant blouse. Crafted from lightweight cotton fabric, this blouse features intricate embroidery detailing and a relaxed fit. The elasticized neckline can be worn on or off the shoulders for added versatility. Pair it with denim shorts and sandals for a boho-chic look.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/embroidered-peasant-blouse.jpg"
//     },
//     {
//         "productname": "Striped Linen Pants",
//         "rating": 4,
//         "price": 55,
//         "mrp": 80,
//         "desc": "Stay cool and comfortable in these striped linen pants. Made from breathable linen fabric, these pants feature a relaxed fit and a classic striped pattern. The elasticized waistband with a drawstring closure ensures a customized fit. Pair them with a basic tee and sandals for a laid-back summer look.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/striped-linen-pants.jpg"
//     },
//     {
//         "productname": "Wrap Front Midi Dress",
//         "rating": 4,
//         "price": 60,
//         "mrp": 90,
//         "desc": "Step out in style with this chic wrap front midi dress. Featuring a flattering wrap silhouette and a midi length, this dress is perfect for any occasion. The tie waist detail accentuates your figure, while the V-neckline adds a touch of elegance. Pair it with heels and statement earrings for a sophisticated look.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/wrap-midi-dress.jpg"
//     },
//     {
//         "productname": "Floral Embroidered Jeans",
//         "rating": 3,
//         "price": 65,
//         "mrp": 95,
//         "desc": "Add a playful touch to your denim collection with these floral embroidered jeans. Made from stretch denim fabric, these jeans feature colorful floral embroidery along the legs for a fun and feminine look. The high-rise waist and skinny fit silhouette flatter your figure. Pair them with a graphic tee and sneakers for a casual yet stylish ensemble.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/floral-embroidered-jeans.jpg"
//     },
//     {
//         "productname": "Lace Fit and Flare Dress",
//         "rating": 4.5,
//         "price": 75,
//         "mrp": 110,
//         "desc": "Exude elegance in this lace fit and flare dress. The intricate lace detailing adds a romantic touch, while the fit and flare silhouette flatters your figure. Perfect for weddings, parties, or date nights, this dress will make you feel beautiful and confident. Pair it with heels and statement jewelry for a polished look.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/lace-fit-and-flare-dress.jpg"
//     },
//     {
//         "productname": "Ruffled Cold Shoulder Blouse",
//         "rating": 4,
//         "price": 45,
//         "mrp": 65,
//         "desc": "Make a statement in this ruffled cold shoulder blouse. The cold shoulder design adds a modern twist to the classic blouse, while the ruffled detailing adds a feminine touch. Pair it with jeans for a casual daytime look or dress it up with trousers for the office or evening outings.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/ruffled-cold-shoulder-blouse.jpg"
//     },
//     {
//         "productname": "High-Waisted Wide Leg Pants",
//         "rating": 4.5,
//         "price": 60,
//         "mrp": 85,
//         "desc": "Make a statement in these high-waisted wide leg pants. The high-waisted design elongates your silhouette, while the wide leg silhouette adds a touch of drama. Pair them with a fitted top or a crop top for a chic and stylish look. Perfect for both casual and formal occasions.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/high-waisted-wide-leg-pants.jpg"
//     },
//     {
//         "productname": "Embroidered Maxi Skirt",
//         "rating": 4,
//         "price": 55,
//         "mrp": 75,
//         "desc": "Add a bohemian vibe to your wardrobe with this embroidered maxi skirt. The colorful embroidery adds a playful touch, while the maxi length creates a flowy and feminine silhouette. Pair it with a tucked-in tank top or a cropped blouse for a chic and effortless look. Perfect for summer days and nights.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/embroidered-maxi-skirt.jpg"
//     },
//     {
//         "productname": "Button-Front Midi Dress",
//         "rating": 4,
//         "price": 65,
//         "mrp": 95,
//         "desc": "Elevate your summer wardrobe with this button-front midi dress. The button-front design adds a vintage-inspired touch, while the midi length is both chic and versatile. Pair it with sandals for a casual daytime look or dress it up with heels and statement jewelry for a night out.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/button-front-midi-dress.jpg"
//     },
//     {
//         "productname": "Polka Dot Wrap Blouse",
//         "rating": 4.5,
//         "price": 50,
//         "mrp": 70,
//         "desc": "Channel retro-chic vibes with this polka dot wrap blouse. The classic polka dot print adds a playful touch, while the wrap silhouette creates a flattering fit. Pair it with high-waisted trousers or a skirt for a polished and sophisticated look. Perfect for both work and weekend outings.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/polka-dot-wrap-blouse.jpg"
//     },
//     {
//         "productname": "Tie-Front Crop Top",
//         "rating": 4,
//         "price": 35,
//         "mrp": 50,
//         "desc": "Stay on-trend with this tie-front crop top. The tie-front detail adds a flirty touch, while the cropped silhouette is perfect for summer days. Pair it with high-waisted jeans or shorts for a casual daytime look or dress it up with a skirt and heels for a night out.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/tie-front-crop-top.jpg"
//     },
//     {
//         "productname": "Floral Print Wrap Dress",
//         "rating": 4.5,
//         "price": 70,
//         "mrp": 100,
//         "desc": "Flaunt your feminine side in this floral print wrap dress. The vibrant floral print adds a pop of color, while the wrap silhouette creates a flattering fit. Perfect for brunches, garden parties, or summer weddings, this dress will make you stand out in style. Pair it with sandals or wedges for a chic and effortless look.",
//         "category" : "Women",
//         "imageurl" : "https://www.example.com/floral-print-wrap-dress.jpg"
//     }
// ]

let data3 = [ 
    {
        "productid" : "6631f7819ebe09bc0140c440"
    },

    {
        "productid" : "6631f7819ebe09bc0140c443"
    },

    {
        "productid" : "6631f7819ebe09bc0140c448"
    },

    {
        "productid" : "6631f7819ebe09bc0140c410"
    }
]
const insertdata = async () =>  {
    // await product.insertMany(data);
    // await product.insertMany(data2);
    await deals.insertMany(data3);
    console.log('data inserted successfully');
}

insertdata();
