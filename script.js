$(document).ready(function() {
    var front = document.getElementsByClassName("front");
    var back = document.getElementsByClassName("back");

    var highest = 0;
    var absoluteSide = "";
  
    for (var i = 0; i < front.length; i++) {
      if (front[i].offsetHeight > back[i].offsetHeight) {
        if (front[i].offsetHeight > highest) {
          highest = front[i].offsetHeight;
          absoluteSide = ".front";
        }
      } else if (back[i].offsetHeight > highest) {
        highest = back[i].offsetHeight;
        absoluteSide = ".back";
      }
    }
    $(".front").css("height", highest);
    $(".back").css("height", highest);
    $(absoluteSide).css("position", "absolute");
    $(".x").click(function(){
      $("nav").toggle();
  })
  $(function() {
    $( "#xx" ).click(function() {
        $( "#xxx" ).slideToggle(4000);
    });
});
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++){
  var button = removeCartItemButtons [i]
  button.addEventListener('click', removeCartItem)
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++){
  var input = quantityInputs[i]
  input.addEventListener('change', quantityChanged)
}
var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++){
  var button = addToCartButtons[i]
  button.addEventListener('click', addToCartClicked)
}
function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){  // errror(VS code highlkight red when < entered anywhere :S)
    input.value = 1
  }
  updateCartTotal()
}
function addToCartClicked(event){
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title,price,imageSrc)
}
function addItemToCart(title, price, imageSrc){
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++){
    if (cartItemNames[i].innerText == title){
    alert('Please select quantity of book in cart')
    return
    }
  }
  var cartRowContents = 
  `
    <div class="cart-items"> 
      <img class="cart-item-image" src="${imageSrc}" alt="#" >
    </div>
      <span class="cart-item-title">${title}</span><br>
        <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" style="width:50px"><hr>
          <button class="btn btn-danger" type="button">X</button>
      </div>
  `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('£', ' '))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total
}
  $(".slider").click(function(){
    $(".lorem").slideToggle("slow");
  });
  $(".btn-warning").click(function(){
    $(".lorem").animate({

         fontSize: '30px', left: '50px'
    }, 1000,  function(){
    });
  });
  $('.SeeMore2').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('See More');         
    } else {
        $this.text('See Less');
    }
});
$(".btn-primary").on('click', function(){
  alert("Cash on delivery")
});
});



  

  