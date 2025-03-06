import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable()
export class RoleService {
  private roles: Role[] = [
    new Role(1, 'Pizza Quality Specialist', false),
    new Role(2, 'Air Quality Inspector', false),
    new Role(3, 'Card Game Strategist', false),
    new Role(4, 'Substance Consultant', true),
    new Role(5, 'Noodle Quality Analyst', false),
    new Role(6, 'Lighting Consultant', false),
    new Role(7, 'Sky Observer', false),
    new Role(8, 'Humor Advisor', false),
    new Role(9, 'Entrance Ambassador', false),
    new Role(10, 'Cheese Artisan', false),
    new Role(11, 'Inflatable Specialist', false),
    new Role(12, 'Glass Care Specialist', false),
    new Role(13, 'Sleep Strategist', false),
    new Role(14, 'Oral Hygiene Consultant', false),
    new Role(15, 'Ergonomic Specialist', false),
    new Role(16, 'Financial Analyst', false)
  ];

  getRoles() {
    return this.roles;
  }

  editRole(id: number, newName: string) {
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
