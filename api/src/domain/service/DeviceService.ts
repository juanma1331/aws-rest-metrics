// THIRD PARTY
import { v4 as uuid } from "uuid";
// LOCAL
import AddDeviceDTO from "../dto/AddDeviceRequestDTO";
import Device from "../entity/Device";
import DeviceServiceException from "../exception/DatabaseException";
import { IDeviceRepository } from "../interfaces";

export default class DeviceService {
  repository: IDeviceRepository;

  constructor(repository: IDeviceRepository) {
    this.repository = repository;
  }

  async add(dto: AddDeviceDTO): Promise<Device> {
    const pk = uuid();
    const sk = `device#${uuid()}`;

    const device = new Device({ pk: pk, sk: sk, name: dto.name });
    return await this.repository.add(device);
  }

  remove(pk: string): void {
    // TODO
  }

  async find(pk: string): Promise<Device | undefined> {
    return await this.repository.find(pk);
  }
}
