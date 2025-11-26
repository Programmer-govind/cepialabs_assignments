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
      <img src={student.image} alt={student.firstName} className="student-image" />
      <h3>{student.firstName} {student.lastName}</h3>
      <p>Email: {student.email}</p>
      <p>Role: {student.company?.title || 'N/A'}</p>
      <Link to={`/students/${student.id}`}>
        <button className="btn btn-primary">View Profile</button>
      </Link>
      <button onClick={handleAddFavorite} className="btn btn-secondary">Add to Favorites</button>
    </div>
  );
};

export default StudentCard;