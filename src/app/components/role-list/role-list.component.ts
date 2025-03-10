import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { GroupService } from '../../services/group.service';
import { Group } from '../../models/group.model';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent {
  @Input() group: Group | null = null;

  protected readonly Math = Math;
  roles = this.roleService.getRoles();
  filterMode = 'all';
  searchTerm = '';
  currentPage = 1;
  rolesPerPage = 25;
  editingRoleId: number | null = null;
  editRoleName = '';

  constructor(private roleService: RoleService, private groupService: GroupService) {}

  saveRole(roleId: number) {
    if (this.editRoleName.trim()) {
      this.roleService.editRoleName(roleId, this.editRoleName);
    }
    this.cancelRoleEdit();
  }

  startRoleEdit(role: Role) {
    this.editingRoleId = role.id;
    this.editRoleName = role.name;
  }

  cancelRoleEdit() {
    this.editingRoleId = null;
    this.editRoleName = '';
  }

  toggleRole(roleId: number) {
    if (!this.group) return;

    const index = this.group.roleIds.indexOf(roleId);
    if (index > -1) {
      this.group.roleIds.splice(index, 1);
    } else {
      this.group.roleIds.push(roleId);
    }
    this.groupService.updateGroupRoles(this.group.id, this.group.roleIds);
  }

  toggleRequiredRole(role: Role) {
    const roleUpdated = this.roleService.updateIsRequiredRole(role);
    const groups = this.groupService.getGroups();
    groups.forEach(group => {
      let updatedRequiredRoles = [...group.requiredRoleIds];
      if (roleUpdated.isRequired && !updatedRequiredRoles.includes(roleUpdated.id)) {
        updatedRequiredRoles.push(roleUpdated.id);
        group.roleIds.push(roleUpdated.id);
      } else if (!roleUpdated.isRequired && updatedRequiredRoles.includes(roleUpdated.id)) {
        updatedRequiredRoles = updatedRequiredRoles.filter(id => id !== roleUpdated.id);
      }
      group.requiredRoleIds = updatedRequiredRoles;
      this.groupService.updateGroupRequiredRoles(group.id, updatedRequiredRoles);
    });
  }

  filteredRoles() {
    return this.roles.filter(role => {
      const matchesSearch = role.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      if (this.group) {
        if (this.filterMode === 'assigned') {
          return this.group.roleIds.includes(role.id) && matchesSearch;
        }
        return matchesSearch;
      } else {
        if (this.filterMode === 'required') {
          return role.isRequired && matchesSearch;
        }
        return matchesSearch;
      }
    });
  }

  paginatedRoles() {
    const start = (this.currentPage - 1) * this.rolesPerPage;
    return this.filteredRoles().slice(start, start + this.rolesPerPage);
  }

  totalPages() {
    return Math.ceil(this.filteredRoles().length / this.rolesPerPage) || 1;
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  firstPage() {
    this.currentPage = 1;
  }

  lastPage() {
    this.currentPage = this.totalPages();
  }

  goToPage() {
    const total = this.totalPages();
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    else if (this.currentPage > total) {
      this.currentPage = total;
    }
  }
}
