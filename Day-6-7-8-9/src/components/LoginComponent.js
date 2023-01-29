import LoginImg from "../assets/login.svg";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/loginSlice";

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center ">
      <div className="flex-1 border-2 h-screen flex justify-center items-center flex-col">
        <h1 className="text-4xl ">Login</h1>
        <img src={LoginImg} className="p-10 m-5" />
      </div>
      <div className="flex-1 border-2 bg-slate-900 text-white h-screen flex justify-center flex-col p-10 m-2 ">
        <Formik
          initialValues={{ name: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.password) {
              errors.password = "Password is Empty";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            if (values.name && values.password) {
              navigate("/");
              dispatch(login(values));
            }
          }}
        >
          {({ errors, values, handleChange, isSubmitting }) => (
            <Form className="flex flex-col gap-3 justify-center items-center">
              <label htmlFor="name" className="text-xl border-b-2">
                Username
              </label>
              <Field
                name="name"
                type="text"
                className="w-1/2 text-black rounded-sm p-2"
                placeholder="Jane"
                value={values.name}
                onChange={handleChange}
              />
              <div className="text-red-400">{errors.name && errors.name}</div>
              <label htmlFor="password" className="text-xl border-b-2">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="w-1/2 text-black rounded-sm p-2"
                value={values.password}
                onChange={handleChange}
                placeholder="****"
              />
              <div className="text-red-400">
                {errors.password && errors.password}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-none outline-none h-7 p-1 mb-2 mt-5 rounded-md text-md font-medium cursor-pointer bg-yellow-300 text-black text-center"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginComponent;
