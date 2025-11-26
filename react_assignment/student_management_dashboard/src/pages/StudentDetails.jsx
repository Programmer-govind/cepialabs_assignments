import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favoritesSlice';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        setStudent(response.data);
      } catch (err) {
        setError('Failed to fetch student details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  const handleAddFavorite = () => {
    if (student) {
      dispatch(addFavorite(student));
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!student) return <div>Student not found</div>;

  return (
    <div className="student-details">
      <img src={student.image} alt={student.firstName} className="student-detail-image" />
      <h2>{student.firstName} {student.lastName}</h2>
      <p>Email: {student.email}</p>
      <p>City: {student.address?.city}</p>
      <p>Company: {student.company?.name}</p>
      <button onClick={handleAddFavorite} className="btn btn-secondary">Add to Favorites</button>
      <Link to="/students">
        <button className="btn btn-primary">Back to Students</button>
      </Link>
    </div>
  );
};

export default StudentDetails;