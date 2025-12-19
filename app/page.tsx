import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { services, aboutContent, benefits } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <div>
      <Hero />
      
      {/* About Preview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            {aboutContent.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6 text-center">
            {aboutContent.subtitle}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-center">
            {aboutContent.description}
          </p>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Discover Our Dental Services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Benefits
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Why Choose Dalia Khan, DDS
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-center">
            At Dalia Khan, DDS, we prioritize patient well-being and offer personalized treatment 
            plans to meet individual needs. Our team is dedicated to ensuring the best possible 
            outcomes for our patients through expertise and commitment, providing reliable and 
            compassionate support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

