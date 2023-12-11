// Event Listeners aka event handling

// SYNTAX: element.addEventListener("click", function);


//kung chineck niyo na sa browser yung html, sa unang box built in alert siya na nakalagay sa html file, that is one way to implement to event called "on HTML event listener". downside is isa lang per element ang event listener.


//this is second box naman
const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert('I also love JavaScript');
};

buttonTwo.addEventListener("click", alertBtn);

//sinelect muna natin yung button 2 tapos gumawa function. hindi muna gagana yung function kasi hindi pa kinocall. 

//gumamit tayo ng addEventListener();. nakikinig siya sa click then after nun gagana yung function pag clinick na natin.

// Mouseover event

const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'darkblue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

//ganito ren ito pero iba na ang event. you can search up sa google mga iba pang DOM events you can integrate with addEventListener()