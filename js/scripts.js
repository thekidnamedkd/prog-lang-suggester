$(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();

    const q1 = parseInt($('input[name="q1"]:checked').val());
    const q2 = parseInt($('input[name="q2"]:checked').val());
    const q3 = parseInt($('input[name="q3"]:checked').val());
    const q4 = parseInt($('input[name="q4"]:checked').val());
    const q5 = parseInt($('input[name="q5"]:checked').val());
    const q6 = parseInt($('input[name="q6"]:checked').val());
    const q7 = parseInt($('input[name="q7"]:checked').val());
    const q8 = parseInt($('input[name="q8"]:checked').val());
    const q9 = parseInt($('input[name="q9"]:checked').val());
    const result = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;

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

