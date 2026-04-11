import React, { useEffect, useState } from "react";
import Supabase from "../../SupabaseClient";
import "./Subjects.css";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  // multi-select field filter
  const [selectedFields, setSelectedFields] = useState([]);

  // fetch fields
  useEffect(() => {
    const fetchFields = async () => {
      const { data, error } = await Supabase.from("fields").select("*");

      if (error) {
        console.error(error);
        return;
      }

      setFields(data);
    };

    fetchFields();
  }, []);

  // fetch subjects (backend filtering)
  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);

      try {
        let query = Supabase.from("subjects").select("*");

        // backend multi-filter
        if (selectedFields.length > 0) {
          query = query.in("field_id", selectedFields);
        }

        const { data, error } = await query;

        if (error) throw error;

        setSubjects(data);
      } catch (err) {
        console.error("Error fetching subjects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [selectedFields]);

  // checkbox toggle logic
  const toggleField = (fieldId) => {
    setSelectedFields((prev) =>
      prev.includes(fieldId)
        ? prev.filter((id) => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  if (loading) return <p>Loading subjects...</p>;

  return (
    <div className="subjects-layout">
      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <h2>Fields</h2>

        <label className="checkbox-item">
          <input
            type="checkbox"
            checked={selectedFields.length === 0}
            onChange={() => setSelectedFields([])}
          />
          All Fields
        </label>

        {fields.map((field) => (
          <label key={field.id} className="checkbox-item">
            <input
              type="checkbox"
              checked={selectedFields.includes(field.id)}
              onChange={() => toggleField(field.id)}
            />
            {field.name}
          </label>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="subjects-page">
        <h1>All Subjects</h1>

        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`subject-card ${
                expandedId === subject.id ? "expanded" : ""
              }`}
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
                    Created at:{" "}
                    {new Date(subject.created_at).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;