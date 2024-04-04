import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const { loginUser } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (location.state) {
          navigate(location.state);
        } else {
          navigate('/');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">LOGIN PAGE</h1>
      <form onSubmit={handleLogin} className="space-y-3 max-w-96 mx-auto mt-3 border border-stone-400 border-opacity-30 rounded-xl p-6">
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" name="email" className="grow" placeholder="Email" required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type={isPassVisible ? 'text' : 'password'} className="grow" name="password" placeholder="password" required />
          <small onClick={() => setIsPassVisible(!isPassVisible)} className="cursor-pointer hover:text-primary select-none">
            {isPassVisible ? 'hide' : 'show'}
          </small>
        </label>
        <p className="link link-hover">Forgot password?</p>
        <div className="flex justify-center">
          <input type="submit" value="Login" className="btn btn-outline btn-primary uppercase tracking-wider text-base w-full mt-2" />
          {/* <button className="btn btn-outline btn-primary w-full">Register</button> */}
        </div>
        {/* <button onClick={googleHandler} className="btn btn-outline btn-primary w-full">
          Google
        </button> */}
      </form>
    </div>
  );
};

export default Login;
