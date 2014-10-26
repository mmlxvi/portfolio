$(document).ready(function() {

  $('#envelope').click(function(){
    alert('working');
    })

 $('.siteFrames').click(function(){
    $('#innerMain').toggle();
    $('#innerMain2').toggle();

  })

  var mainTextLibrary = ["images/todoText.png", "images/rrText.png", "images/artquizText.png", "images/fizzbuzzText.png",
                          "images/hotorcoldText.png", "images/japanTVText.png"]

$('#site1').click(function(){
  $('#mainText2').append(mainTextLibrary[0]);
})

})
