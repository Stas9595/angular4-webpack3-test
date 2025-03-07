import { Component, Output, EventEmitter } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { RoleService } from '../../services/role.service';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {
  groups = this.groupService.getGroups();
  roles = this.rolesService.getRoles();
  newGroupName = '';
  selectedGroup: Group | null = null;
  editingGroupId: number | null = null;
  editName = '';

  @Output() groupSelected = new EventEmitter<Group>();

  constructor(private groupService: GroupService, private rolesService: RoleService) { }

  addGroup() {
    if (this.newGroupName.trim()) {
      const requiredRoles: number[] = this.roles.filter((item) => item.isRequired === true).map((item) => item.id);
      const notRequiredRoles: number[] = this.roles.filter((item) => item.isRequired === true).map((item) => item.id);
      console.log(requiredRoles);
      this.groupService.addGroup(this.newGroupName, notRequiredRoles, requiredRoles);
      this.groups = this.groupService.getGroups();
      this.newGroupName = '';
    }
  }

  onSelectGroup(group: Group) {
    if (this.editingGroupId !== null && this.editingGroupId !== group.id) {
      this.cancelEdit();
    }

    this.selectedGroup = group;
    this.groupSelected.emit(group);
  }

  startEdit(group: Group, event: MouseEvent) {
    event.stopPropagation();
    this.editingGroupId = group.id;
    this.editName = group.name;
  }

  saveEdit(id: number) {
    if (this.editName.trim()) {
      this.groupService.editGroup(id, this.editName);
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingGroupId = null;
    this.editName = '';
  }
}
