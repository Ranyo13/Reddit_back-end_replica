const request = require("request");
const User = require("../models/UserSchema.js");
const flair = require("../models/Flair");
const report = require("../models/Reports");
const notification = require('../models/notificationSchema');
const mongoose = require("mongoose");
const srs = require('../models/subredditsSchema');
const subreddit=srs.Subreddit;
const post = srs.SubredditPostSchema;

describe("user tests", () => {
  let server;
  beforeAll(() => {
    server = require("../index");
  });

  
  afterAll(function (done) {
    User.deleteMany({ Username: { $in: ['Uzumaki', 'sami', 'mostafa'] } }, function () {
      notification.deleteMany({ username: { $in: ['Uzumaki', 'sami', 'mostafa'] }}, function(){
        flair.deleteMany({ username: { $in: ['Uzumaki', 'sami', 'mostafa']}},function(){ 
        subreddit.deleteMany ({ adminUsername: { $in: ['Uzumaki', 'sami', 'mostafa'] } }, function () { 
          
          done()})
        
        })

      });
    });
    

  });

 
  
//
  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "sami",
      Password: "12345678",
      Email: "sami@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("checks creation of new User in database", () => {
      expect(data.status).toBe(200);

      User.findOne({
        $and: [{ Username: testBody.Username }, { Email: testBody.Email }]
      }).then(function(user) {
        expect(user).not.toBe(null);
      });
    });
  });

  


  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678",
      Email: "mostafa@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("checks creation of new User in database", () => {
      expect(data.status).toBe(200);

      User.findOne({
        $and: [{ Username: testBody.Username }, { Email: testBody.Email }]
      }).then(function(user) {
        expect(user).not.toBe(null);
      });
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678",
      Email: "mostafanew@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.status).toBe(406);
      expect(data.body.error).toBe("Username already exists");
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafa@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with an emial that alreadyexists", () => {
      expect(data.body.error).toBe("Email already exists");
      expect(data.status).toBe(406);
    });
  });
  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12",
      Email: "mostafanew@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with a passwrod thats less than 8 characters", () => {
      expect(data.body.error).toBe("Password too short");
      expect(data.status).toBe(406);
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafanewm.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with invalid email format", () => {
      expect(data.body.error).toBe("Invalid Email format");
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafanew@mcom"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with invalid email format", () => {
      expect(data.body.error).toBe("Invalid Email format");
      expect(data.status).toBe(406);
    });
  });

  describe("tests login with non-existing user", () => {
    let data = {};
    let testBody = {
      Username: "mostafal",
      Password: "12345678"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("says that user doesnt exist", () => {
      expect(data.body.error).toBe("User doesnt exist");
      expect(data.status).toBe(404);
    });
  });

  describe("tests login of invalid password", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "123456789"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.body.error).toBe("Invalid Password");
      expect(data.status).toBe(401);
    });
  });

  describe("tests login of valid user", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;

          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.status).toBe(200);
      expect(data.body.message).toBe("successful login");
    });
  });

//Hussein Tests

