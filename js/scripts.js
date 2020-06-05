$(document).ready(function() {
  $("form#quiz").submit(function(event){
    event.preventDefault();

    const q1 = parseInt($('input[name="q1"]:checked').val())
    console.log(q1)
});
})