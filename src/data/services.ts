export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
}

export const services: Service[] = [
  {
    id: 'broadcast',
    title: "Broadcast & Creative Support",
    description: "Comprehensive support for broadcast, event, and creative projects.",
    image: "/images/broadcast-support.webp",
    details: "We deliver comprehensive support for broadcast, event, and creative projects, ensuring seamless execution and exceptional results. Our expertise spans live and hybrid productions, event planning, and creative content development. We manage all aspects of production, from technical setup and live streaming to in-person and virtual audience coordination. For creative projects, we provide content planning, scriptwriting, and alignment with branding and messaging strategies."
  },
  {
    id: 'media',
    title: "Media Production",
    description: "Professional photography, videography, and audio production services for your brand.",
    image: "/images/media-production.webp",
    details: "Our media production services include high-quality photography, professional videography, and expert audio recording. We handle everything from pre-production planning to final delivery."
  },
  {
    id: 'events',
    title: "Event Management",
    description: "Comprehensive event planning and production services for in-person and hybrid events.",
    image: "/images/event-management.webp",
    details: "From live streaming to hybrid events and full in-person production, we ensure your event runs smoothly and professionally."
  },
  {
    id: 'content',
    title: "Content Management",
    description: "Strategic content planning, digital asset management, and delivery solutions.",
    image: "/images/content-management.webp",
    details: "Our comprehensive content management solutions encompass digital asset management (DAM), metadata tagging, and multi-platform content delivery strategies. We provide robust digital rights management (DRM) to protect your valuable content assets and ensure compliance. Our solution research services help identify and implement the most effective tools and workflows for your specific needs, keeping you ahead of industry trends and technological advances."
  }
];