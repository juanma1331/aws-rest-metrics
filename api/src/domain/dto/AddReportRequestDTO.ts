export default class AddReportRequestDTO {
  readonly pk: string;

  readonly sk: string;

  readonly cpuUsage: number;

  constructor(params: { pk: string; sk: string; cpuUsage: number }) {
    this.pk = params.pk;
    this.sk = params.sk;
    this.cpuUsage = params.cpuUsage;
  }
}
