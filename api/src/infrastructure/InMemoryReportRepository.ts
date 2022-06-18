import { IReportRepository } from "../domain/interfaces";
import Report from "../domain/entities/Report";

export default class InMemoryReportRepository implements IReportRepository {
  reports = [
    new Report({ pk: "1", sk: "report1", cpuUsage: 36 }),
    new Report({ pk: "1", sk: "report2", cpuUsage: 85 }),
    new Report({ pk: "1", sk: "report3", cpuUsage: 65 }),
  ];

  add(report: Report): Report {
    this.reports.push(report);

    return report;
  }

  findAll(): Report[] {
    return this.reports;
  }
}
