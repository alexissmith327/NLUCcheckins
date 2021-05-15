function changeColor() {
    const color = document.getElementById("colors").value;
    document.body.style.backgroundColor = color;
  }

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})