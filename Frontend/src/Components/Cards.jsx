import PropTypes from 'prop-types';

function Cards({ item }) {
  // Check if item has a valid structure
  if (!item) {
    return null; // Or return some fallback UI if needed
  }

  return (
    <div className='mt-4 my-3 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300">
        <figure>
          <img src={item.image} alt={item.title || item.name} /> {/* Use title or name for alt text */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title || item.name || 'Default Title'} {/* Use title, then name if title is missing */}
            <div className="badge badge-secondary">{item.category}</div> {/* Display item category instead of "NEW" */}
          </h2>
          <p>{item.titile || 'No description available.'}</p> {/* Show titile if title is missing */}
          <div className="card-actions justify-between">
          <div className="badge badge-outline">Rs. {item.price}</div> {/* Display price */}
          <div className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy now</div> {/* Buy Now Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,  // Image URL is required
    title: PropTypes.string,               // Optional title
    name: PropTypes.string,                // Optional name, could be used as fallback
    titile: PropTypes.string,              // Added titile as optional
    description: PropTypes.string,         // Optional description
    category: PropTypes.string.isRequired, // Ensure category is required
    price: PropTypes.number.isRequired     // Ensure price is required
  }).isRequired,
};

export default Cards;
