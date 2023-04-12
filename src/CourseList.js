import React, { useState } from 'react';
import { gql, useLazyQuery } from "@apollo/client";

const GET_COURSE_BY_ID = gql`
  query Course($_id: String!) {
    course(_id: $_id) {
      coursecode
      coursename
      section
      semester
    }    
  }
`;

const CourseList = () => {
  const [courseId, setCourseId] = useState("");
  const [getCourseById, { loading, error, data }] = useLazyQuery(GET_COURSE_BY_ID); 

  const handleSearch = () => {
    getCourseById({ variables: { _id: courseId } });
  }

  return (
    <div>
      <div>
        <label htmlFor="courseId">Course ID: </label>
        <input id="courseId" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.stack}</p>}
      {data && (
        <div>
          <h2>Course Information:</h2>
          <p><strong>Course Code:</strong> {data.course.coursecode}</p>
          <p><strong>Course Name:</strong> {data.course.coursename}</p>
          <p><strong>Section:</strong> {data.course.section}</p>
          <p><strong>Semester:</strong> {data.course.semester}</p>
        </div>
      )}
    </div>
  );
}

export default CourseList;
