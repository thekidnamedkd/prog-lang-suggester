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

    console.log(q1)
    console.log(q2)
    console.log(q3)
    console.log(q4)
    console.log(q5)
    console.log(q6)
    console.log(q7)
});
})