module.exports = (db) => {
  db.User.create({
    firstName: 'Drew',
    lastName: 'Knoeller',
    email: 'drew@email.com',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  }).then(() => {
    db.User.create({
      firstName: 'Matt',
      lastName: 'Low',
      email: 'matt@email.com',
      password: process.env.ADMIN_USER_PWD,
      isAdmin: true
    }).then(() => {
      db.User.create({
        firstName: 'Bruno',
        lastName: 'Marcenaro',
        email: 'bruno@email.com',
        password: process.env.ADMIN_USER_PWD,
        isAdmin: true
      }).then(() => {
        db.User.create({
          firstName: 'Becky',
          lastName: 'Wilson',
          email: 'becky@email.com',
          password: process.env.ADMIN_USER_PWD,
          isAdmin: true
        }).then(() => {
          db.Category.create({
            name: 'Video Games'
          }).then(() => {
            db.Category.create({
              name: 'Board Games'
            }).then(() => {
              db.Game.create({
                title: 'Elden Ring',
                description: "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.",
                category_id: '1',
                game_id: '1'
              }).then(() => {
                db.Game.create({
                  title: 'Triangle Strategy',
                  description: "Triangle Strategy is a tactical role-playing game developed and published by Square Enix, co-developed by Artdink, and published by Nintendo",
                  category_id: '1',
                  game_id: '1'
                }).then(() => {
                  db.Game.create({
                    title: 'Final Fantasy XIV: A Realm Reborn',
                    description: "Final Fantasy XIV is a massively multiplayer online role-playing game developed and published by Square Enix.",
                    category_id: '1',
                    game_id: '1'
                  }).then(() => {
                      db.Game.create({
                        title: 'Monopoly',
                        description: "Monopoly is a multi-player economics-themed board game.",
                        category_id: '2',
                        game_id: '2'
                      }).then(() => {
                        db.Game.create({
                          title: 'Stratego',
                          description: "Stratego is a strategy board game for two players on a board of 10×10 squares.",
                          category_id: '2',
                          game_id: '2'
                        }).then(() => {
                          db.Game.create({
                            title: 'The Game of Life',
                            description: "Also known simply as Life, is a board game that simulates a person's travels through his or her life",
                            category_id: '2',
                            game_id: '2'
                        });
                      });
                    });
                  });
                });
              });    
            });
          });
        });
      });  
    });
  });
};
