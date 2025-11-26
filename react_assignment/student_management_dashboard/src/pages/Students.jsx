import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentCard from '../components/StudentCard';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setStudents(response.data.users);
      } catch (err) {
        setError('Failed to fetch students');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (students.length === 0) return <div>No Students Found</div>;

  return (
    <div className="students">
      <h2>Students</h2>
      <div className="student-list">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Students;