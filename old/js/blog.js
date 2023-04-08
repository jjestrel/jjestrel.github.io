var POSTS = [
	{
		"title": "Reflecting on Working at the RED Lab",
		"date": "March 2015",
		"url": "posts/coop-manulife-red-lab.html",
		"tags": ['co-op', 'software development']
	}
];

(function($){
	$(function() {
		var getTagHTML = function(tag) {
			var html = '<span class="badge">' + tag + '</span>';
			
			return html;
		};
		
		var getPostHTML = function(title, date, url, tags) {
			var html = '<a href="' + url + '" class="collection-item"><span class="title">' + title + '</span><p>' + date + '</p>';
			
			for (var i = 0; i < tags.length; i++) {
				html += getTagHTML(tags[i]);
			}
			
			html += '</a>';
			
			return html;
		};
		
		for (var i = 0; i < POSTS.length; i++) {
			var post = POSTS[i];
			var html = getPostHTML(post.title, post.date, post.url, post.tags);
			
			$("#post-list").append(html);
		}
		
	}); // end of document ready
})(jQuery); // end of jQuery name space