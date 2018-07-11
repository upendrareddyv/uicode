/**
 * Created by kjhaveri on 6/6/2017.
 */
import { Routes, RouterModule } from '@angular/router';

import { Violations } from './violations.component';
import { LateralMovement } from  './components/lateralMovement/lateralMovement.component';
import { MaliciousFile } from  './components/maliciousFile/maliciousFile.component';
import { Malware } from './components/malware/malware.component';
import {Botnet} from "./components/botnet/botnet.component";
import {Arbor} from "./components/arbor/arbor.component"

const routes: Routes = [
  {
    path: '',
    component: Violations,
    children:[
      {path: 'lateralMovement', component: LateralMovement},
      {path: 'maliciousFile', component: MaliciousFile},
      {path: 'malware', component: Malware},
      {path: 'botnet', component: Botnet},
      {path: 'arbor', component: Arbor},
    ]
  }
];

export const routing = RouterModule.forChild(routes);
