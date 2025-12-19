import { education, certifications } from '@/lib/data';

export default function Education() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Education & Credentials
          </h1>
          <p className="text-2xl text-gray-600">
            Professional Background and Qualifications
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-xl text-gray-700 mb-2">{edu.degree}</p>
                    {edu.year && (
                      <p className="text-gray-600">{edu.year}</p>
                    )}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-700 mb-1">Issued by: {cert.issuer}</p>
                {cert.year && (
                  <p className="text-gray-600">Year: {cert.year}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Dalia Khan is committed to continuing education and staying current with the latest 
            advancements in dental care. With a focus on advanced technology and evidence-based 
            practices, she ensures that patients receive the highest quality of care.
          </p>
        </section>
      </div>
    </div>
  );
}

