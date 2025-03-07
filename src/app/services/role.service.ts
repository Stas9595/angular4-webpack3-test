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
  new Role(16, 'Financial Analyst', false),
  new Role(17, 'Bubble Wrap Technician', false),
  new Role(18, 'Tea Temperature Expert', false),
  new Role(19, 'Cookie Integrity Analyst', false),
  new Role(20, 'Professional Cloud Spotter', false),
  new Role(21, 'Color Harmony Specialist', false),
  new Role(22, 'Meme Curator', false),
  new Role(23, 'Digital Nomad Advisor', false),
  new Role(24, 'Emoji Interpreter', false),
  new Role(25, 'Chief Snack Officer', false),
  new Role(26, 'Head of Comfort Operations', false),
  new Role(27, 'Ambient Sound Consultant', false),
  new Role(28, 'Mood Lighting Designer', false),
  new Role(29, 'Sneaker Hygiene Specialist', false),
  new Role(30, 'Nap Optimization Expert', false),
  new Role(31, 'Jargon Translator', false),
  new Role(32, 'Chief Caffeine Strategist', false),
  new Role(33, 'Plant Communication Specialist', false),
  new Role(34, 'Office Zen Master', false),
  new Role(35, 'Sandwich Architect', false),
  new Role(36, 'Virtual Background Designer', false),
  new Role(37, 'Ice Cream Quality Tester', false),
  new Role(38, 'Social Media Detox Coach', false),
  new Role(39, 'Pillow Comfort Analyst', false),
  new Role(40, 'Wi-Fi Stability Inspector', false)
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
