/**
 * Created by kjhaveri on 6/7/2017.
 */
import { Injectable } from '@angular/core';
import { BaThemeConfigProvider } from '../../../../theme';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LateralMovementDataService {

  dataTableData = [
    {
      "account_name": "averagejoe",
      "policy_name": "Malware Threat Detection",
      "date1": "05/19/2017",
      "time1": "09:18:30 AM",
      "raw_event": "Date: 05/19/2017,Time: 09:18:30 AM,Host: SW550CTXXDPA03,SecurityID: S-1-5-21-626544942-1897595557-2270221122-1109,AccountName: averagejoe,AccountDomain: VSIRT,LogonID: 0xdc254,NewProcessID: 0xbd4,NewProcessName: C:Mimikatzmimikatz-demomimikatz_trunkWin32mimikatz.exe,TokenElevationType: %%1937,CreatorProcessID: 0xf04",
      "flag": true,
      "mean": "",
      "stdev": "",
      "deviation_value": "",
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.29, 0.33, 0.41, 0.26, 0.44],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",

    },
    {
      "account_name": "averagejoe",
      "policy_name": "Privilege Escaltion",
      "date1": "05/19/2017",
      "time1": "09:18:30 AM",
      "raw_event": "Date: 05/19/2017,Time: 09:18:30 AM,Host: SW550CTXXDPA03,SecurityID: S-1-5-21-626544942-1897595557-2270221122-1109,AccountName: averagejoe,AccountDomain:VSIRT,LogonID: 0xdc254,Server: Security,ServiceName: -,Privileges: SeTcbPrivilege,ProcessID: 0xbd4, ProcessName: C:Mimikatzmimikatz-demomimikatz_trunkWin32mimikatz.exe",
      "flag": true,
      "mean": "",
      "stdev": "",
      "deviation_value": "",
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.29, 0.33, 0.41, 0.26, 0.44],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "averagejoe",
      "policy_name": "Explicit Logon",
      "date1": "05/19/2017",
      "time1": "09:20:37 AM",
      "raw_event": "Date: 05/19/2017,Time: 09:20:37 AM,Host: SW550CTXXDPA03,SecurityID: S-1-5-21-626544942-1897595557-2270221122-1109,AccountName: averagejoe,AccountDomain: VSIRT,AccountWhoseCredentialsWereUsed: admterry,AccDomainWhoseCredentialsWereUsed: VSIRT.LAB,TargetServer: LabDC1.vsirt.lab,ProcessID: 0x4,ProcessName: -,NetworkAddress: -,Port: -",
      "flag": true,
      "mean": "",
      "stdev": "",
      "deviation_value": "",
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.29, 0.33, 0.41, 0.26, 0.44],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admrananth",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/16/2017",
      "time1": "09:43:47 AM",
      "raw_event": "Date: 05/16/2017,Time: 09:43:47 AM,Host: SW730VULNRPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admrananth,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: WV933VW10X0017,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V1,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "ffajardo",
      "policy_name": "Explicit logon",
      "date1": "05/16/2017",
      "time1": "11:25:23 PM",
      "raw_event": "Date: 05/16/2017,Time: 11:25:23 PM,Host: SW550CTXXDPA03,SecurityID: VISA\fajardo,AccountName: ffajardo,AccountDomain: VISA,AccountWhoseCredentialsWereUsed: admjosherna,AccDomainWhoseCredentialsWereUsed: VISA,TargetServer: localhost,ProcessID: 0x171c,ProcessName: C:WindowsSystem32inetsrvw3wp.exe,NetworkAddress: -,Port: -",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.29, 0.33, 0.41, 0.26, 0.44],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admrananth",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/15/2017",
      "time1": "01:43:03 PM",
      "raw_event": "Date: 05/15/2017,Time: 01:43:03 PM,Host: SW730VULNRPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admrananth,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: WV933VW10X0017,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V1,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admrananth",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/12/2017",
      "time1": "10:43:49 AM",
      "raw_event": "Date: 05/12/2017,Time: 10:43:49 AM,Host: SW730VULNRPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admrananth,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: WV933VW10X0017,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V1,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admlotam",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/11/2017",
      "time1": "04:44:29 PM",
      "raw_event": "Date: 05/11/2017,Time: 04:44:29 PM,Host: SW720BCRPTPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admlotam,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: OSX-IMG-9801a7a38e69,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V2,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admlotam",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/11/2017",
      "time1": "04:39:20 PM",
      "raw_event": "Date: 05/11/2017,Time: 04:39:20 PM,Host: SW720BCRPTPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admlotam,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: OSX-IMG-9801a7a38e69,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V2,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admrananth",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/11/2017",
      "time1": "04:48:14 PM",
      "raw_event": "Date: 05/11/2017,Time: 04:48:14 PM,Host: SW730VULNRPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admrananth,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: WV933VW10X0017,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V1,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admrananth",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/10/2017",
      "time1": "05:55:41 PM",
      "raw_event": "Date: 05/10/2017,Time: 05:55:41 PM,Host: SW730VULNRPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admrananth,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: WV933VW10X0017,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V1,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admlotam",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/10/2017",
      "time1": "06:39:18 PM",
      "raw_event": "Date: 05/10/2017,Time: 06:39:18 PM,Host: SW720BCRPTPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admlotam,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: OSX-IMG-9801a7936fc1,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V2,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admrananth",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/09/2017",
      "time1": "02:01:41 PM",
      "raw_event": "Date: 05/09/2017,Time: 02:01:41 PM,Host: SW730VULNRPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admrananth,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: WV933VW10X0017,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V1,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admrananth",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/08/2017",
      "time1": "12:59:37 PM",
      "raw_event": "Date: 05/08/2017,Time: 12:59:37 PM,Host: SW730VULNRPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admrananth,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: WV933VW10X0017,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V1,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admjhammock",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/08/2017",
      "time1": "06:01:01 PM",
      "raw_event": "Date: 05/08/2017,Time: 06:01:01 PM,Host: SW550BCRPTPA002,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,logonType: 3,NewLogonAccountName: admjhammock,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: OSX-IMG-c4b301c6f667,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,TransitedServices: -,PackageName: NTLM V2,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.44, 0.333, 0.37444, 0.4555, 0.52, 0.67, 0.72, 0.84],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
            [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admlotam",
      "policy_name": "Workstation name not as per VISA convention",
      "date1": "05/03/2017",
      "time1": "09:57:35 PM",
      "raw_event": "Date: 05/03/2017,Time: 09:57:35 PM,Host: SW720BCRPTPA001,SecurityID: NULL SID,SubjectAccountName: -,SubjectAccountDomain: -,LogonType : 3,NewLogonAccountName: admlotam,NewLogonAccountDomain: VISA,ProcessID: 0x0,ProcessName: -,WorkstationName: OSX-IMG-9801a7a8d777,LogonProcess: NtLmSsp,AuthenticationPackage: NTLM,AuthenticationPackage: -,PackageName: NTLM V2,KeyLength: 0",
      "flag": true,
      "mean": null,
      "stdev": null,
      "deviation_value": null,
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.1, 0.2333, 0.37444, 0.4555, 0.42, 0.36, 0.42, 0.27],
            [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    },
    {
      "account_name": "admangchakr",
      "policy_name": "UBA",
      "date1": "03/31/2017",
      "time1": "",
      "raw_event": "",
      "flag": true,
      "mean": "0.217",
      "stdev": "0.218",
      "deviation_value": "0.91",
      "chart_data": {
        "simpleLineOptions": {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        "simpleLineData": {
          labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20', 'May 25', 'May 30'],
          series: [
            [0.19, 0.2333, 0.37444, 0.4555, 0.52, 0.67, 0.72, 0.97],
            [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
            [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
          ]
        }
      },
      "employee_id": "16368",
      "first_name": "Average",
      "last_name": "Joe",
      "manager": "Above Average Joe",
      "work_email": "average@joe.com",
      "department": "Database & Middleware",
      "Title": "Lead Database Administrtator",
    }

  ]


  constructor(private http: HttpClient, private _baConfig: BaThemeConfigProvider) {
  }


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }


  /*  getData() {
      return this.http
        .get('api/userProfile.json')
        .map((response: Response) => response.json().data);
    }*/

}
