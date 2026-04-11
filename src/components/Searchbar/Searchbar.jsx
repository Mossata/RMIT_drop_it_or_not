import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Supabase from "../../SupabaseClient";
import { search } from "../../assets";
import "./Searchbar.css";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // LIVE SEARCH
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      const fetchResults = async () => {
        const { data, error } = await Supabase
          .from("subjects")
          .select()
          .ilike('name', `%${query}%`)
          .limit(5);

        if (!error) setResults(data);
      };

      fetchResults();
    }, 300); // debounce

    return () => clearTimeout(delay);
  }, [query]);

  console.log("RAW QUERY:", query);
console.log("TYPE:", typeof query);

  // CLICK RESULT → go to subjects page with filter
  const handleClick = (subject) => {
    navigate(`/subjects?subject=${subject.id}`);
  };

  return (
    <div className="search-container">

      {/* SEARCH INPUT */}
      <div className="search-bar">
        <img src={search} alt="search" className="icon" />

        <input
          type="text"
          placeholder="Search subject (e.g. Algorithms)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <span className="clear" onClick={() => setQuery("")}>
            ✖
          </span>
        )}
      </div>

      {/* DROPDOWN */}
      {query && (
        <div className="dropdown">

          <div className="section-header">
            <span>Subjects</span>
          </div>

          {results.length === 0 && (
            <div className="item">
              <div className="sub">No results found</div>
            </div>
          )}

          {results.map((subject) => (
            <div
              key={subject.id}
              className="item"
              onClick={() => handleClick(subject)}
            >
              <div className="info">
                <div className="title">{subject.name}</div>
                <div className="sub">
                  {subject.course_code} · ⭐ {subject.rating || "N/A"}
                </div>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Searchbar;