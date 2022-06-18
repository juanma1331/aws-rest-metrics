import Device from "./entity/Device";
import Report from "./entity/Report";

export interface IDeviceRepository {
  add: (device: Device) => Promise<Device>;
  remove: (pk: string) => void;
  find: (pk: string) => Promise<Device | undefined>;
}
export interface IReportRepository {
  add: (report: Report) => Promise<Report>;
  findAll: () => Promise<Report[]>;
}
export interface IDomainException {
  msg: string;
}
