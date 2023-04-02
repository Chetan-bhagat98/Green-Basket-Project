// ************GLOBAL NAV**************
let globalnabvar=()=>{
    return`<div id=loading></div>
    <!-- ****************************NAVBAR**************************** -->
    <div id="navbar">
        <div id="nav1">
            <i><ion-icon name="call-outline"></ion-icon> 1800 123 1000</i>
            <i> <ion-icon name="location-outline"></ion-icon> Bangalore</i>
            <i id="username" onmouseover="logoutdis()" onmouseout="logoutremove()"><a href="login.html"><ion-icon
                        name="person-outline"></ion-icon>
                    login/sign up</a></i>
        </div>
        <div id="log" onmouseover="logoutdis()" onmouseout="logoutremove()">

            <div class="log">My Account</div>
            <div class="log">My Basket</div>
            <div class="log">My Order</div>
            <div class="log">Wallet <span style="color: red;">Rs 0.00</span></div>
            <div class="log">Customer Service</div>
            <div class="log lasttab" onclick="logout()"><a id="toggle" href="#">Logout</a></div>

        </div>
        <div id="nav2">
            <a href="index.html"><img id=logo src="./Images/Green Basket.png"></a>
            <div style="background-color: white;"><input placeholder="Search Your Product">
                <div><ion-icon id="search" name="search-outline"></ion-icon></div>
            </div>
            <div>
                <a onclick="cart()" href="#"><img src="./Images/cartimage.png"></a>
                <div> My Basket <br>
                    <spam id="count">0</spam> Items</pre>
                </div>
            </div>

        </div>

        <div>
            <button class="innav" onmouseover="category()">SHOP BY CATEGORY &#8595 </button>
            <button class="innav"><ion-icon id="tag" name="pricetags-sharp"></ion-icon>OFFERS</i></button>
        </div>
    </div>
    <!-- ****************************NAVBAR**************************** -->

    <!-- **************MEDIA QUERY****************** -->
    <div id="mediaqueryfortab">
        <div><a id="query11" ><i class="fa-solid fa-bars"></i></a>
            <a href="index.html">
                <p id="Green"> Green <spam id="Basket">Basket</spam>
                </p>
            </a>
            <a href="login.html"><i class="fa-solid fa-user"></i></a>
        </div>
        <div><input placeholder="Search 18000+ Products"></div>

    </div>
    
    <div id="toogless">
        <div>
            <!-- <p>dgjshdg</p> -->
            <a href="login.html" id="username2"><button>login/sign up</button></a>
        </div>
        <div class="bold"> Home </div>
        <hr>
        <div id="thrid">
            <div id="plusmins">
                <p class="bold">Categories</p><i class="fa-solid fa-plus"></i>
            </div>
            <div class="cat1"><a href="vegetables.html">Vegetables</a></div>
            <div class="cat1"><a href="Fruits.html">Fruits</a></div>
            <div class="cat1"><a href="foodgrain_oil.html">Foodgrains, Oil & Masala</a></div>
            <div class="cat1"><a href="Beverage.html">Beverages</a></div>
            <div class="cat1"><a href="Snack.html">Snacks & Branded Foods</a></div>
            <div class="cat1"><a href="Beauty.html">Beauty & Hygiene</a></div>
            <div class="cat1"><a href="Household.html">Cleaning & Household</a></div>
            <div class="cat1"><a href="Kitchen.html">Kitchen, Garden & Pets</a></div>
            <div class="cat1"><a href="Egg.html">Eggs, Meat & Fish</a></div>
            <div class="cat1"><a href="Badycare.html">Baby Care</a></div>
            <div class="cat1"><a href="index.html">View All</a></div>
        </div>
        <hr>
        <div id="four">
            <div class="log">My Account</div>
            <div class="log"><a href="cart.html" class="bold">My Baskets</a> </div>
            <div class="log">My Order</div>
            <div class="log">Wallet <span style="color: red;">Rs 0.00</span></div>
            <div class="log">Customer Service</div>
            <div class="log">FAQ</div>
            <div class="log lasttab" onclick="logout()"><a id="toggle" href="#" class="bold">Logout</a></div>
        </div>
        <hr>
        <img src="./Images/Green Basket.png">

    </div>
    <!-- **************MEDIA QUERY****************** -->

    <!-- ************** CTEGORIES TAB****************** -->
    <div id="category" onmouseover="category()" onmouseout="out()">
        <div><a href="vegetables.html">Vegetables</a></div>
        <div><a href="Fruits.html">Fruits</a></div>
        <div><a href="foodgrain_oil.html">Foodgrains, Oil & Masala</a></div>
        <div><a href="Beverage.html">Beverages</a></div>
        <div><a href="Snack.html">Snacks & Branded Foods</a></div>
        <div><a href="Beauty.html">Beauty & Hygiene</a></div>
        <div><a href="Household.html">Cleaning & Household</a></div>
        <div><a href="Kitchen.html">Kitchen, Garden & Pets</a></div>
        <div><a href="Egg.html">Eggs, Meat & Fish</a></div>
        <div><a href="Badycare.html">Baby Care</a></div>
        <div><a href="index.html">View All</a></div>
    </div>
    <!-- ************** CTEGORIES TAB****************** -->`
};

