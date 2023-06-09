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
        <div> Home </div>
        <hr>
        <div id="thrid">
            <div id="plusmins">
                <p>Categories</p><i class="fa-solid fa-plus"></i>
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
            <div class="log"><a href="cart.html">My Baskets</a> </div>
            <div class="log">My Order</div>
            <div class="log">Wallet <span style="color: red;">Rs 0.00</span></div>
            <div class="log">Customer Service</div>
            <div class="log">FAQ</div>
            <div class="log lasttab" onclick="logout()"><a id="toggle" href="#">Logout</a></div>
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
render();
if (localStorage.getItem("username") !== "undefined" && localStorage.getItem("username") !== null) {
    document.querySelector("#username").innerHTML = `<a href="login.html"><ion-icon name="person-outline"></ion-icon> ${localStorage.getItem("username")}</a>`
}else{
    document.querySelector("#username").innerHTML = `<a href="login.html"><ion-icon name="person-outline"></ion-icon>login/signup</a>`
}
let temp=[]
async function render() {
    await fetch("https://drab-ruby-gecko-suit.cyclic.app/cart").
        then((res) => {
            return res.json();
        }). then((data) => {
            let d = data.filter((item) => {
                return item.UserID == localStorage.getItem("userid")
            })
            temp=d;
           if(localStorage.getItem("username")!=="undefined"){
            document.querySelector("#countin").innerHTML = d.length ;
            document.querySelector("#count").innerHTML = d.length ;
           }else{
            document.querySelector("#countin").innerHTML = 0 ;
            document.querySelector("#count").innerHTML = 0;
           }
            renderdall(d)
        }).catch((err) => {
            console.log(err)
        })
};
let table = document.querySelector("#tab");

let arrofqty=[]
let arrofprice=[]
let total=0;
function renderdall(data) {

    let filter = data.map((item,index) => {
        arrofqty[index]=1;
        arrofprice.push(+item.Price);
        return `
    <tr style="border: 1px solid black";>
    <td style="width:400px">${item.Name} <spam id="categorytable">( ${item.Category.toLowerCase()} )</spam> </td>
    <td style="width:160px">Rs. ${item.Price} <spam id="undeline" >Mrp. ${Math.floor(1.3*Number(item.Price))}</spam></td>
    <td style="width:160px"><button id="add" _data=${index} onclick="add(event)">+</button><spam id="qty"> ${arrofqty[index]} </spam><button  onclick="minus(event)" _da=${index} id="minus">-</button> </td>
    <td style="width:160px" class="sub">${item.Price} .Rs  <button _data=${item._id} onClick="deletes(event)"> ✖️ </button></td>
    <td style="width:160px" id="red">${Math.floor(1.3*Number(item.Price)-Number(item.Price))} .Rs</td>
  </tr>
`
    });
    table.innerHTML = filter.join(" ");
    for( let i=0;i<arrofprice.length;i++){
        total+=arrofprice[i];
    };
    document.querySelector("#total1").innerHTML=total+ " .Rs";
    document.querySelector("#total2").innerHTML=total +" .Rs"
};

function add(event){
    let index=event.target.attributes[1].nodeValue;
    arrofqty[index]+=1
    let qty=document.querySelectorAll("#qty");
    qty[index].innerText=`  ${Number(qty[index].innerText)+1}  `;
    let qty_change=qty[index].innerText;
    let subtotal=Number(arrofprice[index]) * Number(qty_change);
    let x=document.querySelectorAll(".sub");
    x[index].innerHTML=subtotal + " .Rs"+ " ✖️";
    localStorage.setItem("prc",JSON.stringify(arrofprice));
    localStorage.setItem("qty",JSON.stringify(arrofprice))
    total=0;
    for( let i=0;i<arrofprice.length;i++){
        total+=arrofprice[i]*arrofqty[i];
        // console.log(total,arrofprice,arrofqty)
    };
    document.querySelector("#total1").innerHTML=total+ " .Rs";
    document.querySelector("#total2").innerHTML=total +" .Rs"
    
}

function minus(event){
    // console.log("event,index")
    let index=event.target.attributes[1].nodeValue;
    if(arrofqty[index]==1){
        return
    }
    arrofqty[index]+=-1
    let qty=document.querySelectorAll("#qty");
    // console.log(event,index)
    qty[index].innerText=`  ${Number(qty[index].innerText)-1}  `;
    let qty_change=qty[index].innerText;
    let subtotal=Number(arrofprice[index]) * Number(qty_change);
    let x=document.querySelectorAll(".sub");
    x[index].innerHTML=subtotal + " .Rs"+ " ✖️";
    total=0;
    for( let i=0;i<arrofprice.length;i++){
        total+=arrofprice[i]*arrofqty[i];
    };
    document.querySelector("#total1").innerHTML=total+ " .Rs";
    document.querySelector("#total2").innerHTML=total +" .Rs"
    
}
function deletes(event){
    let id=event.target.attributes[0].nodeValue;
    console.log(id);
    del(id)
    async function del(id) {
        await fetch(`http://localhost:9168/cart/delete/${id}`,{
            method:"DELETE",
            headers:{
                token:localStorage.getItem("token")
            }
          }).
            then((res) => {
                return res.json();
            }). then((data) => {
               if(data.msg=="Item deleted"){
                swal(
                    "Remove from cart",
                    "Removed",
                    "error"
                )
               };
               location.reload()
            }).catch((err) => {
                console.log(err)
            })
    };
   
}
let loader=document.querySelector("#loading");
function loadkar(){
    loader.style.display="none"
}


let bar = document.querySelector("#query11");
let toggless=document.querySelector("#toogless")
bar.addEventListener("click", () => {
    if (bar.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
        toggless.style.display="block"
        bar.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        bar.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        toggless.style.display="none"
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


function payment(){
    window.location.href="payment.html"
};