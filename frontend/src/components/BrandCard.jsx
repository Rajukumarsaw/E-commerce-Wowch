
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const BrandCard = ({brandLogo, brand}) => {
  return (
    <Link to={`/menu/${brand}`} className="w-[200px] h-[150px] p-3 bg-gray-200 rounded-xl ">
      <img src={brandLogo} alt="brandLogo" className="w-full h-full overflow-hidden"/>
    </Link>
  )
}
BrandCard.propTypes = {
    brandLogo: PropTypes.string.isRequired, 
    brand:PropTypes.string.isRequired,
  };
export default BrandCard