document.querySelector("#globalnavbars").innerHTML=globalnabvar();
// export function globalnabvar()
let globalfooter=()=>{
    return `
    <div id="mediaquery1">
        <p class="heading2">bigbasket – online grocery store</p>
        <p>Did you ever imagine that the freshest of <spam class="highligh">fruits and vegetables</spam>, top quality
            pulses and food grains,<spam class="highligh"> dairy products</spam> and hundreds of branded items could be
            handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online
            megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million
            happy customers. From household cleaning products to beauty and makeup, and you can now order all your
            household products and even buy groceries
            online without travelling long distances or standing in serpentine queues.</p>
        <p>We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products
            from groceries to snacks <spam class="highligh"> branded foods </spam> reach you in time.</p>
        <ul>
            <li>Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early
                morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket
                caters to every schedule.</li>
        </ul>
        <button onclick="dis()">Read More</button>
        <div id="more">
            <p class="heading2">India’s biggest Online Supermarket</p>
            <p>bigbasket.com believes in providing the highest level of customer service and is continuously innovating
                to meet customer expectations. Our On-time Guarantee is one such assurance where we refund 10% of the
                bill value if the delivery is delayed.If you ever find an item missing on delivery or want to return a
                product, you
                can report it to us within 48 hours for a ‘no-questions-asked’ refund.</p>
            <p>bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer
                trust and confidence, by taking feedback and giving our customers what they want. We have added the
                convenience of pre-cut fruits in our Fresho range. <spam class="highligh">
                    beverages </spam>that include cool drinks, hot teas, fruit juices and more.</p>

        </div>
    </div>
    <div id="disc">
        <p class="heading2">bigbasket – online grocery store</p>
        <p>Did you ever imagine that the freshest of <spam class="highligh">fruits and vegetables</spam>, top quality
            pulses and food grains,<spam class="highligh"> dairy products</spam> and hundreds of branded items could be
            handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online
            megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million
            happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need
            for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated
            with shopping for daily essentials, and you can now order all your household products and even buy groceries
            online without travelling long distances or standing in serpentine queues. Add to this the convenience of
            finding all your requirements at one single source, along with great savings, and you will realize that
            bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online
            grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and
            meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience.
            Hassle-free Home Delivery options</p>
        <p>We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products
            from groceries to snacks <spam class="highligh"> branded foods </spam> reach you in time.</p>
        <ul>
            <li>Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early
                morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket
                caters to every schedule.</li>
            <li>Express Delivery: This super useful service can be availed by customers in cities like Bangalore,
                Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep
                in 90 Minutes.</li>
            <li>BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for
                tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we
                deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified
                by us.</li>
        </ul>
        <button onclick="dis()">Read More</button>
        <div id="mores">
            <p class="heading2">India’s biggest Online Supermarket</p>
            <p>bigbasket.com believes in providing the highest level of customer service and is continuously innovating
                to meet customer expectations. Our On-time Guarantee is one such assurance where we refund 10% of the
                bill value if the delivery is delayed. For all your order values above Rs. 1000, we provide free
                delivery. A wide range of imported and gourmet products are available through our express delivery and
                slotted delivery service. If you ever find an item missing on delivery or want to return a product, you
                can report it to us within 48 hours for a ‘no-questions-asked’ refund.</p>
            <p>bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer
                trust and confidence, by taking feedback and giving our customers what they want. We have added the
                convenience of pre-cut fruits in our Fresho range. If it’s a product category you’re looking to shop
                from, we’ve made it convenient for you to access all products in a section easily. For instance, if
                you’re looking for beverages, you can order from a long list of beverages <spam class="highligh">
                    beverages </spam>that include cool drinks, hot teas, fruit juices and more.</p>
            <p>We are proud to be associated closely with the farmers from whom we source our fresh products. Most of
                our farm-fresh products are sourced directly from farmers, which not only ensures the best prices and
                freshest products for our customers but also helps the farmers get better prices. With more than 80
                Organic Fruits and Vegetables and a wide range of organic staples, bigbasket has the largest range in
                the organic products category.</p>
            <p>When it comes to payment, we have made it easy for our customers can pay through multiple payment
                channels like Credit and Debit cards, Internet Banking, e-wallets and Sodexo passes or simply pay Cash
                on Delivery (COD).The convenience of shopping for home and daily needs, while not compromising on
                quality, has made bigbasket.com the online supermarket of choice for thousands of happy customers across
                India.</p>
        </div>

    </div>
    <div id="footer" class="block">
        <div id="foot1">
            <div>
                <p class="green">bigbasket</p>
                <p>About Us</p>
                <p>In News</p>
                <p>Green bigbasket</p>
                <p>Privacy Policy</p>
                <p>Affiliate</p>
                <p>Terms and Conditions</p>
                <p>Careers At bigbasket</p>
                <p>bb Instant</p>
                <p>bb Daily</p>
                <p>bb Blog</p>
                <p>bbnow</p>
            </div>
            <div>
                <p class="green">Help</p>
                <p>FAQs</p>
                <p>Contact Us</p>
                <p>bb Wallet FAQs</p>
                <p>bb Wallet T&Cs</p>
                <p>Vendor Connect</p>

            </div>
            <div>
                <p class="green">Download Our App</p>

                <a href="https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp"><img
                        src="https://www.bbassets.com/static/v2626/custPage/build/content/img/Google-App-store-icon.png"></a>
                <br>
                <a href="https://apps.apple.com/in/app/bigbasket-com/id660683603?ign-mpt=uo%3D4"><img
                        src="https://www.bbassets.com/static/v2626/custPage/build/content/img/Apple-App-store-icon.png"></a>

            </div>
            <div>
                <p class="green">Get Social With Us</p>

            </div>
        </div>
        <div id="foot2">
            <div class="first">
                <p class="green">POPULAR CATEGORIES:</p>
                <p class="green sec">POPULAR BRANDS:</p>
                <p class="green third"> CITIES WE SERVE: </p>
                <p class="green forth">PAYMENT OPTIONS:</p>

            </div>
            <div class="second">
                <p>Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor
                    Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes,</p>
                <p>Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez, Yera, Yakult, Britannia, Wow Momo,
                    Fortune , Haldirams , Ferrero, Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk, Pedigree,
                </p>
                <p>
                    Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur,
                    Kolkata, Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam,
                    Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna
                    District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur,
                    Rajkot, Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural,
                    Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural,
                    Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural, Mumbai
                    Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur
                    Rural, Ranchi, Nashik, Agra, Kozhikode, </p>
                <p>
                    Cash on delivery </p>
                <img src="./Images/footer.png">

            </div>
        </div>


    </div>
    <div id="mediaquery2">
        <div id="footer">
            <div id="foot1">
                <div>
                    <p class="green">bigbasket</p>
                    <p>About Us</p>
                    <p>In News</p>
                    <p>Green bigbasket</p>
                    <p>Privacy Policy</p>
                    <p>Affiliate</p>
                    <p>Terms and Conditions</p>
                    <p>Careers At bigbasket</p>
                    <p>bb Instant</p>
                    <p>bb Daily</p>
                    <p>bb Blog</p>
                    <p>bbnow</p>
                </div>
                <div>
                    <p class="green">Help</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>bb Wallet FAQs</p>
                    <p>bb Wallet T&Cs</p>
                    <p>Vendor Connect</p>

                </div>
                <div>
                    <p class="green">Download Our App</p>

                    <a href="https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp"><img
                            src="https://www.bbassets.com/static/v2626/custPage/build/content/img/Google-App-store-icon.png"></a>
                    <br>
                    <a href="https://apps.apple.com/in/app/bigbasket-com/id660683603?ign-mpt=uo%3D4"><img
                            src="https://www.bbassets.com/static/v2626/custPage/build/content/img/Apple-App-store-icon.png"></a>

                </div>
                <div>
                    <p class="green">Get Social With Us</p>

                </div>
            </div>
            <div id="foot2">
                <div class="first">
                    <p class="green">POPULAR CATEGORIES:</p>
                    <p class="green sec">POPULAR BRANDS:</p>
                    <p class="green third"> CITIES WE SERVE: </p>
                    <p class="green forth">PAYMENT OPTIONS:</p>

                </div>
                <div class="second">
                    <p>Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen,
                        Eggs,Yummiez.</p>
                    <p>Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez, Yera, Yakult, Britannia, Wow
                        Momo,Vijayawada-Guntur.
                    </p>
                    <p>
                        Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore,
                        Vijayawada-Guntur,
                        Surat, Pune, Mumbai </p>
                    <p>
                        Cash on delivery </p>
                    <img src="./Images/footer.png">

                </div>
            </div>


        </div>
    </div>

    <div id="copyright">
        <p>Copyright © 2014-2022 Green Basket. All Rights Reserved.</p>
    </div>
    <!-- *********FOOTER******** -->`
};
document.querySelector("#globalfooter").innerHTML=globalfooter()

