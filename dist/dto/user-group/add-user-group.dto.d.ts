export declare class AddUserGroupDto {
    name: string;
    privileges: PrivilegeDto[];
}
export declare class PrivilegeDto {
    resource: string;
    act: string;
}
