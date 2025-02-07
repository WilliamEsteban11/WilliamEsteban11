import { Router, Request, Response, NextFunction, request, response } from 'express';
const usersRouter = Router();
var User = mongoose.model("User");

RouterOptions ('/', function(Request: any, Response: any, _NextFunction: any) {
  var user = new User({ });
  user.save(function(){
    response.send("Hello World");
  });
});

function RouterOptions(arg0: string, arg1: (Request: any, Response: any, _NextFunction: any) => void) {
    throw new Error('Function not implemented.');
}
