import GalleryGrid from '@/components/GalleryGrid';

// Placeholder gallery images - replace with actual images
const galleryImages = [
  { id: '1', src: '/images/gallery-1.jpg', alt: 'Office Photo 1', category: 'Office' },
  { id: '2', src: '/images/gallery-2.jpg', alt: 'Office Photo 2', category: 'Office' },
  { id: '3', src: '/images/gallery-3.jpg', alt: 'Professional Photo 1', category: 'Professional' },
  { id: '4', src: '/images/gallery-4.jpg', alt: 'Professional Photo 2', category: 'Professional' },
  { id: '5', src: '/images/gallery-5.jpg', alt: 'Office Photo 3', category: 'Office' },
  { id: '6', src: '/images/gallery-6.jpg', alt: 'Professional Photo 3', category: 'Professional' },
];

export default function Gallery() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-2xl text-gray-600">
            Our Office and Professional Photos
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={galleryImages} />

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our modern, welcoming office is designed with your comfort in mind. We use advanced 
            technology and maintain a clean, professional environment to ensure the best possible 
            experience for our patients.
          </p>
        </div>
      </div>
    </div>
  );
}

