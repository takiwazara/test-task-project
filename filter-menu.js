let checkBoxList = document.querySelectorAll('.menu__checkbox');
let iconList = document.querySelectorAll('.menu__icon');
let filterOptionsList = document.querySelectorAll('.filter__options');

let addOpenMenuHandler = function (checkBox, icon, filterOptions) {
  checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
      icon.style.transform = 'rotate(180deg)';
      filterOptions.style.display = 'block';
    } else {
      icon.style.transform = 'rotate(0)';
      filterOptions.style.display = 'none';
    }
  })
}

for (let i = 0; i < checkBoxList.length; i++) {
  addOpenMenuHandler(checkBoxList[i], iconList[i], filterOptionsList[i])
}




