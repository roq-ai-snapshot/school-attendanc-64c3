import * as yup from 'yup';

export const staffValidationSchema = yup.object().shape({
  hire_date: yup.date().nullable(),
  position: yup.string().nullable(),
  department: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
