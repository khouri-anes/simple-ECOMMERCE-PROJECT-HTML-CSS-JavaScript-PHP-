
let thumbnails = document.getElementsByClassName('under')

    let activeImages = document.getElementsByClassName('active')

    for (var i=0; i < thumbnails.length; i++){

        thumbnails[i].addEventListener('mouseover', function(){
            console.log(activeImages)
            
            if (activeImages.length > 0){
                activeImages[0].classList.remove('active')
            }
            

            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
    }

     let buttonLeft=document.getElementById('leftSlider')
     let buttonRight=document.getElementById('rightSlider')

     buttonLeft.addEventListener("click",function(){
      document.getElementById("slider").scrollLeft -= 180

     })

     buttonRight.addEventListener("click",function(){
      document.getElementById("slider").scrollLeft += 180

     })

     function showsidebar(){
        const sidebar=document.querySelector('.sidebar');
        sidebar.style.display='flex';
            }
            function closesidebar(){
            const x=document.querySelector(".sidebar");
            x.style.display="none";
            }    

     let wilayas=[
       {
        name:'adrar',
        maisonp:1400,
        stopdesk:900,
       },
       {
        name:'chlef',
        maisonp:850,
        stopdesk:450,
       },
       {
        name:'laghouat',
        maisonp:950,
        stopdesk:550,
       },
       {
        name:'oum El Bouaghi',
        maisonp:850,
        stopdesk:450,
       },
       {
        name:'batna',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'bejaia',
        maisonp:800,
        stopdesk:450,
       },
       {
        name:'biskra',
        maisonp:950,
        stopdesk:550,
       },
       {
        name:'bechar',
        maisonp:1100,
        stopdesk:650,
       },
       {
        name:'blida',
        maisonp:600,
        stopdesk:400,
       },
       {
        name:'bouira',
        maisonp:700,
        stopdesk:450,
       },
       {
        name:'tamanrasset',
        maisonp:1600,
        stopdesk:1050,
       },
       {
        name:'tebessa',
        maisonp:900,
        stopdesk:500,
       },
       {
        name:'tlemcen',
        maisonp:900,
        stopdesk:500,
       },
       {
        name:'tiaret',
        maisonp:850,
        stopdesk:450,
       },
       {
        name:'tizi ouzou',
        maisonp:750,
        stopdesk:450,
       },
       {
        name:'alger',
        maisonp:500,
        stopdesk:300,
       },
       {
        name:'djelfa',
        maisonp:950,
        stopdesk:500,
       },
       {
        name:'jijel',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'setif',
        maisonp:800,
        stopdesk:450,
       },
       {
        name:'saida',
        maisonp:900,
        stopdesk:500,
       },
       {
        name:'skikda',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'sidi bel abbes',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'annaba',
        maisonp:4850,
        stopdesk:450,
       },
       {
        name:'guelma',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'constantine',
        maisonp:800,
        stopdesk:450,
       },
       {
        name:'medea',
        maisonp:800,
        stopdesk:450,
       },
       {
        name:'mostaganem',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'Msila',
        maisonp:850,
        stopdesk:500,
       },
       {
        name:'mascara',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'ourgla',
        maisonp:950,
        stopdesk:600,
       },
       {
        name:'oran',
        maisonp:800,
        stopdesk:450,
       },
       {
        name:'el bayadh',
        maisonp:1100,
        stopdesk:600,
       },
       {
        name:'bordj bouarreridj',
        maisonp:800,
        stopdesk:450,
       },
       {
        name:'boumerdes',
        maisonp:700,
        stopdesk:450,
       },
       {
        name:'el tarf',
        maisonp:850,
        stopdesk:450,
       },
       {
        name:'tissemsilt',
        maisonp:900,
        
       },
       {
        name:'el oued',
        maisonp:950,
        stopdesk:600,
       },
       {
        name:'khenchela',
        maisonp:900,
        
       },
       {
        name:'soukahras',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'tipaza',
        maisonp:700,
        stopdesk:450,
       },
       {
        name:'mila',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'ain defla',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'naama',
        maisonp:1100,
        stopdesk:600,
       },
       {
        name:'ain temouchent',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'ghardaia',
        maisonp:950,
        stopdesk:550,
       },
       {
        name:'relizane',
        maisonp:900,
        stopdesk:450,
       },
       {
        name:'timimoun',
        maisonp:1400,
        
       },
       {
        name:'ouled djellal',
        maisonp:950,
        stopdesk:550,
       },
       {
        name:'beni abbes',
        maisonp:1100,
        stopdesk:900,
       },
       {
        name:'in salah',
        maisonp:1600,
        
       },
       {
        name:'in geuzzam',
        maisonp:1600,
        
       },
       {
        name:'tougourt',
        maisonp:950,
        stopdesk:600,
       },
       {
        name:'mghair',
        maisonp:950,
        
       },
       {
        name:'meniaa',
        maisonp:1000,
        
       },


     
    ]


    let totalPrice=document.getElementById('total-price')
    let deliveryPrice=document.getElementById('delivry')
    let stopdeskPrice=document.getElementById('stopdesk')
    let productPrice=document.getElementById('product-price')
    let homeChoice=document.getElementById('homeDelivery')
    let stopdeskChoice=document.getElementById('stopdeskdelivery')
    let hiddenDeliveryPrice = document.getElementById('deliveryPrice');  
    
    homeChoice.disabled = true;
    stopdeskChoice.disabled = true;

    let form=document.forms['form'];
    let menu=form.wilayas;
    let options=form.wilayas.options;

  
function updateTotalPrice() {
    let deliveryCost = Number(hiddenDeliveryPrice.value);
    if (homeChoice.checked) {
        totalPrice.innerText = Number(productPrice.innerText) + deliveryCost+" DA";
    } else if (stopdeskChoice.checked && !stopdeskChoice.disabled) {
        totalPrice.innerText = Number(productPrice.innerText) + deliveryCost +" DA";
    }else {
        totalPrice.innerText = "select ur delivry type ,please";
    }
}

menu.onchange = function() {
    let optionValue = this.value;

    for (let i = 0; i < wilayas.length; i++) {
        if (wilayas[i].name === optionValue) {
            
            let homePrice = wilayas[i].maisonp;
            let stopdesk = wilayas[i].stopdesk;
            deliveryPrice.innerText = homePrice + "DA";
            
            window.globalHomePrice = homePrice;
            homeChoice.disabled = false;
            
            if (stopdesk !== undefined) {
                stopdeskPrice.innerText = stopdesk + "DA";
                window.globalStopdeskPrice = stopdesk;
                stopdeskChoice.disabled = false;  
            } else {
                stopdeskPrice.innerText = "غير متوفر";
                stopdeskChoice.disabled = true;  
                stopdeskChoice.checked = false;   
            }

            updateTotalPrice();
        }
    }
}







document.querySelector('input[name="phone_number"]').addEventListener('input', function(e) {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10); 
    }
});



