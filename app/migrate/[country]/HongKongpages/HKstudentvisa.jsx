import React from "react";
import Image from "next/image";

const Content = () => {
  // Define styles for colored bullets and numbers
  const bulletStyle = {
    color: "#0ea5e9", // sky-600
    fontWeight: "bold",
    marginRight: "8px",
  };

  const numberStyle = {
    color: "#ea580c", // orange-600
    fontWeight: "bold",
    marginRight: "8px",
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "50px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
        color: "#000",
      }}
    >
      <div style={{ marginBottom: "50px" }}>
        <h3 className="text-2xl font-semibold text-black text-center">
          Migrate to Hong Kong –{" "}
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
        </h3>
      </div>

      <p style={{ marginBottom: "20px", fontSize: "18px", color: "rgb(3, 60, 65)" }}>
        Looking for global career growth, world-class living, and access to Asia’s top financial hub? Migrating to Hong Kong gives you a unique advantage — blending vibrant city life, robust economic opportunity, and excellent public services in one of the safest and most modern cities in the world.
      </p>

      <p style={{ marginBottom: "20px", fontSize: "18px", color: "rgb(3, 60, 65)" }}>
        Whether you're a skilled professional, entrepreneur, student, or relocating with family, Hong Kong offers streamlined visa options and a multicultural environment perfect for building your future.
      </p>
<div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
          <Image
            src="/migrate/migrate-uae.png"
            alt="Migrate - Apply Now"
            width={900}
            height={630}
            className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
            priority
            unoptimized
          />
        </div>
      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Why Choose Hong Kong?
      </h3>
      <ul style={{ marginBottom: "30px", paddingLeft: "20px", color: "rgb(3, 60, 65)", fontSize: "16px", listStyle: "none" }}>
        {[
          "Top Global Business Hub – Home to multinational companies, finance, tech & trade sectors",
          "Strategic Asia-Pacific Location – Gateway to Mainland China and Southeast Asia",
          "Safe & Efficient City – Low crime rate, excellent infrastructure, clean and modern environment",
          "Simple Tax System – Among the lowest personal and corporate tax rates globally",
          "International Education – World-class universities and international schools",
          "Affordable Healthcare – Advanced medical system with public and private options",
        ].map((text, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <span style={bulletStyle}>•</span> {text}
          </li>
        ))}
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Popular Hong Kong Visa Options
      </h3>
      <ul style={{ marginBottom: "30px", paddingLeft: "20px", color: "rgb(3, 60, 65)", fontSize: "16px", listStyle: "none" }}>
        {[
          <>
            <strong>General Employment Policy (GEP):</strong> For skilled professionals with a valid job offer in Hong Kong. No quota system; renewable and may lead to permanent residency.
          </>,
          <>
            <strong>Student Visa:</strong> For international students enrolled in full-time accredited programs. Eligible to work part-time on campus and full-time during breaks.
          </>,
          <>
            <strong>Quality Migrant Admission Scheme (QMAS):</strong> Points-based system for talented individuals (no job offer required). Open to professionals in arts, IT, finance, education, and more.
          </>,
          <>
            <strong>Investment Visa (Entrepreneur Visa):</strong> For individuals planning to start or invest in a business in Hong Kong.
          </>,
          <>
            <strong>Dependent Visa:</strong> For spouses and children of visa holders or permanent residents.
          </>,
        ].map((content, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <span style={bulletStyle}>•</span> {content}
          </li>
        ))}
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Who Can Apply to Migrate to Hong Kong?
      </h3>
      <ul style={{ marginBottom: "30px", paddingLeft: "20px", color: "rgb(3, 60, 65)", fontSize: "16px", listStyle: "none" }}>
        {[
          "Have recognized academic qualifications or specialized skills",
          "Hold a valid job offer from a Hong Kong employer (for GEP)",
          "Have a strong background in a field listed under QMAS",
          "Wish to study at an approved Hong Kong educational institution",
          "Plan to establish or join a Hong Kong business",
        ].map((text, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <span style={bulletStyle}>•</span> {text}
          </li>
        ))}
      </ul>

      <h3 style={{ color: "black", fontWeight: "bold", marginBottom: "20px" }}>
        Step-by-Step: Hong Kong Migration Process
      </h3>
      <ol style={{ marginBottom: "30px", paddingLeft: "20px", color: "rgb(3, 60, 65)", fontSize: "16px" }}>
        {[
          "Choose the Right Visa Route",
          "Gather Required Documents (ID, qualifications, offer letter, etc.)",
          "Submit Visa Application to Hong Kong Immigration Department",
          "Wait for Approval (Usually 4–8 weeks)",
          "Travel & Begin Life in Hong Kong",
          "Apply for PR after 7 years of continuous residence",
        ].map((text, i) => (
          <li key={i} style={{ marginBottom: "8px", listStyleType: "decimal", color: "#ea580c" /* orange-600 for number */ }}>
            {text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;
