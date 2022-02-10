'use strict';

(function () {
    const tableBlock = document.querySelector('.table__block');
    const table = document.querySelector('.table table');
    const fixBlock = document.querySelectorAll('.js-fix');

    let topBlock = tableBlock.getBoundingClientRect().top - table.clientTop;
    fixBlock.forEach((item,index)=>{
        let element = item.cloneNode(true);
        element.style.top = `${item.getBoundingClientRect().top - topBlock - index - 2}px`;
        element.style.left = `${table.clientLeft +50}px`;
        element.style.position = `absolute`;
        element.style.width = `${item.offsetWidth}px`;
        element.style.height = `${item.offsetHeight}px`;
        tableBlock.appendChild(element);
    })
    console.log(table.clientLeft);
})();

