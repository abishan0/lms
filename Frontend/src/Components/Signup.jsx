import { useState } from 'react'; // Import useState hook
import { useForm } from 'react-hook-form'; // Import useForm
import LoginModal from './LoginModal'; // Import LoginModal component

const Signup = ({ isOpen, onClose }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Manage LoginModal visibility

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize useForm inside the component

  const onSubmit = (data) => {
    console.log('Signup Data:', data); // Log the form data
    onClose(); // Close Signup modal after submission
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        {/* Form section with padding and spacing */}
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          method="dialog" 
          className="rounded-lg p-8 space-y-6"
        >
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose} // Close modal on button click
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-4 text-center">Signup</h3>

          {/* Name Input */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>

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
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
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
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>

          {/* Signup Button and Login Link on the Same Line */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-600 duration-300"
            >
              Signup
            </button>
            <p className="text-sm">
              Have an account?{' '}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() => setIsLoginOpen(true)} // Open LoginModal
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Render LoginModal conditionally */}
      {isLoginOpen && (
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      )}
    </div>
  );
};

export default Signup;
