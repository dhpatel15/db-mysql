var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : 'reviews'
});

var interstProductName = function(randProductName, callback) {
  var sql =  'INSERT INTO products (productName) VALUES ?'
  connection.query(sql, [randProductName], function(err, results) {
    if(err) {
      throw new Error("Error in DB insert", err)
    } else {
      callback(null, results);
    }
  });
};

var interstReview = function(reviewArr, callback) {
  var sql =  'INSERT INTO allReview (review, reviewDate, stars, likes ,user_id, product_id) VALUES ?'
  connection.query(sql, [reviewArr], function(err, results) {
    if(err) {
    	callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


var interstUsers = function(userArr, callback) {
  var sql =  'INSERT INTO users (userName, avatarURL, verifiedUser, userEndorsements) VALUES ?'
  connection.query(sql, [userArr], function(err, results) {
    if(err) {
    	callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


var findProducts = function(pName, callback) {
  var sql =  'SELECT id from products WHERE products.productName = ?'
  connection.query(sql, [pName], function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var findReviews = function(pid, callback) {
  var sql =  'SELECT* from allReview INNER JOIN users ON allReview.user_id = users.id WHERE product_id = ?'
  connection.query(sql, [pid], function(err, results) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports.connection = connection;
module.exports.interstProductName = interstProductName;
module.exports.interstReview = interstReview;
module.exports.interstUsers = interstUsers;
module.exports.findProducts = findProducts;
module.exports.findReviews = findReviews;