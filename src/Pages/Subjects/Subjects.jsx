import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Supabase from "../../SupabaseClient";
import "./Subjects.css";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const { data, error } = await Supabase
          .from("subjects")      // your Supabase table name
          .select("*");          // select all columns

        if (error) throw error;
        setSubjects(data);
      } catch (err) {
        console.error("Error fetching subjects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  if (loading) return <p>Loading subjects...</p>;

  return (
    <div className="subjects-page">
      <h1>All Subjects</h1>

      <div className="subjects-grid">
        {subjects.map((subject) => (
          <div key={subject.id} className="subject-card">
            <h2>{subject.name}</h2>
            <p>{subject.course_code}</p>
            <p>⭐ {subject.rating} / 5</p>
            {/* Example link to details page */}
            {/* <Link to={`/subjects/${subject.id}`}>View Details</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;