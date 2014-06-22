angular.module('templates-app', ['about/about.tpl.html', 'blog/blog.tpl.html', 'contact/contact.tpl.html', 'home/home.tpl.html', 'portfolio/modal.tpl.html', 'portfolio/portfolio.tpl.html', 'research/research.tpl.html', 'videos/videos.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<section class=\"success\" id=\"about\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 text-center\">\n" +
    "                <h2>About</h2>\n" +
    "                <hr class=\"star-light\">\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-6\">\n" +
    "                    <iframe width=\"100%\" height=\"315\" src=\"//www.youtube.com/embed/xgFFy24Gixw\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-6\">\n" +
    "                    <p>{{ aboutDescription }}</p>\n" +
    "                    <p>Experience: {{Experience}}</p>\n" +
    "                    <p>Primary Skills: {{Skills}}</p>\n" +
    "                    <p>-{{name}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("blog/blog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("blog/blog.tpl.html",
    "<section class=\"success\" id=\"blog\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 text-center\">\n" +
    "                <h2>Blog</h2>\n" +
    "                <hr class=\"star-light\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "    <div class=\"col-md-12\"> \n" +
    "\n" +
    "    <div class=\"panel panel-primary\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      \n" +
    "      <!--/stories-->\n" +
    "      <div class=\"row post\" ng-repeat=\"post in blog | limitTo:10\" ng-bind-html-unsafe=\"post.content.$t\">    \n" +
    "        <br>\n" +
    "        <div class=\"col-md-2 col-sm-3 text-center\">\n" +
    "          <a class=\"story-img\" href=\"#\"><img ng-src=\"{{thumbnail}}\" style=\"width:100px;height:100px\" class=\"img-circle\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-10 col-sm-9\">\n" +
    "          <h5>{{post.title.$t}}</h5>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-9\">\n" +
    "              <p ng-bind-html=\"post.content.$t | unsafe\"></p>\n" +
    "              <p class=\"lead\"><a href=\"http://jkefexjs.blogspot.com/\" class=\"btn btn-primary btn\">Read More</a></p>\n" +
    "              <p class=\"pull-right\"><span class=\"label label-primary\">keyword</span> <span class=\"label label-primary\">tag</span> <span class=\"label label-primary\">post</span></p>\n" +
    "              <ul class=\"list-inline\"><!-- <li><a href=\"#\">{{post.updated.$t}}</a></li> --><li><a href=\"#\">{{post.link[1].title}}</a></li></ul>\n" +
    "              </div>\n" +
    "            <div class=\"col-xs-3\"></div>\n" +
    "          </div>\n" +
    "          <br><br>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <hr>\n" +
    "      \n" +
    "      <a href=\"http://jkefexjs.blogspot.com/\" class=\"btn btn-primary pull-right btnNext\">More</a>\n" +
    "      \n" +
    "    </div>\n" +
    "    </div>                                              \n" +
    "                                                      \n" +
    "    </div><!--/col-12-->\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/contact.tpl.html",
    "<section id=\"contact\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 text-center\">\n" +
    "                <h2>Contact Me</h2>\n" +
    "                <hr class=\"star-primary\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-8 col-lg-offset-2\">\n" +
    "                <form role=\"form\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-xs-12 floating-label-form-group\">\n" +
    "                            <label for=\"name\">Name</label>\n" +
    "                            <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-xs-12 floating-label-form-group\">\n" +
    "                            <label for=\"email\">Email Address</label>\n" +
    "                            <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Email Address\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-xs-12 floating-label-form-group\">\n" +
    "                            <label for=\"message\">Message</label>\n" +
    "                            <textarea placeholder=\"Message\" class=\"form-control\" rows=\"5\"></textarea>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-xs-12\">\n" +
    "                            <button type=\"submit\" class=\"btn btn-lg btn-success\">Send</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<header class=\"home\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"diy-slideshow\">\n" +
    "        <figure class=\"show\">\n" +
    "        <img src=\"assets/portfolio/gif.gif\" width=\"100%\" /><figcaption>\"Snowying\" by <a href=\"http://www.flickr.com/photos/fiddleoak/8511209344/\">fiddleoak</a>.</figcaption> \n" +
    "        </figure>\n" +
    "        <figure>\n" +
    "        <img src=\"http://www.someoddpilot.com/wp-content/uploads/2014/03/SOP_FrontEndDev.gif\" width=\"100%\" /><figcaption>\"Snowstorm\" by <a href=\"http://www.flickr.com/photos/tylerbeaulawrence/8539457508/\">Beaulawrence</a>.</figcaption> \n" +
    "        </figure>\n" +
    "        <figure>\n" +
    "        <img src=\"assets/portfolio/panda.gif\" width=\"100%\" /><figcaption>\"Misty winter afternoon\" by <a href=\"http://www.flickr.com/photos/22746515@N02/5277611659/\">Bert Kaufmann</a>.</figcaption> \n" +
    "        </figure>\n" +
    "        <span class=\"prev\">&laquo;</span>\n" +
    "        <span class=\"next\">&raquo;</span>\n" +
    "        </div>  \n" +
    "        \n" +
    "        <div class=\"col-xs-18 col-sm-6 col-md-3\">\n" +
    "          <div class=\"thumbnail\">\n" +
    "            <!-- <img src=\"http://placehold.it/500x300\" alt=\"\"> -->\n" +
    "              <div class=\"caption\">\n" +
    "                <h4>Front End Development</h4>\n" +
    "                <p>I'm a Front End Developer in India and my job is my passion to develop interface for the branding companies around multiple domains with a complex filtering and data mining to form information architecture</p>\n" +
    "                <p>\n" +
    "                <a href=\"#/research\" class=\"btn btn-info btn-xs\" role=\"button\">More...</a> \n" +
    "                <!-- <a href=\"#\" class=\"btn btn-default btn-xs\" role=\"button\">Button</a> -->\n" +
    "                </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-18 col-sm-6 col-md-3\">\n" +
    "          <div class=\"thumbnail\">\n" +
    "            <!-- <img src=\"http://placehold.it/500x300\" alt=\"\"> -->\n" +
    "              <div class=\"caption\">\n" +
    "                <h4>HTML5 Development &amp; Data Visualization</h4>\n" +
    "                <p>I love visualize to my code and i implement and experiment in extracting and tranforming my skills to a interactive systems. I love to learn new specifications</p>\n" +
    "                <p>\n" +
    "                <a href=\"#/research\" class=\"btn btn-info btn-xs\" role=\"button\">More...</a> \n" +
    "                <!-- <a href=\"#\" class=\"btn btn-default btn-xs\" role=\"button\">Button</a> -->\n" +
    "                </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-18 col-sm-6 col-md-3\">\n" +
    "          <div class=\"thumbnail\">\n" +
    "            <!-- <img src=\"http://placehold.it/500x300\" alt=\"\"> -->\n" +
    "              <div class=\"caption\">\n" +
    "                <h4>Computer Graphics</h4>\n" +
    "                <p>I love to see every digital component in graphics and love to orient it in simulation in various theorems to prove mathemtatics &amp; physics for 2D, 2.5D, 3D spatial vectors</p>\n" +
    "                <p>\n" +
    "                <a href=\"#/research\" class=\"btn btn-info btn-xs\" role=\"button\">More...</a> \n" +
    "                <!-- <a href=\"#\" class=\"btn btn-default btn-xs\" role=\"button\">Button</a> -->\n" +
    "                </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-18 col-sm-6 col-md-3\">\n" +
    "          <div class=\"thumbnail\">\n" +
    "            <!-- <img src=\"http://placehold.it/500x300\" alt=\"\"> -->\n" +
    "              <div class=\"caption\">\n" +
    "                <h4>Image Processing</h4>\n" +
    "                <p>Image Processing is my choice to learn to process image and derive information, improve image attributes &amp; turn to give develop grpahic plugins with its data sets.</p>\n" +
    "                <p>\n" +
    "                <a href=\"#/research\" class=\"btn btn-info btn-xs\" role=\"button\">More...</a> \n" +
    "                <!-- <a href=\"#\" class=\"btn btn-default btn-xs\" role=\"button\">Button</a> -->\n" +
    "                </p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        \n" +
    "      </div><!-- End row -->\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "");
}]);

