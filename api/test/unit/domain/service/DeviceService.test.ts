import { describe, it, expect, vi } from "vitest";
import DeviceService from "../../../../src/domain/service/DeviceService";
import InMemoryDeviceRepository from "../../../../src/infrastructure/InMemoryDeviceRepository";
import AddDeviceRequestDTO from "../../../../src/domain/dto/AddDeviceRequestDTO";

describe("DeviceService", () => {
  it("should add a device successfully", async () => {
    const dto = new AddDeviceRequestDTO({ name: "homePC" });
    const repo = new InMemoryDeviceRepository();
    const repoSpy = vi.spyOn(repo, "add");
    const deviceService = new DeviceService(repo);

    const device = await deviceService.add(dto);

    expect(repoSpy).toHaveBeenCalledOnce();
    expect(repoSpy).toBeCalledWith(device);
  });
});
