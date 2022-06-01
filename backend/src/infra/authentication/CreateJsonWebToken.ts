import * as fs from "fs";
import { User } from "../../boundedContext/user/valueObject/User";
const jwt = require("jsonwebtoken");

export class CreateJsonWebToken {
  private readonly privateKey: string;
  constructor() {
    this.privateKey = JSON.stringify(
      fs.readFileSync(__dirname + "/private.key")
    );
  }

  generateToken = (user: User) => {
    const formattedUser: any = { ...user };
    delete formattedUser.password;
    return jwt.sign(formattedUser, this.privateKey);
  };

  decodeToken = (token: string) => {
    return jwt.verify(token, this.privateKey);
  };
}
