/**
 * Created by kjhaveri on 6/6/2017.
 */
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MaliciousFileService } from './maliciousFile.service'
import { UserProfile } from './userProfile';
import { DefaultModal } from './modal.component';

@Component({
  selector: 'maliciousFile',
  templateUrl: './maliciousFile.html',
  styleUrls: ['./dataTable.scss'],
  providers: [MaliciousFileService]
})


export class MaliciousFile implements OnInit {
  @Output() changed = new EventEmitter<UserProfile>();
  data;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "Date";
  sortOrder = "asc";
  filterargs;
  userProfiles: UserProfile[];
  selectedUserProfile: UserProfile;

  constructor(private modalService: NgbModal, private service: MaliciousFileService) {


    /*this.service.getData().then((data) => {
     this.data = data;
     });*/

  }

  ngOnInit() {
    this.service.getData()
      .then(userProfiles => this.userProfiles = userProfiles);

    this.service.getData().then((data) => {
      this.data = data;
    });

  }

  select(selectedUserProfile: UserProfile) {
    this.selectedUserProfile = selectedUserProfile;
    this.changed.emit(selectedUserProfile);
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = selectedUserProfile.usr_ntid;
    /*activeModal.componentInstance.standard_deviation = selectedUserProfile.stdev;
     activeModal.componentInstance.mean = selectedUserProfile.mean;
     activeModal.componentInstance.deviation_value = selectedUserProfile.deviation_value;
     activeModal.componentInstance.chart_data=selectedUserProfile.chart_data;
     activeModal.componentInstance.filterargs=selectedUserProfile.account_name;
     activeModal.componentInstance.data=this.data;*/

  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.account_name.length;
  }
}
