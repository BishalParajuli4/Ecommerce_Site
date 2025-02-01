import { Formik, Form, Field } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Contact = () => {
  const validationSchema = z.object({
    name: z.string().min(5, "Name is required").max(50, "Name is too long"),
    email: z.string().email("Invalid email address"),
    age: z.number().min(18, "You must be at least 18 years old"),
    query: z.string().min(10, "Enter Detailed Query"),
  });

  const initialValues = {
    name: "",
    email: "",
    age: "",
    address: "",
  };

  const handelSubmit = (values, { setSubmitting }) => {
    console.log("form values : ", values);
    setSubmitting(false);
  };
  return (
    <div className="bg-yellow-300 flex justify-center mx-105 py-30 my-10 rounded-4xl font-serif">
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={handelSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className="flex flex-col gap-5">
          <div>
            <label className="mr-2">Name</label>
            <Field
              type="text"
              name="name"
              className="border border-red-500 rounded-md"
            />
            {errors.name}
          </div>

          <div>
            <label className="mr-2">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border border-red-500 rounded-md"
            />
            {errors.email}
          </div>

          <div>
            <label className="mr-2">Age</label>
            <Field
              type="number"
              name="age"
              className="border border-red-500 rounded-md"
            />
            {errors.age}
          </div>

          <div>
            <label className="mr-2">Query</label>
            <Field
              type="text"
              name="query"
              className="border border-red-500 rounded-md"
            />
            {errors.address}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-black rounded-md bg-amber-600 text-yellow-300 mx-15 p-3"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};
export default Contact;
