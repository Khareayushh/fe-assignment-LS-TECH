import { Formik } from "formik";
import { atom, useAtom } from "jotai";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
import { login, person } from "../App";

const Login = () => {
  const [user, setUser] = useAtom(person);
  const [logged, setLogged] = useAtom(login);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    e.preventDefault;
  };

  return (
    <div className="bg-gray-400">
      <Navbar />
      {/* form area  */}
      <div className="max-w-screen-sm m-auto h-[100vh] flex flex-col justify-center">
        <p className="mx-2 font-semibold text-xl text-center mb-2">Login</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setUser({ email: values.email, password: values.password});
            // const userData = JSON.parse(localStorage.getItem("users"));
            // localStorage.setItem("users", JSON.stringify({...userData}, values))
            localStorage.setItem("user", JSON.stringify({ email: values.email, password: values.password }));
            setLogged(true);
            setTimeout(()=>{
              navigate("/");
            }, 1000)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mx-2">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="p-1.5 rounded-lg"
                  placeholder="Your email"
                />
                <p className="text-red-600">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="p-1.5 mt-3 rounded-lg"
                  placeholder="Password"
                />
                {errors.password && touched.password && errors.password}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white text-xl p-1.5 mt-4 rounded-lg hover:bg-slate-900 duration-200 font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
