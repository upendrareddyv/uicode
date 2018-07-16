/**
 * Created by kjhaveri on 6/13/2017.
 */
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal',
  styleUrls: [
    'default-modal.component.scss',
    'chartistJs.scss'
  ],
  templateUrl: './default-modal.component.html'
})

export class DefaultModal implements OnInit {

  modalHeader: string;
  series: JSON
  event_timeline: JSON;
  chart_data: any;
  filterArgs: string;


  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  }

}
