const posts = [
	{ title: 'Post One', body: 'This is post one'},
	{ title: 'Post Two', body: 'This is post two'}
];

// Async prog comes in where we use callback

//Kahit no need to deeply understand muna this kasi magagamit panaman to when using data base stuff na or server backend stuff na etc.


function getPosts() {
	setTimeout( () => {
		let output = '';
		posts.forEach((post) => {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}
/* 
setTimeout() is a JavaScript function that executes a piece of code after a specified delay in milliseconds.

getPosts() is a function that uses setTimeout() to simulate a delay of 1000 milliseconds (1 second) before creating a list of post titles in HTML format (<li>${post.title}</li>) based on the posts array content. 

The resulting HTML is then inserted into the <body> of the document. */


function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback()
	}, 2000);
}

/* This createPost function is designed to simulate an asynchronous task that takes 2 seconds (setTimeout) to add a new post to the posts array. Once the post is successfully added after the delay, the callback() function provided as an argument is invoked, indicating that the operation (adding the post) has completed. */

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);

// bali inantay muna yung create post matapos gumana getpost. eto ang callbacks syntax. search up more in google about this if interested ka.