import {Component, OnInit} from '@angular/core';
import { ArborDataService } from './arbor.service'


@Component({
  selector: 'arbor',
  templateUrl: './arbor.html',
  styleUrls: ['./arbor.css', './export.css', './dataTables.scss'],
  providers: [ArborDataService],
})

export class Arbor implements OnInit{

  data;
  data2;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "file_date";
  sortOrder = "desc";
  filterargs;

  constructor(private service: ArborDataService) {
  }

  ngOnInit() {
    this.service.getData().then((data) => {
      this.data = data;
      this.data2 = data;

    });


  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.account_name.length;
  }



}



