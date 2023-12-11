const posts = [
	{ title: 'Post One', body: 'This is post one'},
	{ title: 'Post Two', body: 'This is post two'}
];

//Kahit no need to deeply understand muna this kasi magagamit panaman to when using data base stuff na or server backend stuff na etc.

function getPosts() {
	setTimeout( () => {
		let output = '';
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

/* 
setTimeout() is a JavaScript function that executes a piece of code after a specified delay in milliseconds.

getPosts() is a function that uses setTimeout() to simulate a delay of 1000 milliseconds (1 second) before creating a list of post titles in HTML format (<li>${post.title}</li>) based on the posts array content. 

The resulting HTML is then inserted into the <body> of the document. */


function createPost(post) {
	return new Promise((resolve, reject) =>  {
		setTimeout(() => {
			posts.push(post);

			const error = false;

			if(!error) {
				resolve();
			} else {
				reject('Error: Something went wrong')
			}
		}, 2000);
	});
}

/* 
createPost() is a function that simulates creating a post asynchronously using setTimeout() for a delay of 2000 milliseconds (2 seconds).

It returns a Promise object, which represents the eventual completion or failure of an asynchronous operation.

Inside the Promise constructor function, posts.push(post) adds the provided post object to the posts array after the 2-second delay.

The function includes a conditional check (if (!error)) which, in this case, always resolves the Promise to simulate a successful operation. However, this could be modified to handle errors and reject the Promise if necessary.

The createPost() function returns a Promise that resolves when the post creation operation completes successfully (resolve()).

This Promise-based approach allows better handling of asynchronous operations, providing a way to handle success and failure scenarios through resolve() and reject() respectively.
This combination of asynchronous operations (setTimeout()) and Promise-based structure (createPost() returning a Promise) allows for better control and management of asynchronous tasks in JavaScript.
 */



createPost({ title: 'Post Three', body: 'This is post three'})
    .then(getPosts) // If the promise is resolved successfully, it triggers the getPosts function.
    .catch(err => console.log(err)); // If there's a rejection (error), it's caught and handled here.
