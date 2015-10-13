angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("case_study/case_study.html","<main class=\"case\"><section><div class=\"content no-height\"><h1><a href=\"/#/\">Jeff</a> + <a href=\"https://www.idlecars.com/\">idlecars</a></h1><p>Spring and Summer 2015</p></div></section><section><div class=\"content no-height\"><blockquote><p>Jeff--how are you so gangster?</p><cite>- Brian Claypool, CEO idlecars</cite></blockquote></div><div class=\"content no-height\"><img src=\"/images/idlecars.png\"/></div></section><section><div class=\"content\"><h2>The idea</h2><p>The New York City-based startup <a href=\"https://www.idlecars.com/\">idlecars</a> thinks there\'s a lot of potential uber drivers who don\'t own a car, and a lot of idle cars that could be\n used to earn income for their owners.</p><p>The idea is simple: bring those parties together and reduce friction\n by building a technology-focussed marketplace.</p></div></section><section><div class=\"content\"><h2>The tech</h2><p>In collaboration with the CTO, we decided that a Django Rest Framework back end\n paired with a mobile-centered AngularJS front end would be our fastest path to victory.</p><p>We were able to launch a working MVP marketplace within two weeks of our first line of code.</p></div></section><section><div class=\"content\"><h2>Iteration</h2><p>Users started using. It became clear that we needed to add features to keep them happy.\n An emphasis on iterative product design is something I brought to the team.</p><p>First, good test coverage was key in keeping the app running while shipping many features quickly.</p><p>More importantly, an emphasis on communication, knowledge sharing, and retrospectives\n made sure the team wasn\'t falling apart under the constant pressure for more features.</p></div></section><section><div class=\"content\"><h2>Beyond code</h2><p>We realized the need for a intuitive user experience to go along with\n the efficiencies gained from bringing tech to this market.</p><p>I worked closely with designers and brought in my own ideas\n to keep the complexities of credit card payments, search, licensing, and insurance\n appear simple to users.</p></div></section></main>");
$templateCache.put("main/main.html","<h1 class=\"visuallyhidden\">Jeff Kahn</h1><h2 class=\"visuallyhidden\">Freelance Full-Stack Developer in Portland</h2><main><section><div class=\"content\"><h3>Hi, I\'m Jeff.</h3><p>A freelance full-stack developer based in Portland. The best way to contact me is <a href=\"mailto:kjeffk@gmail.com\">kjeffk@gmail.com</a>.</p><ul class=\"profiles\"><li ng-repeat=\"profile in profiles\"><a target=\"_blank\" href=\"{{ profile.href }}\" class=\"icon icon-{{ profile.icon_class }}\"></a></li></ul></div></section><section><div class=\"content\"><h3>Experienced.</h3><p>I\'ve worked with the best. After <a target=\"_blank\" href=\"http://www.compling.uw.edu/\">grad school</a>, I worked at <a target=\"_blank\" href=\"https://kindle.amazon.com/\">Amazon</a>, <a target=\"_blank\" href=\"http://www.nytimes.com/2009/09/23/dining/23recipes.html\">two</a> <a target=\"_blank\" href=\"http://www.crunchbase.com/organization/livestar\">startups</a>, and the <a target=\"_blank\" href=\"http://substantial.com/\">best software shop</a> in Seattle.</p><p>A <a href=\"/#/case-study\">case study on my work with idlecars</a> shows how I take startups from paper-napkin concept to MVPs gaining real traction.</p></div></section><section><div class=\"content\"><h3>Do-it-all.</h3><p>I strive to be truly full stack.\nMy career has run the range from dev ops to pixel pushing.\nMy preferred stack includes:</p><ul><li>Ruby on Rails</li><li>AngularJS (and various other JS frameworks)</li><li>HTML5 / responsive CSS</li><li>Tested and maintainable code</li><li>Machine learning / NLP / recommendation systems</li><li>Relational databases / key-value stores</li><li>Heroku / AWS</li><li>Prototyping / UX design</li></ul></div></section><section><div class=\"content\"><h3>Agile.</h3><p>I work with clients in a way that is collaborative, communicative, and creative.\nI will ask \"why?\" daily, and you should ask the same of me--your product will be better for that.</p></div></section><section><div class=\"content\"><h3>Details.</h3><p>A thoughtful user experience is important in everything I build. I work closely with product designers to make sure we get it right.</p></div></section></main>");}]);