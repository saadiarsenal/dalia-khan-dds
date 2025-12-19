import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Dalia Khan, DDS
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Professional Dental Care in Bayonne, New Jersey
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Welcome to the professional portfolio website for Dalia Khan, a graduate of NYU Dental School. 
              Working as an associate dentist in Bayonne, New Jersey, Dalia Khan offers world-class patient 
              care and specializes in advanced dental procedures, with a particular interest in Orthodontics. 
              With a focus on advanced technology and a welcoming environment, Dalia Khan provides a unique 
              and personalized experience for every patient.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Dalia Khan
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-400 text-lg">Professional Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

