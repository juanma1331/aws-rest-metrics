// THIRD PARTY
import { DynamoDB } from "aws-sdk";
// LOCAL
import { IDeviceRepository } from "../domain/interfaces";
import Device from "../domain/entity/Device";

export default class DynamoDeviceRepository implements IDeviceRepository {
  private TABLE_NAME = process.env.Table || "";

  private client = new DynamoDB.DocumentClient();

  async add(device: Device): Promise<Device> {
    const params = {
      TableName: this.TABLE_NAME,
      Item: device,
    };

    await this.client.put(params).promise();

    return device;
  }
  remove(pk: string): void {
    // TODO
  }
  async find(pk: string): Promise<Device | undefined> {
    const params = {
      TableName: this.TABLE_NAME,
      Key: { pk },
    };

    const res = await this.client.get(params).promise();

    const device = res.Item
      ? new Device({ pk: res.Item.pk, sk: res.Item.sk, name: res.Item.name })
      : undefined;

    return device;
  }
}
