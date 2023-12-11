//styling

const title = document.querySelector('#main-heading');

title.style.color = 'darkred';

console.log(title);

// if you want to work to multiple, you can use loops


	 /*const listItems = document.querySelectorAll('.list-items');

	 for(i = 0; i < listItems.length; i++) {
	     listItems[i].style.fontSize = '3rem';
	 }

	 console.log(listItems); */


// Creating Elements


	 // const ul = document.querySelector('ul');
	 // const li = document.createElement('li');

// Adding Elements

 	// ul.append(li);

 // Modifying the text

/*
        innerText
        textContent
        innerHTML 
*/

/*
Considerations:

	innerText and textContent are more focused on text manipulation and are generally safer for avoiding unintended side effects caused by injecting HTML or scripts.

	innerHTML is powerful but should be used carefully, especially when dealing with user-provided content, to prevent security vulnerabilities like cross-site scripting (XSS) attacks.
*/


 	// li.innerText = 'X-men';


// Modifying Attribute & Classes

	 // li.setAttribute('id', 'main-heading');
	 // li.removeAttribute('id');

	 const title2 = document.querySelector('#main-heading');

	 console.log(title2.getAttribute('id'));

	 li.classList.add('list-items');

	 li.classList.remove('list-items');

	 console.log(li.classList.contains('list-items'));
	     // check in console if true or false


// Remove Elements 

     /* li.remove(); */