let arr = ["./Images/slidepanner.webp", "./Images/slidebreakfast.webp", "./Images/slidebride.webp", "./Images/slidemeat.webp",]
let slide = document.querySelector("#slidshow");
let sliddetails1 = document.querySelector("#sliddetails1");
let sliddetails2 = document.querySelector("#sliddetails2");
let sliddetails3 = document.querySelector("#sliddetails3");
let sliddetails4 = document.querySelector("#sliddetails4");
let arrdeatils = [sliddetails1, sliddetails2, sliddetails3, sliddetails4];

let i = 0;
let timer = setInterval(() => {
    // console.log(i,arr.length)
    slide.setAttribute("src", arr[i++]);
    if (i == arr.length) {
        i = 0;
    };
    sliddetails1.style.opacity = "0.5";
    sliddetails2.style.opacity = "0.5";
    sliddetails3.style.opacity = "0.5";
    sliddetails4.style.opacity = "0.5";
    arrdeatils[i].style.opacity = "1";


}, 2000);

if (localStorage.getItem("username") === "undefined" || localStorage.getItem("username") === "null" || localStorage.getItem("username") === null) {
    document.querySelector(".lasttab").innerHTML = `<a id="toggle" href="login.html"> Login</a>`
    document.querySelector("#username").innerHTML = `<a href="login.html"><ion-icon name="person-outline"></ion-icon> login/signup</a>`
     document.querySelector("#username2").innerHTML = `<button>login/sign up</button>`
} else {
    document.querySelector(".lasttab").innerHTML = `<a id="toggle" href="#"> Logout</a>`
    document.querySelector("#username").innerHTML = `<a href="login.html"><ion-icon name="person-outline"></ion-icon> ${localStorage.getItem("username")}</a>`
    document.querySelector("#username2").innerHTML = `Hi ${localStorage.getItem("username")}.`

}
// ***********RENDERDATA*********
let temp = [];
render()
async function render() {
    await fetch("https://drab-ruby-gecko-suit.cyclic.app/products").
        then((res) => {
            return res.json()
        }).then((data) => {
            temp = data;
            let limit = data.filter((item, index) => {
                return index < 5
            });
            let remain = data.filter((item, index) => {
                return index > 4
            });
            allremaindata(remain)
            alldata(limit)
        });

    await fetch("https://drab-ruby-gecko-suit.cyclic.app/cart").
        then((res) => {
            return res.json();
        }).then((data) => {
            let count = data.filter((item) => {
                return item.UserID == localStorage.getItem("userid")
            });
            // console.log(count)
            if (localStorage.getItem("username") == "undefined" || localStorage.getItem("username") == null) {
                document.querySelector("#count").innerHTML = 0
            } else {
                document.querySelector("#count").innerHTML = count.length
            }
        }).catch((err) => {
            console.log(err)
        })
};
function allremaindata(data) {
    // console.log(data)
    let D = data.map((item, index) => {
        return `<div id="item"><img src="${item.Image}">
        <h4>${item.Name.substring(0, 18)}</h4>
        <p class="category">${item.Category.substring(0, 11)}</p>
        <div class="render1"> <p id="markprice">MRP <spam class="mrp" >Rs. ${String(Math.floor(Number(item.Price) * 1.3))}</spam></p>
        <p class="price">Rs. ${item.Price}</p>
        </div>
        <div class="render2"> <i class="fa-solid fa-truck"><spam id="delivery">Standard Delivery in 48 hrs</spam></i> 
        <button _data1="${item.Name}" _data2="${item.Category}" _data3="${item.Price}" _data4="${item.Image}" onclick="addtocart(event)">Add <i class="fa-sharp fa-solid fa-cart-plus"></i></button></div>
        </div>
       `
    });
    document.querySelector("#renderdata2").innerHTML = D.join(" ");
}
function alldata(data) {
    // console.log(data)
    let D = data.map((item, index) => {
        return `<div id="item"><img src="${item.Image}">
        <h4>${item.Name.substring(0, 18)}</h4>
        <p class="category">${item.Category.substring(0, 11)}</p>
        <div class="render1"> <p id="markprice">MRP <spam class="mrp" >Rs. ${String(Math.floor(Number(item.Price) * 1.3))}</spam></p>
        <p class="price">Rs. ${item.Price}</p>
        </div>
        <div class="render2"> <i class="fa-solid fa-truck"><spam id="delivery">Standard Delivery in 48 hrs</spam></i> 
        <button _data1="${item.Name}" _data2="${item.Category}" _data3="${item.Price}" _data4="${item.Image}" onclick="addtocart(event)">Add <i class="fa-sharp fa-solid fa-cart-plus"></i></button></div>
        </div>
       `
    });
    document.querySelector("#renderdata").innerHTML = D.join(" ");
}

