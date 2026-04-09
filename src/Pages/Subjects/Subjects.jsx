import React, { useEffect, useState } from "react";
import Supabase from "../../SupabaseClient";
import "./Subjects.css";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null); // track expanded card

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const { data, error } = await Supabase
          .from("subjects")
          .select("*");

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
          <div
            key={subject.id}
            className={`subject-card ${expandedId === subject.id ? "expanded" : ""}`}
            onClick={() =>
              setExpandedId(expandedId === subject.id ? null : subject.id)
            }
          >
            <h2>{subject.name}</h2>
            <p>{subject.course_code}</p>
            <p>⭐ {subject.rating || "N/A"} / 5</p>

            {expandedId === subject.id && (
              <div className="subject-extra">
                <p>{subject.description}</p>
                <p className="created-at">
                  Created at: {new Date(subject.created_at).toLocaleString()}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;