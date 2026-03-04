let checkboxList = document.querySelectorAll('.filter__checkbox')
let clearButton = document.querySelector('.filters__button-clear')

clearButton.addEventListener('click', function () {
  for (let i = 0; i <
  checkboxList.length;
       i++
  ) {
    checkboxList[i].checked = false;
  }
})
