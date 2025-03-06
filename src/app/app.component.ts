import { Component } from '@angular/core';
import { Group } from './models/group.model'; // Adjust path if needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedGroup: Group | null = null;
  viewMode: 'groups' | 'roles' = 'groups';

  // Handle event from GroupListComponent
  onGroupSelected(group: Group) {
    this.selectedGroup = group;
  }

  // Switch between 'groups' view and 'roles' view
  switchView(mode: 'groups' | 'roles') {
    this.viewMode = mode;
  }
}
