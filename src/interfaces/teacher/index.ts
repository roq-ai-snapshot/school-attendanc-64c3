import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  hire_date?: any;
  subject?: string;
  class?: string;
  section?: string;
  user_id: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  subject?: string;
  class?: string;
  section?: string;
  user_id?: string;
  school_id?: string;
}
