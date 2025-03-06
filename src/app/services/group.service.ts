import { Injectable } from '@angular/core';
import { Group } from '../models/group.model';

@Injectable()
export class GroupService {
  private groups: Group[] = [
    new Group(1, 'Admins', [1, 2, 4], [4]),
    new Group(2, 'Managers - Tech', [3, 4], [4]),
    new Group(3, 'Supervisor', [4, 5, 6], [4]),
    new Group(4, 'Agent', [4, 7, 8], [4])
  ];

  getGroups() {
    return this.groups;
  }
  addGroup(name: string, roles: number[], requiredRoles: number[]) {
    this.groups.push(new Group(this.groups.length + 1, name, roles, requiredRoles));
  }
  editGroup(id: number, newName: string) {
    const group = this.groups.find(g => g.id === id);
    if (group) {
      group.name = newName;
    }
  }
  updateGroupRequiredRoles(groupId: number, requiredRoleIds: number[]) {
    const group = this.groups.find(g => g.id === groupId);
    if (group) {
      group.requiredRoleIds = requiredRoleIds;
    }
  }
  updateGroupRoles(groupId: number, roleIds: number[]) {
    const group = this.groups.find(g => g.id === groupId);
    if (group) {
      group.roleIds = roleIds;
    }
  }

}
