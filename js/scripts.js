$(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();

    const quest1 = parseInt($('input[name="q1"]:checked').val());
    const quest2 = parseInt($('input[name="q2"]:checked').val());
    const quest3 = parseInt($('input[name="q3"]:checked').val());
    const quest4 = parseInt($('input[name="q4"]:checked').val());
    const quest5 = parseInt($('input[name="q5"]:checked').val());
    const quest6 = parseInt($('input[name="q6"]:checked').val());
    const quest7 = parseInt($('input[name="q7"]:checked').val());
    const quest8 = parseInt($('input[name="q8"]:checked').val());
    const quest9 = parseInt($('input[name="q9"]:checked').val());
    const result = quest1 + quest2 + quest3 + quest4 + quest5 + quest6 + quest7 + quest8 + quest9;

    if (result >= 9 && result <= 15) {
      // show Python
      $("#python").show();
      $("#ruby").hide();
      $("#js").hide();

    } else if (result > 16 && result <= 21) {
      // show Ruby
      $("#python").hide();
      $("#ruby").show();
      $("#js").hide();

    } else if (result > 22 && result <= 27) {
      // show JavaScript
      $("#python").hide();
      $("#ruby").hide();
      $("#js").show();
    }
});
})