function dis() {
    console.log("yes")
    document.querySelector("#mores").style.display = "block"
    document.querySelector("#more").style.display = "block"
}
function category() {
    document.querySelector("#category").style.display = "block"
}
function out() {
    // console.log("hgd")
    document.querySelector("#category").style.display = "none"
}

let input = document.querySelector("#nav2>div>input");
let obtract = document.querySelector("#slidshow");
let obstract2 = document.querySelector("#sliddetails");
let obstract3 = document.querySelector("#middivs");
let input2 = document.querySelector("#mediaqueryfortab>div>input");

input2.addEventListener("input", () => {

    let pass = temp.filter((item) => {
        return item.Name.toLowerCase().includes(input2.value.toLowerCase())
    });

    // console.log(input2.value);
    if (pass.length == 0) {
        document.querySelector("#renderdata").innerHTML = "Nothing Found"


    } else if (input.value == "") {
        obtract.style.display = "block"
        obstract2.style.display = ""
        obstract3.style.display = ""
        alldata(pass)
    } else {
        alldata(pass)
    }
});
input.addEventListener("input", () => {
    obtract.style.display = "none"
    obstract2.style.display = "none"
    obstract3.style.display = "none"
    let pass = temp.filter((item) => {
        return item.Name.toLowerCase().includes(input.value.toLowerCase())
    });

    // console.log(input.value)
    if (pass.length == 0) {
        alldata(pass)
        document.querySelector("#renderdata").innerHTML = "Nothing Found"


    } else if (input.value == "") {
        obtract.style.display = "block"
        obstract2.style.display = ""
        obstract3.style.display = ""
        alldata(pass)
    } else {
        alldata(pass)
    }
});

