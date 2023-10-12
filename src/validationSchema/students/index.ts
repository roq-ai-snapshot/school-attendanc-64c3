import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  enrollment_date: yup.date().nullable(),
  grade_level: yup.number().integer().nullable(),
  class: yup.string().nullable(),
  section: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
