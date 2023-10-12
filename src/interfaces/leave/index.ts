import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LeaveInterface {
  id?: string;
  start_date?: any;
  end_date?: any;
  reason?: string;
  status?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LeaveGetQueryInterface extends GetQueryInterface {
  id?: string;
  reason?: string;
  status?: string;
  user_id?: string;
}
