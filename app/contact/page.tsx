import ContactForm from '@/components/ContactForm';
import { contactInfo } from '@/lib/data';

export default function Contact() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-600">
            Get in Touch with Our Team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700">{contactInfo.address}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                <ul className="space-y-1 text-gray-700">
                  {contactInfo.officeHours.map((hours, index) => (
                    <li key={index}>{hours}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-gray-400">Map Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