const head={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJVenVtYWtpIiwiaWF0IjoxNTU1MDc5NjkwfQ.uaNWv4nF4sueP4W72rJmyJg0BBRJF9BDuVCXV2H3X5g'};
const head2={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJtb3N0YWZhIiwiaWF0IjoxNTU1MDkwODAzfQ.VMeEMfrGAjgmxRr7ThWoiSKRtKO5hu95KennRHTJtcg'};

describe("Creating 1st subreddit", function () {
  let data = {};
  beforeAll(function (done) {
    let sr = {
      "base64image": "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gBzW30UOFrDQFTdhANgWgi/HfCtuvXjfbqrCAXrbemmnwOYXus8YhDR+CyIir0YBWkRKioOxhAzHMarJkhtfDfkqAKqra8hmrgIm9X/3SViyCPfFGgEZJvE2v5Vgq/BwOH7QW8gUHud4X5xPLmTyjGjrJUee0TgNFNRZFpFSogAtImXFr2YEYUIM1N5XRXbEOKqSCeQ9A0DWzyVw0Qs/wMhgzMVtIWazUim6VHjYD6zH2EkY6BL7fjzZHW/zA7JWIFc4Sq6njWxVvPo6ae2z1XSnVLWIyKBTgBaRiuILqGZC/cQXPhAwMpmJOHM50bkG8wzB6kl8ZpyzflmzcL+yJK80d18L7HqF/7YXbPvL/IcWYBf5whGy/eMYcVVcpzrIIlJJFKBFRF6BL6SKZNJEqn3sy34HszlYciN49pR+QrOJwMxBLHHAUbAWPHSeWh04wR7ACy8TkgE4aCtbjg9eeSIi5UUBWkTkDJ20OeTUXDlhFFVVF+CD+LnX8wWcgzQfaWHHaa1100YLEZEzpAAtIjKMXtguMoi0qUJEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQGwf8P62La1bzJGk4AAAAASUVORK5CYII=",
      "srName": 'TestSr',
      "srRules": ["llll."],
    };
    request.post("http://127.0.0.1:4000/sr/create", { body: sr, json: true, headers:head2 }, function (error, response, body) {
      data.status = response.statusCode;
      data.body = body;
      done();
    });
  });


  it("Useless", () => {
    expect(1).toBe(1);
  });
});

describe("Creating a post inside subreddit", function() {
  let data = {};
  beforeAll(function(done){
      let sr = {  
          "base64image": "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gBzW30UOFrDQFTdhANgWgi/HfCtuvXjfbqrCAXrbemmnwOYXus8YhDR+CyIir0YBWkRKioOxhAzHMarJkhtfDfkqAKqra8hmrgIm9X/3SViyCPfFGgEZJvE2v5Vgq/BwOH7QW8gUHud4X5xPLmTyjGjrJUee0TgNFNRZFpFSogAtImXFr2YEYUIM1N5XRXbEOKqSCeQ9A0DWzyVw0Qs/wMhgzMVtIWazUim6VHjYD6zH2EkY6BL7fjzZHW/zA7JWIFc4Sq6njWxVvPo6ae2z1XSnVLWIyKBTgBaRiuILqGZC/cQXPhAwMpmJOHM50bkG8wzB6kl8ZpyzflmzcL+yJK80d18L7HqF/7YXbPvL/IcWYBf5whGy/eMYcVVcpzrIIlJJFKBFRF6BL6SKZNJEqn3sy34HszlYciN49pR+QrOJwMxBLHHAUbAWPHSeWh04wR7ACy8TkgE4aCtbjg9eeSIi5UUBWkTkDJ20OeTUXDlhFFVVF+CD+LnX8wWcgzQfaWHHaa1100YLEZEzpAAtIjKMXtguMoi0qUJEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQGwf8P62La1bzJGk4AAAAASUVORK5CYII=",
          "title": 'Test',
          "threadBody": 'TestBody!'
      };
      request.post("http://127.0.0.1:4000/sr/TestSr/thread",
      {body: sr, json: true, headers: head2},
      function(error, response, body){
          data.status = response.statusCode;
          data.body = body;
          postid = data.body._id;
          done();
      });
  });

  it("Creating a post inside subreddit status test", function(){
      expect(data.status).toBe(200);
      expect(data.body.title).toBe("Test");

  });

  it("Creating a post inside subreddit database test", function(){
      post.findOne({_id: postid}, function(err, record){
          expect(record).not.toBe(null);
      });
  });
});


describe("tests registering new users", () => {
  let data = {};
  let testBody = {
    Username: "Uzumaki",
    Password: "rinnegan",
    Email: "sharingan@m.com"
  };

  beforeAll(done => {
    request.post(
      "http://localhost:4000/user/register",
      { json: true, body: testBody },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      }
    );
  });
  it("checks creation of new User in database", () => {
    expect(data.status).toBe(200);

    User.findOne({
      $and: [{ Username: testBody.Username }, { Email: testBody.Email }]
    }).then(function(user) {
      expect(user).not.toBe(null);
    });
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "rinnegan@uzumaki.com"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/Uzumaki",
      { json: true, body: testBody ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual("update successful");
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "mostafa@m.com"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/Uzumaki",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(406);
    expect(data.body).toEqual({error : "Email already exists"});
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "mostafa@m.com"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/Damn",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({ error: "UserNotFound"});
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "mostafacom"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/mostafa",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(406);
    expect(data.body).toEqual({ error: "Invalid Email format" });
  });
});

describe("tests editing users password", () => {
  let data = {};
  let testBody = {
    OldPassword : "12345678",
    NewPassword : "123456789"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/Password/mostafa",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's password in the database", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual("Password successfully updated");
  });
});

describe("tests editing users password", () => {
  let data = {};
  let testBody = {
    OldPassword : "damndfa",
    NewPassword : "1234789"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/Password/mostafa",
      { json: true, body: testBody  ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's password in the database", () => {
    expect(data.status).toBe(401);
    expect(data.body).toEqual({ error: "Wrong Password"});
  });
});

describe("tests editing users password", () => {
  let data = {};
  let testBody = {
    OldPassword : "rinnegan",
    NewPassword : "1234789"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/Password/sdafal",
      { json: true, body: testBody  ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's password in the database", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({ error: "UserNotFound"});
  });

  describe("tests editing users password", () => {
    let data = {};
    let testBody = {
      OldPassword : "rinnegan",
      NewPassword : "14789"
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/edit/Password/Uzumaki",
        { json: true, body: testBody  ,headers:head},
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks editing user's password in the database", () => {
      expect(data.status).toBe(406);
      expect(data.body).toEqual({ error: "Password too short" });
    });
  });


  describe("tests editing users password", () => {
    let data = {};
    let testBody = {
      OldPassword : "rinnegan",
      NewPassword : "sharingan"
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/edit/Password/Uzumaki",
        { json: true, body: testBody  ,headers:head},
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks editing user's password in the database", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual("Password successfully updated");
    });

    
  });
});

