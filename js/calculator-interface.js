var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var a = parseInt($('#number-one').val());
    var b = parseInt($('#number-two').val());
    var operator = $("#operator").val();
    var newCalculator = new Calculator();
    if (operator == "add") {
      $("#solution").text(newCalculator.add(a,b));
    } else if (operator == "subtract") {
      $("#solution").text(newCalculator.subtract(a,b));
    } else if (operator == "multiply") {
      $("#solution").text(newCalculator.multiply(a,b));
    } else if (operator == "divide") {
      $("#solution").text(newCalculator.divide(a,b));
    } else  {
      $("#solution").text("Please select a valid operator.");
    }
  });
  });
