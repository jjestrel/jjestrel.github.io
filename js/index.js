var SKILLS = {
	"language-skills": [
		{
			"name": "Python",
			"image": "images/skill-logos/python-logo.png"
		},
		{
			"name": "JavaScript",
			"image": "images/skill-logos/js-logo.png"
		},
		{
			"name": "PHP",
			"image": "images/skill-logos/php-logo.png"
		},
		{
			"name": "Java",
			"image": "images/skill-logos/java-logo.png"
		},
		{
			"name": "HTML5",
			"image": "images/skill-logos/html5-logo.png"
		},
		{
			"name": "R",
			"image": "images/skill-logos/r-logo.png"
		},
	
	],
	"framework-skills": [
		{
			"name": "Django",
			"image": "images/skill-logos/django-logo.png"
		},
		{
			"name": "NodeJS",
			"image": "images/skill-logos/nodejs-logo.png"
		},
		{
			"name": "Laravel",
			"image": "images/skill-logos/laravel-logo.png"
		},
		{
			"name": "Yii",
			"image": "images/skill-logos/yii-logo.png"
		},
		{
			"name": "Ionic",
			"image": "images/skill-logos/ionic-logo.png"
		},
		{
			"name": "jQuery",
			"image": "images/skill-logos/jquery-logo.png"
		},
		{
			"name": "Hadoop",
			"image": "images/skill-logos/hadoop-logo.jpg"
		},
	],
	"technologies-skills": [
		{
			"name": "MongoDB",
			"image": "images/skill-logos/mongodb-logo.png"
		},
		{
			"name": "MySQL",
			"image": "images/skill-logos/mysql-logo.png"
		},
		{
			"name": "PostgreSQL",
			"image": "images/skill-logos/postgresql-logo.png"
		},
		{
			"name": "git",
			"image": "images/skill-logos/git-logo.png"
		},
		{
			"name": "SVN",
			"image": "images/skill-logos/svn-logo.png"
		}
	]
};

(function($){
  $(function() {
	var getSkillHTML = function(name, image) {
		var html = '		<div class="skill col s6 m4 l2 center-align">' +
					'			<div class="image-wrapper">' +
					'				<img class="lazy" data-src="' + image + '"/>' +
					'			</div>' +
					'			<h4>' +
					'				' + name +
					'			</h4>' +
					'		</div>';

		return html;
	}

	// load skills
	for (var skillLevel in SKILLS) {
		for (var i = 0; i < SKILLS[skillLevel].length; i++) {
			var skill = SKILLS[skillLevel][i];
			var html = getSkillHTML(skill.name, skill.image);

			$('#' + skillLevel).append(html);
		}
	}
	
	
	// Start lazy loading - we must do this at the end
	$('.lazy').lazy();
	
  }); // end of document ready
})(jQuery); // end of jQuery name space
