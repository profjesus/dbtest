module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `products` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.send(result);
            // res.render('index.ejs', {
            //     title: "Welcome to Socka | View Players"
            //     ,players: result
            // });
        });
    },
};
