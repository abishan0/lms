
import { useForm } from 'react-hook-form';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission here, e.g., send data to an API
  };

  return (
    <div className='p-20 max-w-[600px] mx-auto mt-10'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Name</label>
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
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-3 py-2 border rounded-md outline-none"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        {/* Message Input */}
        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md outline-none"
            placeholder="Enter your message"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-600 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
