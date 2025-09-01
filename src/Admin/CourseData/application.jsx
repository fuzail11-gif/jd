import React, { useEffect, useState } from "react";
import Main from "../main";
import Table from "../table";
import { getPost } from "../../service/service";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const [data, setData] = useState([]);
  const columns = ["Name", "Course"];
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 GET all applications
  const fetchData = async () => {
    try {
      const res = await getPost();

      // map response into only required fields
      const formatted = res.data.map((item) => ({
        id: item._id,
        name: item.fullName, // maps to "Name"
        course: item.willingToJoin, // maps to "Course"
      }));

      setData(formatted);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <>
      <Main>
        <Table
          data={data}
          columns={columns}
          onEdit={(row) => navigate(`/application-detail/${row.id}`)}
        />
      </Main>
    </>
  );
};

export default Application;
