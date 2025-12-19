import { testimonials } from '@/lib/data';
import TestimonialCard from '@/components/TestimonialCard';

export default function Testimonials() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Patient Stories
          </h1>
          <p className="text-2xl text-gray-600">
            Real Experiences, Real Impact
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Experience Matters
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We are committed to providing exceptional dental care and ensuring that every patient 
            feels comfortable, valued, and confident in their treatment. Your satisfaction and 
            well-being are our top priorities.
          </p>
        </div>
      </div>
    </div>
  );
}

