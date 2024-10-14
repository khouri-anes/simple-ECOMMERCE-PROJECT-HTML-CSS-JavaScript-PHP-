const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));


function showsidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex';
        }
        function closesidebar(){
        const x=document.querySelector(".sidebar");
        x.style.display="none";
        }      


 const initSlider= ()=>{
    const imageList=document.querySelector(".product .product-container ");
    const slideBtn=document.querySelectorAll("#btn-slider");
    const sliderScrollbar=document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb=document.querySelector(".scrollbar-thumb");
    const maxScrollLeft=imageList.scrollWidth-imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown",(e)=>{
        const startX=e.clientX;
        const thumbPosition=scrollbarThumb.offsetLeft;
    
    
    
    
        const handleMouseOver=(e)=>{
        const deltaX=e.clientX -startX;
        const newThumbPosition=thumbPosition + deltaX;
        const maxThumbPosition=sliderScrollbar.getBoundingClientRect().width-scrollbarThumb.offsetWidth;

         const boundedPosition=Math.max(0,Math.min(maxThumbPosition,newThumbPosition));
         const scrollPosition=(boundedPosition/maxThumbPosition)*maxScrollLeft;
        scrollbarThumb.style.left=`${boundedPosition}px`;
        imageList.scrollLeft=scrollPosition;
    }
    const handleMouseup=()=>{
        document.removeEventListener("mousemove",handleMouseOver); 
        document.removeEventListener("mouseup",handleMouseup); 
    }
  
      document.addEventListener("mousemove",handleMouseOver); 
      document.addEventListener("mouseup",handleMouseup); 
    })




   
    const handleSlideBtn=()=>{
        slideBtn[0].style.display=imageList.scrollLeft<= 0 ?"none":"block";
        slideBtn[1].style.display=imageList.scrollLeft>= maxScrollLeft ? "none":"block";
    }
    const updateScrollthumbposition=()=>{
        const scrollPosition=imageList.scrollLeft;
        const thumbPosition=(scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left=`${thumbPosition}px`;
    }
   imageList.addEventListener("scroll",()=>{
    handleSlideBtn();
    updateScrollthumbposition();
   })
 }





 const productContainers = [...document.querySelectorAll('.product-container')];
 const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
 const preBtn = [...document.querySelectorAll('.pre-btn')];
 
 productContainers.forEach((item, i) => {
     let containerDimensions = item.getBoundingClientRect();
     let containerWidth = containerDimensions.width;
 
     nxtBtn[i].addEventListener('click', () => {
         item.scrollLeft += containerWidth;
     })
 
     preBtn[i].addEventListener('click', () => {
         item.scrollLeft -= containerWidth;
     })
 })

 window.addEventListener("load",initSlider);



                  


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
                productImage.classList.add("product-imagee");

                // Add product name
                const productName = document.createElement("p");
                productName.innerText = products[j].name;

                // Add product price
                const productPrice = document.createElement("p");
                productPrice.innerText = `$${products[j].price}`;

                const productButton = document.createElement("a");
                productButton.href = products[j].url; // Set the href to the product's URL
                productButton.classList.add("product-buttonn");
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




 
    



