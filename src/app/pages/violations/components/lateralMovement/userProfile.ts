import {Timestamp} from "rxjs";
/**
 * Created by kjhaveri on 6/13/2017.
 */
export class UserProfile {
  constructor(
    public account_name: string,
    public policy_name: string,
    public date1: string,
    public time1: string,
    public raw_event: string,
    public flag: string,
    public mean: string,
    public stdev: string,
    public deviation_value: string,
    public chart_data: any
  ) { }
}
