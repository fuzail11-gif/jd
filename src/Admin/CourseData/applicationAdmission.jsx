import React, { useEffect, useRef, useState } from "react";
import Main from "../main";
import { useParams } from "react-router-dom";
import { getOneService } from "../../service/service";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";

const ApplicationAdmission = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const formRef = useRef();
  const fetchData = async () => {
    try {
      const res = await getOneService(id);
      setData(res.data); // backend returns single object
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    return `${String(d.getDate()).padStart(2, "0")}-${String(
      d.getMonth() + 1
    ).padStart(2, "0")}-${d.getFullYear()}`;
  };
  //   const handleDownloadPDF = async () => {
  //     const element = formRef.current;
  //     const canvas = await html2canvas(element, { scale: 2 });
  //     const imgData = canvas.toDataURL("image/png");

  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //     pdf.save(`application-${id}.pdf`);
  //   };
  const handleDownloadPDF = async () => {
    const element = formRef.current;

    // Fallback fix: replace oklch() with rgb() for capture
    element.querySelectorAll("*").forEach((el) => {
      const style = window.getComputedStyle(el);

      if (style.color.includes("oklch")) {
        el.style.color = "rgb(0,0,0)";
      }
      if (style.backgroundColor.includes("oklch")) {
        el.style.backgroundColor = "rgb(255,255,255)";
      }
      if (style.borderColor.includes("oklch")) {
        el.style.borderColor = "rgb(0,0,0)";
      }
    });

    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`application-${id}.pdf`);
  };

  return (
    <Main>
      {/* Top Image */}
      <div className="flex justify-end px-6 mt-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
      <div ref={formRef} className="bg-white p-6">
        <div className="w-full overflow-hidden rounded-t-lg relative flex justify-center">
          <img
            src="/adm1.png"
            alt="JDAX Admission"
            className="w-full object-cover" // shrink by 10%
          />
        </div>

        {/* Heading */}
        <div className="mt-6 px-6 text-center">
          <h1 className="text-2xl font-bold">Application Form</h1>
        </div>

        {/* Photo Box (below heading, right aligned) */}
        <div className="flex justify-end px-6 mt-4">
          <div className="w-32 h-40 border border-gray-400 rounded-md bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Photo</span>
          </div>
        </div>

        {/* Data Fields */}
        <div className="mt-8 px-6" style={{ textTransform: "capitalize" }}>
          {data ? (
            <div className="grid grid-cols-[220px_1fr] gap-y-3 text-xl">
              <p className="font-semibold">Full Name:</p>
              <p>{data.fullName}</p>

              <p className="font-semibold">Date of Birth:</p>
              <p>{formatDate(data.dob)}</p>

              <p className="font-semibold">Gender:</p>
              <p>{data.gender}</p>

              <p className="font-semibold">Mobile:</p>
              <p>{data.mobile}</p>

              <p className="font-semibold">Blood Group:</p>
              <p>{data.bloodGroup}</p>

              <p className="font-semibold">Willing to Join:</p>
              <p>{data.willingToJoin}</p>

              <p className="font-semibold">Mode:</p>
              <p>{data.mode}</p>

              <p className="font-semibold">Mother Tongue:</p>
              <p>{data.motherTongue}</p>

              <p className="font-semibold">Nationality:</p>
              <p>{data.nationality}</p>

              <p className="font-semibold">Religion:</p>
              <p>{data.religion}</p>

              <p className="font-semibold">Community:</p>
              <p>{data.community}</p>

              <p className="font-semibold">Email:</p>
              <p>{data.email}</p>

              <p className="font-semibold">Father Name:</p>
              <p>{data.fatherName}</p>

              <p className="font-semibold">Mother Name:</p>
              <p>{data.motherName}</p>

              <p className="font-semibold">Father Occupation:</p>
              <p>{data.fatherOccupation}</p>

              <p className="font-semibold">Mother Occupation:</p>
              <p>{data.motherOccupation}</p>

              <p className="font-semibold">Father Income:</p>
              <p>{data.fatherIncome}</p>

              <p className="font-semibold">Mother Income:</p>
              <p>{data.motherIncome}</p>

              <p className="font-semibold">Father Mobile:</p>
              <p>{data.fatherMobile}</p>

              <p className="font-semibold">Mother Mobile:</p>
              <p>{data.motherMobile}</p>

              <p className="font-semibold">Present Address:</p>
              <p>{data.presentAddress}</p>

              <p className="font-semibold">Permanent Address:</p>
              <p>{data.permanentAddress}</p>

              <p className="font-semibold">Parish Name:</p>
              <p>{data.parishName}</p>

              <p className="font-semibold">Parish Address:</p>
              <p>{data.parishAddress}</p>

              <p className="font-semibold">Diocese:</p>
              <p>{data.diocese}</p>
            </div>
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
        </div>

        {/* Signature Box */}
        <div className="flex justify-end px-6 mt-12 mb-6">
          <div className="w-48 h-20 border border-gray-400 rounded-md flex items-center justify-center">
            <span className="text-gray-600 text-sm">
              Signature of Candidate
            </span>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ApplicationAdmission;
