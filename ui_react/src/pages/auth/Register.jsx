import  { useState } from "react";
import apiService from '../../components/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../assets/logo.png';

export default function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignUp = async () => {
    try {
      const response = await apiService.post('http://localhost:8080/api/auth/register', {
        name: state.name,
        email: state.email,
        password: state.password
      });

      console.log('Signup Successful', response.data);

      toast.success('Signup successful. Welcome aboard!');

      setState({
        name: "",
        email: "",
        password: ""
      });
    } catch (error) {
      console.error('Signup Error', error);
      toast.error('Failed to sign up. Please try again.');
    }
  };

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const validateForm = () => {
    const { name, email, password } = state;

    if (!name) {
      toast.error('Name is required.');
      return false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (!password || password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return false;
    }

    return true;
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    if (validateForm()) {
      handleSignUp();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen">
        {/* Image on the left */}
        <div className="hidden lg:block lg:w-1/2 lg:bg-cover lg:bg-center lg:bg-no-repeat lg:bg-contain">
          <div className="h-full" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}></div>
        </div>

        {/* Registration form on the right */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto max-h-20 w-auto" 
              src={img}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={state.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={state.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={state.password}
onChange={handleChange}
className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
</div>
</div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in
          </a>
        </p>
      </div>
    </div>
  </div>
</>
);
}
