angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("main/main.html","<h1 class=\"visuallyhidden\">Jeff Kahn</h1><h2 class=\"visuallyhidden\">Freelance Full-Stack Developer in NYC</h2><main><section><div class=\"content\"><h3>Hi, I\'m Jeff.</h3><p>A freelance full-stack developer based in New York City.</p><p>The best way to contact me is <a href=\"mailto:kjeffk@gmail.com\">kjeffk@gmail.com</a>.</p><ul class=\"profiles\"><li ng-repeat=\"profile in profiles\"><a target=\"_blank\" href=\"{{ profile.href }}\" class=\"icon icon-{{ profile.icon_class }}\"></a></li></ul></div></section><section><div class=\"content\"><h3>Experienced.</h3><p>I\'ve worked with the best.\nAfter <a target=\"_blank\" href=\"http://www.compling.uw.edu/\">grad school</a>,\nI worked at <a target=\"_blank\" href=\"https://kindle.amazon.com/\">Amazon</a>,\n<a target=\"_blank\" href=\"http://www.nytimes.com/2009/09/23/dining/23recipes.html\">two</a>\n<a target=\"_blank\" href=\"http://www.crunchbase.com/organization/livestar\">startups</a>,\nand the <a target=\"_blank\" href=\"http://substantial.com/\">best software shop</a> in Seattle.</p></div></section><section><div class=\"content\"><h3>Do-it-all.</h3><p>I strive to be truly full-stack.\nMy career has taken me from back-end server rooms to cutting-edge CSS.\nMy preferred stack includes:</p><ul><li>Ruby on Rails</li><li>Client-side Javascript (various frameworks)</li><li>HTML5 / responsive CSS</li><li>Tested and maintainable code</li><li>Machine learning / NLP / recommendation systems</li><li>Relational databases / key-value stores</li><li>Heroku / AWS</li><li>Native iOS in Swift*</li></ul><aside>* I\'m working on learning iOS and would love to work with experienced devs</aside></div></section><section><div class=\"content\"><h3>Agile.</h3><p>I work with clients in a way that is collaborative, communicative, and creative.\nI will ask \"why?\" daily, and you should ask the same of me--your product will be better for that.</p></div></section><section><div class=\"content\"><h3>Details.</h3><p>A thoughtful user experience is important in everything I build. I work closely with product designers to make sure we get it right.</p></div></section></main>");}]);