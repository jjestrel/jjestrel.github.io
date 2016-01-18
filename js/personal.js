/**

*/
var BOOKS = [
	{
		"title": "The Personal MBA",
		"author": "Josh Kaufman",
		"cover": "images/book-covers/the-personal-mba-cover.jpg"
	},
	{
		"title": "Stuff Matters",
		"author": "Mark Miodownik",
		"cover": "images/book-covers/stuff-matters-cover.jpg"
	},
	{
		"title": "A Random Walk Down Wall Street",
		"author": "Burton Malkiel",
		"cover": "images/book-covers/a-random-walk-cover.jpg"
	},
	{
		"title": "Change by Design",
		"author": "Tim Brown",
		"cover": "images/book-covers/change-by-design-cover.jpg"
	},
	{
		"title": "Adventures of an IT Leader",
		"author": "Robert D. Austin, Richard L. Nolan, Shannon O'Donnell",
		"cover": "images/book-covers/adventures-of-an-it-leader-cover.jpg"
	},
	{
		"title": "How to Win Friends and Influence People",
		"author": "Dale Carnegie",
		"cover": "images/book-covers/how-to-win-friends-cover.jpg"
	},
	{
		"title": "The Little Book of Behavioural Investing",
		"author": "James Montier",
		"cover": "images/book-covers/behavioural-investing-cover.jpg"
	},
	{
		"title": "Data Science for Business",
		"author": "Foster Provost, Tom Fawcett",
		"cover": "images/book-covers/data-science-for-business-cover.jpg"
	},
	{
		"title": "Business Adventures",
		"author": "John Brooks",
		"cover": "images/book-covers/business-adventures-cover.jpg"
	},
	{
		"title": "The Little Book of Common Sense Investing",
		"author": "John Bogle",
		"cover": "images/book-covers/common-sense-investing-cover.jpg"
	},
	{
		"title": "A Short Book About Art",
		"author": "Dana Arnold",
		"cover": "images/book-covers/a-short-book-about-art-cover.jpg"
	},
	{
		"title": "What Are You Looking At?: 150 Years of Modern Art in a Nutshell",
		"author": "Will Gompertz",
		"cover": "images/book-covers/150-years-of-modern-art-cover.jpg"
	},
	{
		"title": "Rework",
		"author": "Jason Fried, David Heinemeier Hansson",
		"cover": "images/book-covers/rework-cover.jpg"
	},
	{
		"title": "The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success",
		"author": "William N. Thorndike Jr.",
		"cover": "images/book-covers/the-outsiders-cover.jpg"
	}
	/*
	{
		"title": "",
		"author": "",
		"cover": "images/book-covers/"
	}
	*/
];

(function($){
  $(function() {
	var getBookHTML = function(title, author, image) {
		var html ='<div class="col s6 m5 l3">' +
					'<div class="book center-align">' +
						'<img src="'+ image + '"></img>' +
						'<p class="center"><strong>' + title + '</strong><br/>'+ author + '</p>' +
					'</div>' +
				'</div>';

		return html;
	}

	// load books
	for (var i = 0; i < BOOKS.length; i++) {
		var book = BOOKS[i];
		var html = getBookHTML(book.title, book.author, book.cover);

		$('#books-list').append(html);
	}

  }); // end of document ready
})(jQuery); // end of jQuery name space