describe("tests getting user's info", () => {
  let data = {};
  let testBody = {
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/About/Uzumaki",
      { json: true, body: testBody  ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks getting user's info from the database", () => {
    expect(data.status).toBe(200);
  });

  
});

describe("tests getting user's info", () => {
  let data = {};
  let testBody = {
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/About/mohamed",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks getting user's info from the database", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({error : "UserNotFound"});
  });

  
});


//Hussein & Mostafa tests 2

describe("Adds user", () => {
  let data = {};
  let testBody = {
    fUsername:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/Add",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if Add successful", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "Friend request Sent"});
  });

  
});

describe("accept request", () => {
  let data = {};
  let testBody = {
    fUsername:'Uzumaki'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/accept",
      { json: true, body: testBody ,headers:head2 },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if accepting request is successful", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "Friend request accepted"});
  });

  
});

describe("blocks user", () => {
    let data = {};
    let testBody = {
      blockedUser:'mostafa'
    };

    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/block",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if blocked successful", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual({message : "User Blocked"});
    });

  });

  describe("unfriend user", () => {
    let data = {};
    let testBody = {
      fUsername:'mostafa'
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Unfriend",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Unfriend is  unsuccessful", () => {
      expect(data.status).toBe(401);
      expect(data.body).toEqual({error : "This user is not a friend"});
    });
  
  });
  describe("Adds user", () => {
    let data = {};
    let testBody = {
      fUsername:'mostafa'
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Add",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Add unsuccessful", () => {
      expect(data.status).toBe(401);
      expect(data.body).toEqual({error : "The user to be added is blocked"});
    });
  
    
  });

  describe("Adds user", () => {
    let data = {};
    let testBody = {
      fUsername:'Uzumaki'
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Add",
        { json: true, body: testBody ,headers:head2 },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Add unsuccessful", () => {
      expect(data.status).toBe(401);
      expect(data.body).toEqual({error : "The sending User is blocked"});
    });
  
    
  });

  
  

  describe("blocks user", () => {
    let data = {};
    let testBody = {
      blockedUser:'Uzumaki'
    };

    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/block",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if blocked successful", () => {
      expect(data.status).toBe(404);
      expect(data.body).toEqual({error:"you cant block yourself"});
    });

    
  });



describe("blocks user thats already blocked", () => {
  let data = {};
  let testBody = {
    blockedUser:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/block",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if blocked successful", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({error : "the user you want to block is already blocked"});
  });

  
});

describe("gets info of user that blocked you", () => {
  let data = {};
  let testBody = {
    
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/user/info/Uzumaki",
      { json: true, body: testBody ,headers:head2 },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
);
  });
  it(",checks if unblocked ", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({message : "User doesnt exist"});
  });

});

