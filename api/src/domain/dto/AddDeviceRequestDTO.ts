export default class AddDeviceRequestDTO {
  readonly name: string;

  constructor(params: { name: string }) {
    this.name = params.name;
  }
}
