import { IDomainException } from "../interfaces";

export default class DatabaseException implements IDomainException {
  readonly msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }
}