describe("unblocks user", () => {
  let data = {};
  let testBody = {
    unblockedUser:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/unblock",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if unblocked ", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "User Unblocked"});
  });

  
});



describe("unblocks user that isnt blocked", () => {
  let data = {};
  let testBody = {
    unblockedUser:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/unblock",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if unblocked failed", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({error : "the user you want to unblock isnt blocked"});
  });

  
});


describe("gets info of user ", () => {
  let data = {};
  let testBody = {
    
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/user/info/Uzumaki",
      { json: true, body: testBody ,headers:head2 },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if user sent ", () => {
    expect(data.status).toBe(200);
  });
});

  describe("gets info of user ", () => {
    let data = {};
    let testBody = {
      
    };
  
    beforeAll(done => {
      request.get(
        "http://localhost:4000/user/info/Uzumaki",
        { json: true, body: testBody},
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if user retuned ", () => {
      expect(data.status).toBe(200);
    });

  

  });

  
describe("Adds user", () => {
  let data = {};
  let testBody = {
    fUsername:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/Add",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if Add successful", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "Friend request Sent"});
  });

  
});

describe("Adds user", () => {
  let data = {};
  let testBody = {
    fUsername:"Uzumaki"
  };

  beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Add",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Add unsuccessful", () => {
      expect(data.status).toBe(402);
      expect(data.body).toEqual({error : "User cannot add himself"});
    });

    
  });

  describe("Adds user", () => {
    let data = {};
    let testBody = {
      fUsername:"mostafa"
    };
  
    beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Add",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Add unsuccessful", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "User has already sent a request to the other user"});
      });
  
      
    });

  


  describe("remove request", () => {
    let data = {};
    let testBody = {
      fUsername:"mostafa"
    };
  
    beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/removeReq",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if unfriend successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend request Removed"});
      });
  
      
    });

    describe("Adds user", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Add",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Add successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend request Sent"});
      });
    
      
    });

    describe("reject request", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/reject",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if rejecting request is unsuccessful", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "There isn't a request to be rejected"});
      });
    
      
    });
    

    describe("accept request", () => {
      let data = {};
      let testBody = {
        fUsername:'Uzumaki'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/accept",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if accepting request is successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend request accepted"});
      });
    
      
    });

    describe("accept request", () => {
      let data = {};
      let testBody = {
        fUsername:'Uzumaki'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/accept",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Accepting request is unsuccessfull", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "This user is already a friend"});
      });
    
      
    });

    describe("unfriend user", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Unfriend",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Unfriend successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend is removed from friends list"});
      });
    
    });

    describe("unfriend user", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Unfriend",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Unfriend is  unsuccessful", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "This user is not a friend"});
      });
    
    });

    describe("accept request", () => {
      let data = {};
      let testBody = {
        fUsername:'Uzumaki'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/accept",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Accepting request is unsuccessfull", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "There isn't a request to be accepted"});
      });
    
      
    });


    describe("Create Flair", () => {
      let data = {};
      let testBody = {
        flair:'Uzumaki'
      };
    
      beforeAll(done => {
        request.post(
          "http://localhost:4000/user/CreateFlair",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if missing sr name", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({error:"subreddit name missing"});
      });
    
      
    });

    describe("Create Flair", () => {
      let data = {};
      let testBody = {
        srName:'TestSr'
      };
    
      beforeAll(done => {
        request.post(
          "http://localhost:4000/user/CreateFlair",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if missing sr name", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({error:"flair missing"
      });
      });
    
      
    });
    
    describe("Create Flair", () => {
      let data = {};
      let testBody = {
        srName:'Jogg  '
      };
    
      beforeAll(done => {
        request.post(
          "http://localhost:4000/user/CreateFlair",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if missing sr name", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({error:"subreddit doesnt exist"
      });
      });
    
      
    });

    describe("Create Flair", () => {
      let data = {};
      let testBody = {
        srName:"TestSr",
        flair:"flair_test"
      };
    
      beforeAll(done => {
        request.post(
          "http://localhost:4000/user/CreateFlair",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if missing sr name", () => {

      expect(data.status).toBe(200);

      flair.findOne({
        $and: [{ srName: testBody.srName }, { flair: testBody.flair }]
      }).then(function(user) {
        expect(user).not.toBe(null);
      });
      });
    
      
    });

    describe("Create Flair", () => {
      let data = {};
      let testBody = {
        srName:"TestSr",
        flair:"flair_test"
      };
    
      beforeAll(done => {
        request.post(
          "http://localhost:4000/user/CreateFlair",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if missing sr name", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({error:"you alredy have a flair in this subreddit"

      });
      });
    });

    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };
    
      beforeAll(done => {
        request.get(
          "http://localhost:4000/user/Flairs/TestSr",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({"flair":"flair_test"
      });
      });
    });


    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };
    
      beforeAll(done => {
        request.delete(
          "http://localhost:4000/user/FlairDelete/TestSr",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({"message": "flair removed"
      });
      });
    });

    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };
    
      beforeAll(done => {
        request.get(
          "http://localhost:4000/user/Flairs/TestSr",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({error:"No flairs"});
      });
    });


    
    describe("Reporting a post inside subreddit", function() {
      let data = {};
      let body = {reportText: "This creator is insane."}
      beforeAll(function(done){

          request.post(`http://127.0.0.1:4000/sr/Technology/thread/${postid}/report`,
          {json:true, body:body, headers: head2},
          function(error, request, body){
              data.status = request.statusCode;
              data.body = body;
              done();
              
          });
      });

      it("Useless", () => {
        expect(1).toBe(1);
      });

    });


    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.get(
          "http://localhost:4000/Moderator/Reports/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            reportId=data.body.reports[0]._id;
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(200);
        expect(data.body.reports[0].srName).toEqual("TestSr");
      });
    });


    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.get(
          "http://localhost:4000/Moderator/Reports/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error": "You are not a moderator to any subreddit"
        }
        );
      });
    });


    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.delete(
          "http://localhost:4000/Moderator/Reports/"+reportId,
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          message:"report deleted"
        }
        );
      });
    });


    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.get(
          "http://localhost:4000/Moderator/Reports/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });


      it("checks if correct sr", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error": "No reports"
        }
        );
      });
    });


    describe("Reporting a post inside subreddit", function() {
      let data = {};
      let body = {reportText: "This creator is insane."}
      beforeAll(function(done){

          request.post(`http://127.0.0.1:4000/sr/Technology/thread/${postid}/report`,
          {json:true, body:body, headers: head2},
          function(error, request, body){
              data.status = request.statusCode;
              data.body = body;
              done();
              
          });
      });

      it("Useless", () => {
        expect(1).toBe(1);
      });

    });

    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.get(
          "http://localhost:4000/Moderator/Reports/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            reportId=data.body.reports[0]._id;
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(200);
        expect(data.body.reports[0].srName).toEqual("TestSr");
      });
    });



    
    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.delete(
          "http://localhost:4000/Moderator/Post/"+reportId,
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          message:"Post deleted"
        }
        );
      });
    });



    
    describe("getting flair", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.delete(
          "http://localhost:4000/Moderator/Post/"+reportId,
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if correct sr", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          error:"report doesnt exist"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "asdfasdf"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if creator tries to add a non existing user", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error": "User to be added as moderator doesn't exist"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "mostafa"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks creator adding himself", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error" : "User cannot add himself"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "Username" : "mostafa"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks creator adding himself", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error" : "SrName not found"
        }
        );
      });
    });



    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("No entry for username", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error" : "Username not found"
        }
        );
      });
    });


    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks moderator request sent", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message" : "Moderator request Sent"
        }
        );
      });
    });




    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if moderator has already received a request", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({
          "error": "User has already received a Moderation request"
        }
        );
      });
    });

    describe("removing a Moderator request", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/remove/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if moderator request removed", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message": "Request for moderation removed"
        }
        );
      });
    });

    describe("removing a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "mostafa"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/remove/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks that normal user can't get access to remove functionality", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error": "User is not creator of the subreddit"
        }
        );
      });
    });
    

    describe("removing a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/remove/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if moderator to be removed isn't a moderator", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({
          "error": "User isn't a moderator"
        }
        );
      });
    });

    describe("removing a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "mostafa"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/remove/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if moderator tries to remove himself", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error": "User cannot remove himself"
        }
        );
      });
    });

    describe("removing a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "asdfasdf"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/remove/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if creator tries to remove a non existing moderator", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error": "User to be removed from moderation doesn't exist"
        }
        );
      });
    });


    describe("removing a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "damn",
        "Username" : "mostafa"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/remove/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if creator tries to remove a moderator from a non existing subreddit", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error": "Subbreddit doesn't exist"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks moderator request sent", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message" : "Moderator request Sent"
        }
        );
      });
    });

    describe("Accepting a moderator request", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/accept/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks accepting moderator request sent", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message" : "Moderator request accepted"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks sending a moderator invite to an already existing moderator", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({
          "error" : "User is already a moderator"
        }
        );
      });
    });

    describe("removing a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/remove/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks if moderator  removed", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message": "Moderator removed"
        }
        );
      });
    });



    describe("Accepting a moderator request", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/accept/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks accepting moderator request sent", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error" : "Request doesn't exist"
        }
        );
      });
    });

    describe("Accepting a moderator request", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/accept/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks accepting moderator request sent when there's no entry for SrName", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error" : "SrName not found"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      }; 
    beforeAll(done => {
      request.put(
        "http://localhost:4000/Moderator/Invite/",
        { json: true, body: testBody ,headers:head2 },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          
          done();
        
          
        }
      );
    });
    it("checks moderator request sent", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual({
        "message" : "Moderator request Sent"
      }
      );
    });


    describe("rejecting a moderator request", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/reject/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks rejecting moderator request", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message" : "Moderator request rejected"
        }
        );
      });
    });
  
   
  
    describe("rejecting a moderator request", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/reject/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks rejecting moderator request", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error" : "Request doesn't exist"
        }
        );
      });
    });
  
    describe("rejecting a moderator request", () => {
      let data = {};
      let testBody = {
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/reject/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks rejecting moderator request sent when there's no entry for SrName", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error" : "SrName not found"
        }
        );
      });
    });


    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks moderator request sent", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message" : "Moderator request Sent"
        }
        );
      });
    });

    describe("Accepting a moderator request", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/accept/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks accepting moderator request sent", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message" : "Moderator request accepted"
        }
        );
      });
    });

    describe("Banning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "mostafa"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/ban/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks moderator trying to ban the creator of the subreddit", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error" : "User cannot ban the creator of the subreddit"
        }
        );
      });
    });

    describe("Banning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "adsfa"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/ban/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks moderator trying to ban a non existing user", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error" : "User to be banned doesn't exist"
        }
        );
      });
    });

    describe("Banning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/ban/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks moderator trying to ban a non existing user", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error" : "User cannot ban himself"
        }
        );
      });
    });

    describe("Banning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/ban/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks creator banning a moderator", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message": "Moderator banned successfully"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks adding moderator to a banned user", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({
          "error" : "User is banned from Subreddit"
        }
        );
      });
    });

    describe("Banning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/ban/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks creator banning an already banned user", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error":"User is already banned from Subreddit"
        }
        );
      });
    });

    describe("Banning a user", () => {
      let data = {};
      let testBody = {
        
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/ban/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks creator banning an already banned user", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error":"SrName not found"
        }
        );
      });
    });

    describe("Unbanning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/unban/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks creator unbanning an already banned user", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message": "User unbanned successfully" 
        }
        );
      });
    });
    

    describe("Unbanning a user", () => {
      let data = {};
      let testBody = {
        
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/unban/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks banning a user with missing SrName entry ", () => {
        expect(data.status).toBe(404);
        expect(data.body).toEqual({
          "error":"SrName not found"
        }
        );
      });
    });

    describe("Unbanning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/unban/",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks unbanning a user while not being a moderator ", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error":"User is not authorized to unban"
        }
        );
      });
    });


    describe("Unbanning a user", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/unban/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("Checks creator unbanning an unbanned user", () => {
        expect(data.status).toBe(402);
        expect(data.body).toEqual({
          "error":"User isn't banned from Subreddit"
        }
        );
      });
    });

    describe("Adding a Moderator", () => {
      let data = {};
      let testBody = {
        "SrName" : "TestSr",
        "Username" : "Uzumaki"
        
      };    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/Moderator/Invite/",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            
            done();
          
            
          }
        );
      });
      it("checks moderator request sent", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({
          "message" : "Moderator request Sent"
        }
        );
      });
    });

  });

});