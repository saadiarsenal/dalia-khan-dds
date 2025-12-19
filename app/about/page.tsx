import Image from 'next/image';
import { aboutContent, benefits } from '@/lib/data';

export default function About() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {aboutContent.title}
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            {aboutContent.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {aboutContent.description}
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">{aboutContent.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Role</h3>
                <p className="text-gray-600">{aboutContent.role}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Specialties</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {aboutContent.specialties.map((specialty, index) => (
                    <li key={index}>{specialty}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image
                src="/images/about.png"
                alt="Dr. Dalia Khan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Commitment to Excellence
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With a focus on advanced technology and a welcoming environment, we provide a unique 
            and personalized experience for every patient. Our team is dedicated to ensuring the 
            best possible outcomes through expertise and commitment.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe in building strong relationships with our patients, promoting trust and 
            well-being through compassionate care and reliable support.
          </p>
        </div>
      </div>
    </div>
  );
}

