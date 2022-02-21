$(document).ready(function(){

  balance = 0;
  balance_output = 0;
  range = 5000000;
  bid = 1000000;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // делаю пробелы между разрядами
  function numberWithSpaces(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1 $2");
    return x;
  }

  function getNumber(number_get) {
    //получаю рандомное число в диапазное number_get
    number_get = number_get*2;
    number_return = (getRandomInt(number_get) - (number_get/2)) * -1;
    // теперь округляю число 
    if (String(number_return).length >= 4 ) {
      number_return = Math.round((number_return / 1000)) * 1000;
    }
    balance = balance + number_return;
    // делаю пробелы между тысячными
    number_return = numberWithSpaces(number_return);
    balance_output = numberWithSpaces(balance);
    return number_return;
  }


  $(".button").click(function(){
    balance -= bid;
    number = getNumber(range);
    $(".result").text(number);
    $(".balance").removeClass("red");
    $(".balance").removeClass("green");
    if (balance < 0) {
      $(".balance").addClass("red");
    } else if (balance == 0) {
      $(".balance").removeClass("red");
      $(".balance").removeClass("green");
    } else {
      $(".balance").addClass("green");
    }
    $(".balance").text(balance_output);
  });

  $('.start-capital-preview').click(function(){
    $('.start-capital').toggleClass("start-capital--active");
  });

  $("#submit").click(function(){
    $('.start-capital').removeClass("start-capital--active");
    if ($("#capital__input").val() != "") {
      balance = $("#capital__input").val();
      balance_output = numberWithSpaces(balance);
      $(".balance").text(balance_output);
      $(".balance").removeClass("red");
      $(".balance").removeClass("green");
      if (balance < 0) {
        $(".balance").addClass("red");
      } else if (balance == 0) {
        $(".balance").removeClass("red");
        $(".balance").removeClass("green");
      } else {
        $(".balance").addClass("green");
      }
    }
    if ($("#capital__range").val() != "") {
      range = $("#capital__range").val();
    }
    if ($("#capital__bid").val() != "") {
      bid = $("#capital__bid").val();
    }
  });
});