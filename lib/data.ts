export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
}

export const services: Service[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description: "Maintaining Oral Health",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Achieving Your Perfect Smile",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Restorative Procedures",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lucas H.",
    text: "Dr. Khan and her team made me feel comfortable and cared for from the moment I walked in. She explained everything clearly and performed the procedure with expertise. I'm delighted with the results and will continue to trust Dr. Khan for all my dental needs!",
    rating: 5,
  },
  {
    id: "2",
    name: "Eva S.",
    text: "Dr. Khan and her team are truly exceptional! My family's visits to the dentist have become easy and enjoyable, thanks to the care provided by Dr. Khan and her team. They go above and beyond to ensure our comfort and provide top-notch care. I've never felt more confident in my smile—thank you, Dr. Khan!",
    rating: 5,
  },
  {
    id: "3",
    name: "Oliver L.",
    text: "Dr. Khan is extremely knowledgeable and gentle, and her entire team is friendly and kind. They even helped me understand my insurance benefits, which was such a relief. I highly recommend them to anyone seeking exceptional dental care!",
    rating: 5,
  },
];

export const education: Education[] = [
  {
    id: "nyu-dental",
    institution: "NYU Dental School",
    degree: "Doctor of Dental Surgery (DDS)",
    description: "Graduate of NYU Dental School with a focus on advanced dental procedures and orthodontics.",
  },
];

export const certifications: Certification[] = [
  {
    id: "dds",
    name: "Doctor of Dental Surgery",
    issuer: "NYU Dental School",
  },
];

export const aboutContent = {
  title: "About Dalia Khan, DDS",
  subtitle: "Passionate about Dental Excellence",
  description: "At Dalia Khan, DDS, we are dedicated to delivering exceptional dental care services tailored to enhance your oral health and smile. Our experienced team provides compassionate and reliable care to ensure your comfort and confidence, prioritizing patient well-being and offering personalized treatment plans to meet individual needs.",
  location: "Bayonne, New Jersey",
  role: "Associate Dentist",
  specialties: ["Advanced Dental Procedures", "Orthodontics"],
};

export const benefits = [
  {
    id: "compassionate-care",
    title: "Compassionate Care",
    description: "Our dedicated team provides compassionate support and assistance, ensuring you receive the care and attention you deserve. We focus on building strong relationships with our patients to promote trust and well-being.",
  },
  {
    id: "experienced-team",
    title: "Experienced Team",
    description: "Our experienced team of dentists and hygienists delivers high-quality dental care services to meet your oral health and cosmetic goals. We are committed to providing a personalized approach to dental care, tailoring our services to your unique needs and preferences.",
  },
  {
    id: "personalized-approach",
    title: "Personalized Approach",
    description: "We believe in a personalized approach to dental care, empowering you to achieve a healthy and beautiful smile with the support and expertise you need.",
  },
];

export const contactInfo = {
  phone: "123-456-7890",
  email: "info@daliakhandds.com",
  address: "500 Terry Francine St. San Francisco, CA 94158",
  officeHours: [
    "Monday - Friday: 9:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 2:00 PM",
    "Sunday: Closed",
  ],
};

