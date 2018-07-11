/**
 * Created by kjhaveri on 6/13/2017.
 */
import { Component, Input } from '@angular/core';

import { UserProfile } from './userProfile';

@Component({
  moduleId: module.id,
  selector: 'user-profile',
  templateUrl: './userProfile.html',
})
export class UserProfileComponent {
  @Input() userProfile: UserProfile;
}
