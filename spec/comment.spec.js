const Request = require("request");
const Comment = require("../models/commentSchema");
const subredditsSchema = require("../models/subredditsSchema")
const Subreddit = subredditsSchema.Subreddit;
const Post = subredditsSchema.SubredditPostSchema;
const user = require("../models/UserSchema");
const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectID

//let sSubreddit name or ID whatever the thread needs
let th_id, c_id,c_id2,c_id3;
let isodate = new Date().toISOString();
const head={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJNb3N0YWZhMFNoZXJpZiIsImlhdCI6MTU1NTA5Njg3MX0.9eXtK141KOGTKTghedqMJmtN6XwDs4g9FVzvpTEePMo'};
const head2={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJNb3N0YWZhMVNoZXJpZiIsImlhdCI6MTU1NTEwMTU4OX0.qTTyz_xxtZdTK8IouDGfxBLl8oqDK5cm1sAP_snYhDs'};

let user1 = {
    Username: 'Mostafa0Sherif',
    Password: '12345678',
    Email: 'moooo@gmail.com'
};
let user2 = {
    Username: 'Mostafa1Sherif',
    Password: '12345678',
    Email: 'moooo1@gmail.com'
};
let post1 = {
    title: 'Football',
    body: 'Who is the best player in the world?',
    postDate: Date(),
    subredditName: 'Sports'
};
let post2 = {
    title: 'Tennis',
    body: 'Nadal injured again',
    postDate: Date(),
    subredditName: 'Sports'
};
let sr = {
    name: 'Sports',
    posts: [post1, post2],
    date: Date()
};

describe("comment tests", () => {
    let server;
    beforeAll((done) => {
        server = require("../index");
        user.create(user1).then(user.create(user2)).then(
        Post.create(post1).then(function (RetPost) {
            th_id = RetPost._id;
        }).then(Post.create(post2).then(function (RetPost2) {
            th_id2 = RetPost2._id;
        })).then(Subreddit.create(sr)).then(function () {
            done();
        }));

    });
    afterAll(() => {
        server.close();
    });
    describe("Initialising a comment to use it in the get methods", () => {
        let data = {};
        let testBody = {
            content: "Mostafa",
            spoiler: false,
            locked: false,
            reply: false
        };
        let testBody2 = {
            content: "Mostafa2",
            spoiler: false,
            locked: false,
            reply: false
        };
        let testBody3 = {
            content: "Mostafa3",
            spoiler: false,
            locked: true,
            reply: false
        };
        //Posting a Comment before all the tests to use it in getcomment
        beforeAll((done) => {
            Request.post("http://localhost:4000/comment/" + th_id,   //th_id is the thread created above
                { json: true, body: testBody, headers: head },
                (err, res, body) => {
                    data.body = body;
                    data.status = res.statusCode;
                    c_id = data.body.c_id;
                    done();
                });
            Request.post("http://localhost:4000/comment/" + th_id,
            { json: true, body: testBody2, headers: head },
                (err, res, body) => {
                    data.body = body;
                    data.status = res.statusCode;
                    c_id2 = data.body.c_id;
                    done();
                });
            Request.post("http://localhost:4000/comment/" + th_id,
            { json: true, body: testBody3, headers: head },
                (err, res, body) => {
                    data.body = body;
                    data.status = res.statusCode;
                    c_id3 = data.body.c_id;
                    done();
                });
        });

        describe("tests posting a new comment", () => {
            let data = {};
            let testBody = {
                content: "Messi is the GOAT",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/" + th_id,   //th_id is the thread created above
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 200 test", () => {
                expect(data.status).toBe(200);
                //I can't expect the data.body because it brings the ID of the generated comment
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Messi is the GOAT" }).then(function (RetComment) {
                    expect(RetComment).not.toBe(null);
                });
            });
        });
        describe("tests posting a new comment", () => {
            let data = {};
            let testBody = {
                content: "Comment Error",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/012345678901234567891234",    //any false thread ID
                    { json: true, body: testBody, headers: head},
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 404 test", () => {
                expect(data.status).toBe(404);
                expect(data.body.error).toBe('There is no post with this ID');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Comment Error" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });
        describe("tests posting a new comment", () => {
            let data = {};
            let testBody = {
                content: "Comment Error",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/0123456789012345678912",   // invalid Object ID
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 400 test", () => {
                expect(data.status).toBe(400);
                expect(data.body.error).toBe('This is not a valid ID');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Comment Error" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });
        describe("tests posting a new comment", () => {
            let data = {};
            let testBody = {
                content: "",                //Sending an empty comment
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/" + th_id,
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 400 test", () => {
                expect(data.status).toBe(400);
                expect(data.body.error).toBe('You can not post an empty Comment');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });


        describe("tests posting a new comment", () => {
            let data = {};
            let testBody = {
                spoiler: false,         //not sending the content of the comment
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/" + th_id,
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 400 test", () => {
                expect(data.status).toBe(400);
                expect(data.body.error).toBe('The request must include content of the comment');
            });
        });
        describe("tests posting a new reply", () => {
            let data = {};
            let testBody = {
                content: "Aboutrikaaa",
                spoiler: false,
                locked: false,
                reply: true
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/" + c_id,   //c_id2 is the comment created above
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 200 test", () => {
                expect(data.status).toBe(200);
                //I can't expect the data.body because it brings the ID of the generated comment
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Aboutrikaaa" }).then(function (RetComment) {
                    expect(RetComment).not.toBe(null);
                });
            });
        });

        describe("tests posting a new reply", () => {
            let data = {};
            let testBody = {
                content: "Ronaldinho",
                spoiler: false,
                locked: false,
                reply: true
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/" + c_id3,   //c_id3 => locked comment
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 403 test", () => {
                expect(data.status).toBe(403);
                expect(data.body.error).toBe('You can not reply to a locked comment');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Ronaldinho" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });

        describe("tests posting a new reply", () => {
            let data = {};
            let testBody = {
                content: "Ronaldo",
                spoiler: false,
                locked: false,
                reply: true
            };
            beforeAll((done) => {
                Request.post("http://localhost:4000/comment/012345678901234567891234",   //any false comment ID
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 404 test", () => {
                expect(data.status).toBe(404);
                expect(data.body.error).toBe('There is no Comment with this ID');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Ronaldo" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });

        describe("tests getting info a comment", () => {
            let data = {};
            beforeAll((done) => {
                Request.get("http://localhost:4000/comment/" + c_id,
                    { json: true },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        isodate = data.body.dateAdded;
                        done();
                    });
            });
            it("status 200 test", () => {
                expect(data.status).toBe(200);
                expect(data.body).toEqual({
                    _id: c_id,
                    username: 'Mostafa0Sherif',
                    content: "Mostafa",
                    parent_id: th_id.toString(),
                    dateAdded: isodate,
                    votes: 0,
                    spoiler: false,
                    locked: false
                });
            });
        });
        describe("tests getting info a comment", () => {
            let data = {};
            beforeAll((done) => {
                Request.get("http://localhost:4000/comment/012345678901234567891234",    //any false Comment ID
                    { json: true },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 404 test", () => {
                expect(data.status).toBe(404);
                expect(data.body.error).toBe('The Comment ID is not found');
            });
        });

        describe("tests getting all comments of the thread", () => {
            let data = {};
            beforeAll((done) => {
                Request.get("http://localhost:4000/comment/all/" + th_id,    //getting the comments for the created thread
                    { json: true },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 200 test", () => {
                expect(data.status).toBe(200);
            });
        });

        describe("tests getting all comments of the thread", () => {
            let data = {};
            beforeAll((done) => {
                Request.get("http://localhost:4000/comment/all/012345678901234567891234",    //any false thread ID
                    { json: true },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 404 test", () => {
                expect(data.status).toBe(404);
                expect(data.body.error).toBe('There is no post with this ID');
            });
        });
        describe("tests editing a comment", () => {
            let data = {};
            let testBody = {
                content: "Edited Mostafa",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.put("http://localhost:4000/comment/" + c_id,   //th_id is the thread created above
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 200 test", () => {
                expect(data.status).toBe(200);
                expect(data.body).toBe('update successful');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Edited Mostafa" }).then(function (RetComment) {
                    expect(RetComment).not.toBe(null);
                });
            });
        });
        describe("tests editing a comment", () => {
            let data = {};
            let testBody = {
                content: "Edited Mostafa Error",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.put("http://localhost:4000/comment/" + c_id,   //th_id is the thread created above
                    { json: true, body: testBody, headers: head2 },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 403 test", () => {
                expect(data.status).toBe(403);
                expect(data.body.error).toBe('You can only edit your own comments');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Edited Mostafa Error" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });
        describe("tests editing a comment", () => {
            let data = {};
            let testBody = {
                content: "",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.put("http://localhost:4000/comment/" + c_id,   //th_id is the thread created above
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 400 test", () => {
                expect(data.status).toBe(400);
                expect(data.body.error).toBe('You can not post an empty Comment');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });
        describe("tests editing a comment", () => {
            let data = {};
            let testBody = {
                content: "Edited Mostafa Error",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.put("http://localhost:4000/comment/012345678901234567891234",   //any false comment ID
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 404 test", () => {
                expect(data.status).toBe(404);
                expect(data.body.error).toBe('There is no Comment with this ID');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Edited Mostafa Error" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });
        describe("tests editing a comment", () => {
            let data = {};
            let testBody = {
                content: "Edited Mostafa Error",
                spoiler: false,
                locked: false,
                reply: false
            };
            beforeAll((done) => {
                Request.put("http://localhost:4000/comment/0123456789012345678912",   //any false comment ID
                    { json: true, body: testBody, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 400 test", () => {
                expect(data.status).toBe(400);
                expect(data.body.error).toBe('This is not a valid comment ID');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Edited Mostafa Error" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });
        //Delete tests
        describe("tests deleting a comment", () => {
            let data = {};
            beforeAll((done) => {
                Request.delete("http://localhost:4000/comment/" + c_id3,   //th_id is the thread created above
                    { json: true, headers: head2 },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 403 test", () => {
                expect(data.status).toBe(403);
                expect(data.body.error).toBe('You can only delete your own comments');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Mostafa3" }).then(function (RetComment) {
                    expect(RetComment).not.toBe(null);
                });
            });
        });
        describe("tests deleting a comment", () => {
            let data = {};
            beforeAll((done) => {
                Request.delete("http://localhost:4000/comment/" + c_id2,   //th_id is the thread created above
                    { json: true, headers: head },
                    (err, res, body) => {
                        data.body = body;
                        data.status = res.statusCode;
                        done();
                    });
            });
            it("status 200 test", () => {
                expect(data.status).toBe(200);
                expect(data.body).toBe('Delete Successful');
            });
            it("Mongo test", () => {
                Comment.findOne({ content: "Mostafa2" }).then(function (RetComment) {
                    expect(RetComment).toBe(null);
                });
            });
        });
    });
});