async function addtocart(event) {
    // console.log(event)
    let Image = event.target.attributes[3].nodeValue;
    let Name = event.target.attributes[0].nodeValue;
    let Category = event.target.attributes[1].nodeValue;
    let Price = event.target.attributes[2].nodeValue;

    let payload = {
        Name,
        Image,
        Category,
        Price

    };
    //    console.log(payload,event)
    //    console.log(payload)
    if (localStorage.getItem("username") == null || localStorage.getItem("username") == undefined) {
        alert("Login First Please");
        return
    };
    await fetch("https://drab-ruby-gecko-suit.cyclic.app/cart/addtocart", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "token": localStorage.getItem("token")

        },
        body: JSON.stringify(payload)
    }).
        then((res) => {
            return res.json();
        }).then((data) => {
            if (data.msg == "Added to cart") {
                swal(
                    "Added to cart",
                    "successfully",
                    "success"
                )
                setTimeout(() => {
                    location.reload()
                }, 2000)
            } else {
                alert("Login First")
            }
        });

    // ***********get************

};


function cart() {
    if (localStorage.getItem("username") == null || localStorage.getItem("username") == "undefined") {
        alert("Login First")
    } else {
        window.location.href = "./cart.html"

    }
};

function logout() {
    localStorage.setItem("token", undefined);
    localStorage.setItem("username", undefined);
    document.querySelector("#toggle").innerHTML = "Login";
    location.reload()
}
function logoutdis() {
    document.querySelector("#navbar>#log").style.display = "block"

}
function logoutremove() {
    document.querySelector("#navbar>#log").style.display = "none"
};
let loader = document.querySelector("#loading");
function loadkar() {
    loader.style.display = "none"
}







// ******TOOGLE**********
let bar = document.querySelector("#query11");
let toggless=document.querySelector("#toogless")
bar.addEventListener("click", () => {
    if (bar.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
        toggless.style.display="block"
        bar.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        document.querySelector("body").style.position = "fixed";
    } else {
        bar.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        toggless.style.display="none";
        document.querySelector("body").style.position = "absolute";

    }
});
let plus = document.querySelector("#plusmins");
let cats=document.querySelectorAll(".cat1");
plus.addEventListener("click", () => {
    if (plus.innerHTML == `<p>Categories</p><i class="fa-solid fa-plus"></i>`) {
        plus.innerHTML = `<p>Categories</p><i class="fa-solid fa-minus"></i>`;
         for(let i=0;i<cats.length;i++){
            cats[i].style.display="block"
         }
    } else {
        plus.innerHTML = `<p>Categories</p><i class="fa-solid fa-plus"></i>`;
        for(let i=0;i<cats.length;i++){
            cats[i].style.display="none"
         }
    }
});









