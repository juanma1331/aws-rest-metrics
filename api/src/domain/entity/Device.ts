export default class Device {
  readonly pk: string;

  readonly sk: string;

  readonly name: string;

  constructor(params: { pk: string; sk: string; name: string }) {
    this.pk = params.pk;
    this.sk = params.sk;
    this.name = params.name;
  }
}
