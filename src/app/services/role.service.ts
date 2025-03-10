import { Injectable } from '@angular/core';
import {Role, roles} from '../models/role.model';

@Injectable()
export class RoleService {
  private roles: Role[] = roles;

  getRoles() {
    return this.roles;
  }

  editRoleName(id: number, newName: string) {
    const role = this.roles.find(r => r.id === id);
    if (role) {
      role.name = newName;
    }
  }

  updateIsRequiredRole(updatedRole: Role): Role {
    const role = this.roles.find(r => r.id === updatedRole.id);
    if (role) {
      role.isRequired = !role.isRequired;
    }
    return role;
  }
}
