
export interface DataPoints {
  file_date: any,
  dayofweek: any,
  anomaly_status_53: any,
  anomaly_status_443: any,
  score_53: any,
  score_443: any,
  count_53: any,
  count_443: any
}

export interface ChartData {
  title: string;
  dataPoints: DataPoints[];
}
