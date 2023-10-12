import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  enrollment_date?: any;
  grade_level?: number;
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

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  class?: string;
  section?: string;
  user_id?: string;
  school_id?: string;
}
