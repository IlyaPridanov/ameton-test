// Подключение js-файлов с помощью rigger-а
// Modules
'use strict';

(function () {
  var tableBlock = document.querySelector('.table__block');
  var table = document.querySelector('.table table');
  var fixBlock = document.querySelectorAll('.js-fix');
  var topBlock = tableBlock.getBoundingClientRect().top - table.clientTop;
  fixBlock.forEach(function (item, index) {
    var element = item.cloneNode(true);
    element.style.top = "".concat(item.getBoundingClientRect().top - topBlock - index - 2, "px");
    element.style.left = "".concat(table.clientLeft + 50, "px");
    element.style.position = "absolute";
    element.style.width = "".concat(item.offsetWidth, "px");
    element.style.height = "".concat(item.offsetHeight, "px");
    tableBlock.appendChild(element);
  });
  console.log(table.clientLeft);
})();

'use strict';

(function () {})();