export class Group {
  constructor(
    public id: number,
    public name: string,
    public roleIds: number[],
    public requiredRoleIds: number[],
  ) {}
}
