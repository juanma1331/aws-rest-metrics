import { IDeviceRepository } from "../domain/interfaces";
import Device from "../domain/entity/Device";

export default class InMemoryDeviceRepository implements IDeviceRepository {
  devices: Device[] = [];

  add(device: Device): Promise<Device> {
    this.devices.push(device);

    return new Promise((resolve, _) => {
      resolve(device);
    });
  }
  remove(pk: string): void {
    const updatedDevices = this.devices.filter((d) => d.pk !== pk);

    this.devices = [...updatedDevices];
  }
  find(pk: string): Promise<Device | undefined> {
    return new Promise((resolve, _) => {
      resolve(this.devices.find((d) => d.pk === pk));
    });
  }
}
