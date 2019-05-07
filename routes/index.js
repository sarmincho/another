
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.viewAboutME = function(req, res) {
  res.render('aboutME');
};
