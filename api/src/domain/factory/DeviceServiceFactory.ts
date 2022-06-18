import DeviceService from "../service/DeviceService";
import DynamoDeviceRepository from "../../infrastructure/DynamoDeviceRepository";

export default class DeviceServiceFactory {
  static create(): DeviceService {
    const repo = new DynamoDeviceRepository();

    return new DeviceService(repo);
  }
}
