$(document).ready(init);

function init() {
  var discQuantity;
  $(".tower").on("click", determine);
  $(".difficulty").on("click", showDiscs);
}

function showDiscs(e){
  $(".difficulty").attr('disabled',"disabled");
  discQuantity = $(this).data('diff');
  for (var count = 1; count <= discQuantity; count++) {
    var disc = '<div class="disc center-block one" data-id='+count+' id='+' size'+count+'></div>';
    $("#towers").children("#discsTower").append(disc);
  }
}

var $selectedDisc;

function evalWidthsBeforePrepending(tower) {
  currentWidth = $selectedDisc.data("id");
  var $nextWidth = tower.children().first().data("id");
  if ($nextWidth > currentWidth) {
    tower.prepend($selectedDisc);
    $selectedDisc.removeClass("highlight");
    if (tower.children().length === discQuantity ) {
      if ($("#lastTower").children().length === discQuantity) {
        gameWon(tower);
      }
    }
    return $selectedDisc= '';
  } else {
    $selectedDisc.removeClass("highlight");
    return $selectedDisc= '';
  }
}

function determine(e){
  if ($selectedDisc) {
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

function gameWon(prependedToTower) {
  $("h5").text("You Won!").addClass("animated bounceInDown text-center");
  $("#towers").addClass("animated fadeOutDown");
  return $selectedDisc= '';
}
