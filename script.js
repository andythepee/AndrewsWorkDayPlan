var today = dayjs().format('dddd,MMMM D, YYYY h:mm');
$('#currentDay').text(today);

const saveButtons = document.querySelectorAll('button');
saveButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const textarea = button.previousElementSibling;
    const textareaValue = textarea.value;
    localStorage.setItem(textarea.id, textareaValue);
  });
});
document.querySelectorAll('textarea').forEach(function (textarea) {
  const savedValue = localStorage.getItem(textarea.id);
  if (savedValue !== null) {
    textarea.value = savedValue;
  }
});

  
  var currentHour = dayjs().hour();
 console.log(currentHour);
  var timeBlockElements = document.querySelectorAll(".time-block");
  console.log(timeBlockElements);
  timeBlockElements.forEach(function(timeBlockElement) {
  console.log('hello');
    var hour = parseInt(timeBlockElement.getAttribute('id')); 
    console.log(hour);
    if (hour < currentHour) {
      timeBlockElement.classList.remove("present", "future");
      timeBlockElement.classList.add("past");
    } else if (hour === currentHour) {
      timeBlockElement.classList.remove("past", "future");
      timeBlockElement.classList.add("present");
    } else {
      timeBlockElement.classList.remove("past", "present");
      timeBlockElement.classList.add("future");
    }
  });

