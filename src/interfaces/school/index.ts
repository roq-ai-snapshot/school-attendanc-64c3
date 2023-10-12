import { StaffInterface } from 'interfaces/staff';
import { StudentInterface } from 'interfaces/student';
import { TeacherInterface } from 'interfaces/teacher';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  staff?: StaffInterface[];
  student?: StudentInterface[];
  teacher?: TeacherInterface[];
  user?: UserInterface;
  _count?: {
    staff?: number;
    student?: number;
    teacher?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
