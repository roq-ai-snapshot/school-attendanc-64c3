import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StaffInterface {
  id?: string;
  hire_date?: any;
  position?: string;
  department?: string;
  user_id: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface StaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  department?: string;
  user_id?: string;
  school_id?: string;
}