homeChoice.addEventListener('change', function() {
    hiddenDeliveryPrice.value = window.globalHomePrice;  // Set hidden input to home delivery price
    updateTotalPrice();  // Update total price
});

stopdeskChoice.addEventListener('change', function() {
    hiddenDeliveryPrice.value = window.globalStopdeskPrice;  // Set hidden input to stopdesk price
    updateTotalPrice();  // Update total price
});




const products = [
    { id: 1, name: 'aspiraterur boman 4en1 f70osk', price: 999, imgUrl: 'images/image 13.jpg' ,url: 'product/iphone13.html' },
    { id: 2, name: 'Samsung Galaxy S21', price: 899, imgUrl: 'images/image 14.jpg',url: 'product/iphone13.html' },
    { id: 3, name: 'Google Pixel 6', price: 799, imgUrl: 'images/image 15.jpg',url: 'product/iphone13.html' },
    { id: 4, name: 'OnePlus 9', price: 729, imgUrl: 'images/image 16.jpg',url: 'product/iphone13.html' },
    { id: 5, name: 'Sony Xperia 5', price: 850, imgUrl: 'images/image 17.jpg',url: 'product/iphone13.html' },
    { id: 6, name: 'Xiaomi Mi 11', price: 799, imgUrl: 'images/image 2.jpg',url: 'product/iphone13.html' },
    { id: 7, name: 'Huawei P50', price: 699, imgUrl: 'images/image 4.jpg',url: 'product/iphone13.html' }
];




const searchInput = document.querySelector("[data-search]");
const searchResults = document.getElementById("searchResults");

// Handle input event (while typing)
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear previous results
    let hasResults = false; // To check if there are any results

    // If the input is not empty, search for products
    if (value !== "") {
        for (let j = 0; j < products.length; j++) {
            if (products[j].name.toLowerCase().includes(value)) {
                searchResults.style.display = "block"; // Show the results
                hasResults = true;

                const productItem = document.createElement("div");
                productItem.classList.add("result-item");
                const productImage = document.createElement("img");
                productImage.src = products[j].imgUrl;
                productImage.alt = products[j].name;
                productImage.classList.add("product-image");

                // Add product name
                const productName = document.createElement("p");
                productName.innerText = products[j].name;

                // Add product price
                const productPrice = document.createElement("p");
                productPrice.innerText = `$${products[j].price}`;

                const productButton = document.createElement("a");
                productButton.href = products[j].url; // Set the href to the product's URL
                productButton.classList.add("product-button");
                productButton.innerText = "View Product";

                // Append image, name, and price to product item
                productItem.appendChild(productImage);
                productItem.appendChild(productName);
                productItem.appendChild(productPrice);
                productItem.appendChild(productButton);
               
                searchResults.appendChild(productItem);
            }
        }
    }

    // Hide results if no matches
    if (!hasResults) {
        searchResults.style.display = "none";
    }
});

// Detect clicks anywhere on the document
document.addEventListener("click", (event) => {
    // Check if the click was inside the search input or the search results
    const isClickInsideInput = searchInput.contains(event.target);
    const isClickInsideResults = searchResults.contains(event.target);

    // If the click is outside both the input and the results, hide the results
    if (!isClickInsideInput && !isClickInsideResults) {
        searchResults.style.display = "none"; // Hide results when clicking outside
    }
});

// Ensure the input has focus and show results again when focused if there is a value
searchInput.addEventListener("focus", () => {
    if (searchInput.value !== "") {
        searchResults.style.display = "block"; // Show results again when input is focused and has a value
    }
});
