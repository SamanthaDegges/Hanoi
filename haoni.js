$(document).ready(init);

function init() {
  $(".tower").on("click", determine);
}

var $selectedDisc;

function evalWidthsBeforePrepending(tower) {
  console.log('tower to append to is: '+tower.data("id"));
  currentWidth = $selectedDisc.data("id");
  console.log('$selectedDisc with is: '+currentWidth);
  var $nextWidth = tower.children().first().data("id");
  console.log('width of disc beneath is:'+$nextWidth);
  if ($nextWidth > currentWidth) {
    console.log('ta-dah!');
    tower.prepend($selectedDisc);
    $selectedDisc.removeClass("highlight");
    if (tower.children().length === 3 && tower.data('id')==="tower3") {
      winCheck(tower);
    }
    return $selectedDisc= '';


  } else {
    $selectedDisc.removeClass("highlight");
    return $selectedDisc= '';
  }
}

function determine(e){
  if ($selectedDisc) {
    console.log($(this).children());
      if ($(this).children().length>0) {
        var towerToPrependTo = $(this);
        evalWidthsBeforePrepending(towerToPrependTo);
      } else {
        $(this).prepend($selectedDisc);
        $(this).children().first().removeClass("highlight");
        $selectedDisc = '';
      }
  } else {
    $selectedDisc = $(this).children().first().toggleClass("highlight");
  }
}

function winCheck(prependedToTower) {
  $("h5").text("You Win!").addClass("animated bounceInDown");
  $("#towers").addClass("animated fadeOutDown");
  return $selectedDisc= '';
}
