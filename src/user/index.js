const User = require("../../models/UserSchema");
const validator = require("email-validator");

class UserHandler {
  constructor() {}
  async isUserFound(owner) {
    let y = await User.findOne({ Username: owner });
    if (y != null) {
       return true;
    }
    else {
       return false;
    }

 }
/**  
   *     a function that Creates a new user
   *     @function handleRegistration
   *     @returns {JSON} the response for the request
   */
  async handleRegistration(req, res) {
   
    const user = await User.findOne({
      $or: [{ Username: req.body.Username }, { Email: req.body.Email }]
    });
/**  
    *    This checks if the username or email already exists 
    *    if the username exists in the database
    *    the response will be { "error": "Username already exists"} with status 406
    *    if the email exist in the database
    *    the response will be { "error": "Email already exists"} with status 406
    * 
    */
    if (user !== null) {
      if (req.body.Username == user.Username) {
        res.status(406).send({ error: "Username already exists" });
      } else {
        res.status(406).send({ error: "Email already exists" });
      }
    }

    
    else {
      if (validator.validate(req.body.Email) == true) 
      { 

    /**  
    *    This checks if the password ti at least 8 characters 
    *    if the password is too short
    *    the response will be { "error": "Password too short"} with status 406
    */        
        if (req.body.Password.length < 8) {
        res.status(406).send({ error: "Password too short" });
      }
      else {

  /**  
            *    This inserts the user after validation
            *    if successful
            *    and sends a response {"Username","Email"} with status 200
            *    otherwise it returns the databe error
            */

        try{
        const user = await User.create(req.body);
        res.status(200).send({"Username":user.Username,"Email":user.Email});
      }

        catch(ex){res.status(406).send({error:ex.message})}
      }
      } else {
 /**  
    *    This checks if the email is teh correct format text@text.***
    *    if the format is wrong
    *    the response will be { "error": "Invalid Email format"} with status 406
    */  
        res.status(406).send({ error: "Invalid Email format" });
      }
    }
  }

  /**  
   *     a function that logs users in
   *     @function handleLogin
   *     @returns {JSON} the response for the request
   */
  async handleLogin(req, res) {

    /**  
    *    This checks if the user actually exists
    *    if the hes doesnt 
    *    the response will be { "error": "User doesnt exist"} with status 404
    *    if it is correct the password will be checked
    */  
        
    const user = await User.findOne({ Username: req.body.Username });

    if (user !== null) {
  /**  
    *    This checks if the users password is correct
    *    if it isnt 
    *    the response will be { "error": "Invalid Password"} with status 401
    *    if it is
    *    the response will be { "error": successful login"} with status 200
    */  

      if (user.Password == req.body.Password) {
        res.status(200).send("successful login");
      } else {
        res.status(401).send({ error: "Invalid Password" });
      }
    } else {
      res.status(404).send({ error: "User doesnt exist" });
    }
  }
  
   /**  
   *     a function that edits the email of the user
   *     @function EditUserEmail
   *     @returns {JSON} the response for the request
   */
  EditUserEmail(req, res){
    /**  
    *    This checks if the Username received is a valid username in the database 
    *    if the username doesn't exist in the database
    *    the response will be { "error": "UserNotFound"} with status 404
    */
    User.findOne({Username: req.params.Username}).then(function(RetUser){
      if(RetUser === null){
        res.status(404).send({ error: "UserNotFound"});
      }
    /**  
    *    This checks if the Email received already exists in the database 
    *    if the email exists in the database
    */
      else
      {
        User.findOne({ Email: req.body.Email } ).then(function(RetEmail){
          if(RetEmail === null)
          {
            /**  
            *    This checks if the Email is valid and can be used
            *    if the Email is valid it updates it in the database
            *    and sends a response "update successful" with status 200
            */
            if (validator.validate(req.body.Email) == true)
             {
              User.findOneAndUpdate(
                {Username: req.params.Username },
                {Email: req.body.Email }).then(function(RetUser){
                  //TODO RETURN 200
                    res.status(200).send("update successful");
                  }); 
            } 
            /**  
            *    If the Email is invalid it sends an error response 
            *    { error: "Invalid Email format" } with status 406
            */
            else
            {
              res.status(406).send({ error: "Invalid Email format" });
            }
                
          }
          /**  
          *    If the Email exists in the database
          *    it sends an error response 
          *    {error : "Email already exists"} with status 406
          */
          else
          {
            res.status(406).send({error : "Email already exists"});
          }
        });
      }

    });
  }

   /**  
   *     a function that edits the Password of the user
   *     @function EditUserPassword
   *     @returns {JSON} the response for the request
   */
  EditUserPassword(req, res){
    /**  
    *    This checks if the Username received is a valid username in the database 
    *    if the username doesn't exist in the database
    *    the response will be { "error": "UserNotFound"} with status 404
    */
    User.findOne({Username: req.params.Username}).then(function(RetUser){
      if(RetUser === null)
      {
        res.status(404).send({ error: "UserNotFound"});
      }
      /**  
      *    This checks if the OldPassword entered by the user
      *    is the same Password saved in the database 
      *    if these password don't match 
      *    the response will be { error: "Wrong Password"} with status 401
      */
      else if (RetUser.Password !== req.body.OldPassword)
      {
        res.status(401).send({ error: "Wrong Password"});
      }
      /**  
      *    This checks if the NewPassword entered by the user
      *    has a length greater than 8 characters
      *    if it's length is less than 8 characters
      *    the response will be { error: "Password too short" } with status 406
      */
      else if (req.body.NewPassword.length < 8)
      {
          res.status(406).send({ error: "Password too short" });
      }
      /**  
      *    This updates the password of the user to the new password 
      *    the response will be "Password successfully updated" with status 200
      */
      else 
      {
        User.findOneAndUpdate(
          {Username: req.params.Username },
          {Password: req.body.NewPassword }).then(function(RetUser){

              res.status(200).send("Password successfully updated");
            });

      }

    });
  }
  /**  
   *     a function that gets the info of the user
   *     @function Getmyinfo 
   *     @returns {JSON} the data of the user or the an error response
   */
  Getmyinfo(req, res){
    /**  
    *    This checks if the Username received is a valid username in the database 
    */
    User.findOne({Username: req.params.Username}).then(function(RetUser){
      /** 
      *    if the username doesn't exist in the database
      *    the response will be { "error": "UserNotFound"} with status 404
      */
      if(RetUser === null)
      {
        res.status(404).send({ "error": "UserNotFound"});
      }
      /**  
      *    This returns the info of the user  
      *    the response will be {Username : "", Email : ""} with status 200
      */
      else
      {
        res.status(200).send({Username:req.params.Username ,Email:RetUser.Email});
      }
      
    });
  }
  

}
module.exports = new UserHandler();
