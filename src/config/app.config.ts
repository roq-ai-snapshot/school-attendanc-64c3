interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['School Administrator', 'Teacher', 'School Staff', 'Student', 'School Owner'],
  tenantName: 'School',
  applicationName: 'School Attendance Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View school information',
    'View teacher information',
    'View student information',
    'View staff information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage school details',
    'Manage student records',
    'Manage teacher profiles',
    'Manage staff details',
    'Manage leave requests',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/8fb85249-b021-4ad2-b3ed-f7ba2d77c496',
};
