import { services } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-2xl text-gray-600">
            Discover Our Dental Services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            At the Dentist
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            We offer comprehensive dental care services tailored to enhance your oral health and smile. 
            Our experienced team provides compassionate and reliable care to ensure your comfort and confidence, 
            prioritizing patient well-being and offering personalized treatment plans to meet individual needs.
          </p>
        </div>
      </div>
    </div>
  );
}

