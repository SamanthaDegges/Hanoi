$(document).ready(init);

function init() {
  $("button").on("click", makeRow);
}


function fillInRow() {
  var taskContent = $("input").val();
    console.log(taskContent);
}

function makeRow(e) {
  $("#toClone").clone().appendTo($("table"));
  var $target = $(this);
  $("#toClone").text(fillInRow());


  //var $newTask = $("input").val();
  //return $("#toClone").clone().appendTo($("table"));
  //console.log('test');
  //return $newRow.text($newTask.toString());
}
