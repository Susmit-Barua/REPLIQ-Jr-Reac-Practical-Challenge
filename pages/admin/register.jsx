import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/index";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Register() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  return (
    <div>
      <form
        action=""
        method="post"
        class="w-[400px] mx-auto p-6 my-16"
        onSubmit={handleSubmit}
      >
        <h2 class="text-2xl font-semibold text-center mb-4">
          Create an account
        </h2>
        <p class="text-center text-gray-500 mb-3">
          or
          <Link
            href="/admin/login"
            class="text-sm text-purple-700 hover:text-purple-600"
          >
            login with existing account
          </Link>
        </p>
        <div class="mb-4">
          <input
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div class="mb-4">
          <input
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div class="mb-4">
          <input
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            type="phone"
            autoComplete="off"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div class="mb-4">
          <input
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full">
              {errors.password}
            </p>
          ) : null}
        </div>
        <div class="mb-4">
          <input
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full">
              {errors.confirm_password}
            </p>
          ) : null}
        </div>
        <button
          class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 w-full"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
