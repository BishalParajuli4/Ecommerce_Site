import { Formik, Form, Field } from "formik";
import { z, object, string } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";

const addProductFormSchema = object({
  name: string({
    required_error: "*Please enter a Full Name",
  }),
  email: string({
    required_error: "*Please enter Email",
  }),
  address: string({
    required_error: "*Please enter address",
  }),
});

const addProduct = async (product) => {
  console.log("this is product", product);
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const LoginForm = () => {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      console.log("User details successfully:", data);
      alert("User details added successfully");
      client.invalidateQueries(["getProducts"]);
    },
    onError: (error) => {
      console.error("Error adding User details:", error);
      alert("Failed to add User details");
    },
  });

  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        email: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        await mutation.mutateAsync({
          name: values.name,
          address: values.address,
          email: z.string().email("Invalid email address"),
        });
        resetForm();
      }}
      validationSchema={toFormikValidationSchema(addProductFormSchema)}
    >
      {({ errors }) => (
        <Form>
          <div className="p-4 font-serif">
            <div>
              <label className="text-md font-semibold text-black">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.name && (
                <div className="text-red-500 pt-2">{errors.name}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">email</label>
              <Field
                type="text"
                name="email"
                placeholder="Enter Email"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.email && (
                <div className="text-red-500 pt-2">{errors.email}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-md font-semibold text-black">
                Address
              </label>
              <Field
                type="text"
                name="address"
                placeholder="Enter address"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.description && (
                <div className="text-red-500 pt-2">{errors.address}</div>
              )}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                // className="bg-red-500 px-4 py-2 rounded-md text-white"
                className={clsx(
                  "bg-[#f7ad0d] px-4 py-2 rounded-md text-white",
                  mutation.isPending ? "opacity-50" : null
                )}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
