import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favoritesSlice';

const StudentCard = ({ student }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(student));
  };

  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Role: {student.company?.name || 'N/A'}</p>
      <Link to={`/students/${student.id}`}>
        <button>View Profile</button>
      </Link>
      <button onClick={handleAddFavorite}>Add to Favorites</button>
    </div>
  );
};

export default StudentCard;