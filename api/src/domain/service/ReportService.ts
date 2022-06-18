import AddReportDTO from "../dto/AddReportRequestDTO";
import Report from "../entity/Report";
import { IReportRepository } from "../interfaces";

export default class ReportService {
  repository: IReportRepository;

  constructor(repository: IReportRepository) {
    this.repository = repository;
  }

  async add(dto: AddReportDTO): Promise<Report> {
    return await this.repository.add(
      new Report({
        pk: dto.pk,
        sk: dto.sk,
        cpuUsage: dto.cpuUsage,
      })
    );
  }

  findAll(): Report[] {
    // TODO
    return [];
  }
}
