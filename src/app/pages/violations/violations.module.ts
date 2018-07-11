/**
 * Created by kjhaveri on 6/6/2017.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AmChartsDirective } from '@amcharts/amcharts3-angular';



import { Violations } from './violations.component';
import { routing } from './violations.routing';
import { LateralMovement } from "./components/lateralMovement/lateralMovement.component";
import { MalwareService } from "./components/malware/malware.service"
import { MaliciousFile } from "./components/maliciousFile/maliciousFile.component";
import { Malware } from "./components/malware/malware.component"
import { DataFilterPipe } from './components/lateralMovement/data-filter.pipe';
import { LateralMovementDataService } from './components/lateralMovement/lateralMovementData.service';
import { UserProfileComponent} from './components/lateralMovement/userProfile.component'
import { DefaultModal } from './components/lateralMovement/modal.component'
import { AppTranslationModule } from '../../app.translation.module';
import { search } from './components/lateralMovement/userEvents-filter.pipe';
import { SpanPipe } from './components/lateralMovement/span-pipe'
import { GroupByPipe } from './components/lateralMovement/groupBy-pipe'
import { KeysPipe } from './components/maliciousFile/keys.pipe'
import {Botnet} from './components/botnet/botnet.component'
import {BotnetService} from './components/botnet/botnet.service'
import { Arbor} from './components/arbor/arbor.component'
import {ArborDataService} from './components/arbor/arbor.service'
import {BarChartComponent} from './components/arbor/barchart.component'




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    NgbModalModule,
    AppTranslationModule,


  ],
  declarations: [
    AmChartsDirective,
    Violations,
    LateralMovement,
    Botnet,
    MaliciousFile,
    Malware,
    Arbor,
    DataFilterPipe,
    UserProfileComponent,
    DefaultModal,
    search,
    SpanPipe,
    GroupByPipe,
    KeysPipe,
    BarChartComponent



  ],
  entryComponents: [
    DefaultModal
  ],
  providers: [
    LateralMovementDataService,
    MalwareService,
    BotnetService,
    ArborDataService

  ],

})
export class ViolationsModule {}
