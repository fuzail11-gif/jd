import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { createService } from "../service/service"; // adjust import path
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplicationForm = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    bloodGroup: "",
    willingToJoin: "",
    mode: "",
    motherTongue: "",
    nationality: "",
    religion: "",
    community: "",
    email: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    motherOccupation: "",
    fatherIncome: "",
    motherIncome: "",
    fatherMobile: "",
    motherMobile: "",
    presentAddress: "",
    permanentAddress: "",
    parishName: "",
    parishAddress: "",
    diocese: "",
  });

  const [openConfirm, setOpenConfirm] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Open confirmation dialog on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenConfirm(true);
  };

  // Confirm submission
  const handleConfirm = async () => {
    try {
      await createService(formData);
      toast.success("🎉 Application submitted successfully!");
      setFormData({
        fullName: "",
        dob: "",
        gender: "",
        mobile: "",
        bloodGroup: "",
        willingToJoin: "",
        mode: "",
        motherTongue: "",
        nationality: "",
        religion: "",
        community: "",
        email: "",
        fatherName: "",
        motherName: "",
        fatherOccupation: "",
        motherOccupation: "",
        fatherIncome: "",
        motherIncome: "",
        fatherMobile: "",
        motherMobile: "",
        presentAddress: "",
        permanentAddress: "",
        parishName: "",
        parishAddress: "",
        diocese: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to submit application!");
    } finally {
      setOpenConfirm(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
        <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full">
          {/* Top Image */}
          <div className="w-full overflow-hidden rounded-t-lg relative">
            <img
              src="/adm1.png"
              alt="JDAX Admission"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="p-6">
            {" "}
            <h1 className="text-2xl font-bold mb-4">
              JDAX - Admissions Open
            </h1>{" "}
            <div className="mb-4">
              {" "}
              <h2 className="font-semibold mb-2">Courses Offered:</h2>{" "}
              <ul className="list-disc list-inside">
                {" "}
                <li>UPSC</li> <li>TNPSC</li> <li>SSC</li> <li>BANKING EXAMS</li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="mb-4">
              {" "}
              <h2 className="font-semibold mb-2">Why JDAX?</h2>{" "}
              <ul className="list-disc list-inside">
                {" "}
                <li>Expert Faculty & Mentorship</li> <li>Weekly Tests</li>{" "}
                <li>Doubt-clearing & Feedback Sessions</li>{" "}
                <li>Study Hall, Library Access & Hostel Facility</li>{" "}
                <li>Regular Parent-Teacher Engagement</li>{" "}
              </ul>{" "}
            </div>{" "}
            <p className="font-semibold mb-6">
              {" "}
              📞 For Queries: +91 63799 23050 | +91 73057 46045{" "}
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block font-medium">Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block font-medium">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Mobile */}
                <div>
                  <label className="block font-medium">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block font-medium">Blood Group *</label>
                  <input
                    type="text"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Willing to Join */}
                <div>
                  <label className="block font-medium">
                    Willing to join... *
                  </label>
                  <select
                    name="willingToJoin"
                    value={formData.willingToJoin}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option>UPSC PCM + CSAT + Interview Guidance</option>
                    <option>
                      TNPSC (Groups 1, 2, 2A & 4) Integrated Comprehensive
                      Course
                    </option>
                    <option>SSC / Banking / RRB</option>
                    <option>UPSC Foundation</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Mode */}
                <div>
                  <label className="block font-medium">
                    Offline or Online *
                  </label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option>Offline</option>
                    <option>Online</option>
                  </select>
                </div>

                {/* Mother Tongue */}
                <div>
                  <label className="block font-medium">Mother Tongue *</label>
                  <input
                    type="text"
                    name="motherTongue"
                    value={formData.motherTongue}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block font-medium">Nationality *</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Religion */}
                <div>
                  <label className="block font-medium">Religion</label>
                  <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {/* Community */}
                <div>
                  <label className="block font-medium">Community *</label>
                  <select
                    name="community"
                    value={formData.community}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  >
                    <option value="">Select</option>
                    <option>OC</option>
                    <option>OBC</option>
                    <option>MBC</option>
                    <option>SC/ST</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Father's Name */}
                <div>
                  <label className="block font-medium">Father's Name *</label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Mother's Name */}
                <div>
                  <label className="block font-medium">Mother's Name *</label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Father's Occupation */}
                <div>
                  <label className="block font-medium">
                    Father's Occupation *
                  </label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Mother's Occupation */}
                <div>
                  <label className="block font-medium">
                    Mother's Occupation *
                  </label>
                  <input
                    type="text"
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Father's Income */}
                <div>
                  <label className="block font-medium">
                    Father's Annual Income *
                  </label>
                  <input
                    type="text"
                    name="fatherIncome"
                    value={formData.fatherIncome}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Mother's Income */}
                <div>
                  <label className="block font-medium">
                    Mother's Annual Income *
                  </label>
                  <input
                    type="text"
                    name="motherIncome"
                    value={formData.motherIncome}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Father's Mobile */}
                <div>
                  <label className="block font-medium">
                    Father's Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="fatherMobile"
                    value={formData.fatherMobile}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Mother's Mobile */}
                <div>
                  <label className="block font-medium">
                    Mother's Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="motherMobile"
                    value={formData.motherMobile}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                {/* Present Address */}
                <div className="md:col-span-2">
                  <label className="block font-medium">Present Address *</label>
                  <textarea
                    name="presentAddress"
                    value={formData.presentAddress}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  ></textarea>
                </div>

                {/* Permanent Address */}
                <div className="md:col-span-2">
                  <label className="block font-medium">
                    Permanent Address *
                  </label>
                  <textarea
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  ></textarea>
                </div>

                {/* Parish Name */}
                <div>
                  <label className="block font-medium">
                    Parish Church Name (If Applicable)
                  </label>
                  <input
                    type="text"
                    name="parishName"
                    value={formData.parishName}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {/* Parish Address */}
                <div>
                  <label className="block font-medium">
                    Parish Church Address (If Applicable)
                  </label>
                  <input
                    type="text"
                    name="parishAddress"
                    value={formData.parishAddress}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {/* Diocese */}
                <div>
                  <label className="block font-medium">
                    Diocese (If Applicable)
                  </label>
                  <input
                    type="text"
                    name="diocese"
                    value={formData.diocese}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          Are you sure you want to submit this application?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)} color="error">
            No
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer position="top-right" autoClose={3000} />

      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
};

export default ApplicationForm;
