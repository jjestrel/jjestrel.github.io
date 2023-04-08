/**

*/
var BOOKS = [
	{
		"title": "The Personal MBA",
		"author": "Josh Kaufman",
		"cover": "the-personal-mba-cover.jpg"
	},
	{
		"title": "Stuff Matters",
		"author": "Mark Miodownik",
		"cover": "stuff-matters-cover.jpg"
	},
	{
		"title": "A Random Walk Down Wall Street",
		"author": "Burton Malkiel",
		"cover": "a-random-walk-cover.jpg"
	},
	{
		"title": "Change by Design",
		"author": "Tim Brown",
		"cover": "change-by-design-cover.jpg"
	},
	{
		"title": "Adventures of an IT Leader",
		"author": "Robert D. Austin, Richard L. Nolan, Shannon O'Donnell",
		"cover": "adventures-of-an-it-leader-cover.jpg"
	},
	{
		"title": "How to Win Friends and Influence People",
		"author": "Dale Carnegie",
		"cover": "how-to-win-friends-cover.jpg"
	},
	{
		"title": "The Little Book of Behavioural Investing",
		"author": "James Montier",
		"cover": "behavioural-investing-cover.jpg"
	},
	{
		"title": "Data Science for Business",
		"author": "Foster Provost, Tom Fawcett",
		"cover": "data-science-for-business-cover.jpg"
	},
	{
		"title": "Business Adventures",
		"author": "John Brooks",
		"cover": "business-adventures-cover.jpg"
	},
	{
		"title": "The Little Book of Common Sense Investing",
		"author": "John Bogle",
		"cover": "common-sense-investing-cover.jpg"
	},
	{
		"title": "A Short Book About Art",
		"author": "Dana Arnold",
		"cover": "a-short-book-about-art-cover.jpg"
	},
	{
		"title": "What Are You Looking At?: 150 Years of Modern Art in a Nutshell",
		"author": "Will Gompertz",
		"cover": "150-years-of-modern-art-cover.jpg"
	},
	{
		"title": "Rework",
		"author": "Jason Fried, David Heinemeier Hansson",
		"cover": "rework-cover.jpg"
	},
	{
		"title": "The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success",
		"author": "William N. Thorndike Jr.",
		"cover": "the-outsiders-cover.jpg"
	},
	{
		"title": "Shoe Dog",
		"author": "Phil Knight",
		"cover": "shoe-dog-cover.jpg"
	},
	{
		"title": "On Writing: A Memoir of the Craft",
		"author": "Stephen King",
		"cover": "on-writing-cover.jpg"
	},
	{
		"title": "Mistakes Were Made (But Not by Me): Why We Justify Foolish Beliefs, Bad Decisions, and Hurtful Acts",
		"author": "Carol Tavris, Elliot Aronson",
		"cover": "mistakes-were-made-cover.jpg"
	},
	{
		"title": "The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future",
		"author": "Chris Guillebeau ",
		"cover": "100-startup-cover.jpg"
	},
	{
		"title": "Anything You Want: 40 Lessons for a New Kind of Entrepreneur",
		"author": "Derek Sivers",
		"cover": "anything-you-want-cover.jpg"
	},
	{
		"title": "Managing Humans: Biting and Humorous Tales of a Software Engineering Manager",
		"author": "Michael Lopp",
		"cover": "managing-humans-cover.jpg"
	},
	{
		"title": "Ego Is the Enemy",
		"author": "Ryan Holiday",
		"cover": "ego-is-the-enemy-cover.jpg"
	},
	{
		"title": "Leaders Eat Last: Why Some Teams Pull Together and Others Don't",
		"author": "Simon Sinek",
		"cover": "leaders-eat-last-cover.jpg"
	},
	{
		"title": "Harder Than I Thought: Adventures of a Twenty-First Century Leader",
		"author": "Robert D. Austin, Richard L. Nolan, Shannon O'Donnell",
		"cover": "harder-than-i-thought-cover.jpg"
	}
];

(function($){
  $(function() {
	function getImage(name) {
		return 'images/book-covers/' + name;
	}
	var getBookHTML = function(title, author, image) {
		var html ='<div class="col s6 m5 l3">' +
					'<div class="book center-align">' +
						'<img class="lazy" data-src="'+ getImage(image) + '"></img>' +
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

	// Start lazy loading - we must do this at the end
	$('.lazy').lazy();

  }); // end of document ready
})(jQuery); // end of jQuery name space
