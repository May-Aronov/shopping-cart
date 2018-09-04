var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];

  var total= function(){
     let sum=0;
     for(let i=0;i<cart.length;i++){
       sum += cart[i].Price
     }
     return sum;
  }

  var updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    $('.cart-list').empty()
    var source = $('#cart-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template({cart});
    $('.cart-list').append(newHTML);
    let sumItems=total();
    $('.total').text(sumItems);
  }
 

  var addItem = function (name, price) {
    let item = {
      Name: name,
      Price: price
    }
    cart.push(item);
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    $('.cart-list').empty();
    $('.total').text(0);
    cart=[];

  }

  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  444
  $('.shopping-cart').toggle()
})

$('.add-to-cart').on('click', function () {
  let item = $(this).closest('.item')
  let name = item.data().name;
  let price = item.data().price;
  app.addItem(name, price);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});