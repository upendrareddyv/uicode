import {Timestamp} from "rxjs";
/**
 * Created by kjhaveri on 6/13/2017.
 */
export class UserProfile {
  constructor(
    public computer: string,
    public alrt_hdr: string,
    public alrt_date: string,
    public ip_addr: string,
    public usr_ntid: string,
    public file_nm: string,
    public chart_data: any
  ) { }
}
