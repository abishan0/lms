import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Signup from './Signup'; // Import Signup component

const LoginModal = ({ isOpen, onClose }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false); // Manage Signup modal state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize useForm inside the component

  const onSubmit = (data) => {
    console.log('Login Data:', data); // Handle form submission
    onClose(); // Close modal after submission
  };

  const switchToSignup = () => {
    setIsSignupOpen(true); // Open Signup
    onClose(); // Close LoginModal
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          {/* Form section with padding and spacing */}
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="rounded-lg p-8 space-y-6"
          >
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mb-4 text-center">Login</h3>

            {/* Email Input */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-2 border rounded-md outline-none"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>

            {/* Login Button and Signup Link on the Same Line */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-600 duration-300"
              >
                Login
              </button>
              <p className="text-sm">
                Not registered?{' '}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={switchToSignup}
                >
                  Signup
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Render Signup if isSignupOpen is true */}
      {isSignupOpen && <Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />}
    </>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
