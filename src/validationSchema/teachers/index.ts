import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  hire_date: yup.date().nullable(),
  subject: yup.string().nullable(),
  class: yup.string().nullable(),
  section: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