angular.module("portfolio/modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">{{title}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"itm in item\">\n" +
    "            <a href=\"{{itm.href}}\">{{ itm.title }}</a>\n" +
    "            <p>{{itm.description}}</p>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\n" +
    "    <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>");
}]);

angular.module("portfolio/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/portfolio.tpl.html",
    "<header>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <img class=\"img-responsive profile-border\" src=\"assets/portfolio/me.jpg\" alt=\"\">\n" +
    "                <div class=\"intro-text\">\n" +
    "                    <span class=\"name\">{{ brandtitle }}</span>\n" +
    "                    <hr class=\"star-light\">\n" +
    "                    <span class=\"skills\">Front End Developer - Web - Mobile - Researcher</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<section id=\"portfolio\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 text-center\">\n" +
    "                <h2>Portfolio</h2>\n" +
    "                <hr class=\"star-primary\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4 portfolio-item\">\n" +
    "                <a href=\"\" class=\"portfolio-link\" ng-click=\"open('','HTML5 Experiments','html5')\" data-toggle=\"modal\">\n" +
    "                    <div class=\"caption\">\n" +
    "                        <div class=\"caption-content\">\n" +
    "                            <i class=\"fa fa-search-plus fa-3x\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <img src=\"assets/portfolio/cabin.png\" class=\"img-responsive\" alt=\"\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 portfolio-item\">\n" +
    "                <a href=\"\" class=\"portfolio-link\" ng-click=\"open('','Academic Experiments Experiments','Flash')\" data-toggle=\"modal\">\n" +
    "                    <div class=\"caption\">\n" +
    "                        <div class=\"caption-content\">\n" +
    "                            <i class=\"fa fa-search-plus fa-3x\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <img src=\"assets/portfolio/cake.png\" class=\"img-responsive\" alt=\"\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 portfolio-item\">\n" +
    "                <a href=\"\" class=\"portfolio-link\" ng-click=\"open('','Data Visualization','visual')\" data-toggle=\"modal\">\n" +
    "                    <div class=\"caption\">\n" +
    "                        <div class=\"caption-content\">\n" +
    "                            <i class=\"fa fa-search-plus fa-3x\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <img src=\"assets/portfolio/circus.png\" class=\"img-responsive\" alt=\"\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 portfolio-item\">\n" +
    "                <a href=\"\" class=\"portfolio-link\" ng-click=\"open('','Work Projects','work')\" data-toggle=\"modal\">\n" +
    "                    <div class=\"caption\">\n" +
    "                        <div class=\"caption-content\">\n" +
    "                            <i class=\"fa fa-search-plus fa-3x\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <img src=\"assets/portfolio/game.png\" class=\"img-responsive\" alt=\"\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 portfolio-item\">\n" +
    "                <a href=\"\" class=\"portfolio-link\" ng-click=\"open('','Innovative Applications','graphic')\" data-toggle=\"modal\">\n" +
    "                    <div class=\"caption\">\n" +
    "                        <div class=\"caption-content\">\n" +
    "                            <i class=\"fa fa-search-plus fa-3x\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <img src=\"assets/portfolio/safe.png\" class=\"img-responsive\" alt=\"\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 portfolio-item\">\n" +
    "                <a href=\"\" class=\"portfolio-link\" ng-click=\"open('',' More Apps','image')\" data-toggle=\"modal\">\n" +
    "                    <div class=\"caption\">\n" +
    "                        <div class=\"caption-content\">\n" +
    "                            <i class=\"fa fa-search-plus fa-3x\"></i>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <img src=\"assets/portfolio/submarine.png\" class=\"img-responsive\" alt=\"\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("research/research.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("research/research.tpl.html",
    "<section class=\"success\" id=\"research\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 text-center\">\n" +
    "                <h2>Research</h2>\n" +
    "                <hr class=\"star-light\">\n" +
    "            </div>\n" +
    "            <div class=\"col-md-12\"> \n" +
    "\n" +
    "            <div class=\"panel panel-primary\">\n" +
    "            <div class=\"panel-body\">\n" +
    "\n" +
    "              <!--/stories-->\n" +
    "              <div class=\"row post\" ng-repeat=\"post in blog | limitTo:10\" ng-bind-html-unsafe=\"post.content.$t\">    \n" +
    "                <br>\n" +
    "                <div class=\"col-md-2 col-sm-3 text-center\">\n" +
    "                  <a class=\"story-img\" href=\"#\"><img ng-src=\"{{thumbnail}}\" style=\"width:100px;height:100px\" class=\"img-circle\"></a>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-10 col-sm-9\">\n" +
    "                  <h5>{{post.title.$t}}</h5>\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-xs-9\">\n" +
    "                      <p ng-bind-html=\"post.content.$t | unsafe\"></p>\n" +
    "                      <p class=\"lead\"><a href=\"http://kefexresearch.blogspot.com/\" class=\"btn btn-primary\">Read More</a></p>\n" +
    "                      <p class=\"pull-right\"><span class=\"label label-primary\">keyword</span> <span class=\"label label-primary\">tag</span> <span class=\"label label-primary\">post</span></p>\n" +
    "                      <ul class=\"list-inline\"><li><a href=\"#\">{{post.updated.$t}}</a></li><li><a href=\"#\"><i class=\"glyphicon glyphicon-comment\"></i> {{post.link[1].title}}</a></li><li><a href=\"#\"><i class=\"glyphicon glyphicon-share\"></i> 34 Shares</a></li></ul>\n" +
    "                      </div>\n" +
    "                    <div class=\"col-xs-3\"></div>\n" +
    "                  </div>\n" +
    "                  <br><br>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <hr>\n" +
    "              \n" +
    "              <a href=\"http://kefexresearch.blogspot.com/\" class=\"btn btn-primary pull-right btnNext\">More</a>\n" +
    "              \n" +
    "            </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("videos/videos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("videos/videos.tpl.html",
    "<section class=\"success\" id=\"videos\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 text-center\">\n" +
    "                <h2>videos</h2>\n" +
    "                <hr class=\"star-light\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"list-group\">\n" +
    "                <a href=\"#\" ng-repeat=\"vid in videosUrls | startFrom:0 | limitTo:6\" class=\"list-group-item row video-tiem\">\n" +
    "                    <div class=\"col-lg-4\">\n" +
    "                        <iframe width=\"100%\" height=\"250\" ng-src=\"{{vid.id}}\" frameborder=\"0\" allowfullscreen ng-cloak></iframe>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-lg-8\">\n" +
    "                        <h4 class=\"list-group-item-heading\"> {{vid.title}} </h4>\n" +
    "                        <p class=\"list-group-item-text\"> {{vid.description}}</p>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <a href=\"https://www.youtube.com/user/jkefexjs/videos\" class=\"btn btn-primary pull-right btnNext\">More</a>\n" +
    "        </div>\n" +
    "</section>");
}]);
