import { Hammer, Building, Wrench, Users, Calculator, Shield } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Construction',
    description: 'Complete construction services for residential, commercial, and industrial projects with modern techniques and quality materials.',
    icon: Building,
    features: ['Residential Buildings', 'Commercial Complexes', 'Industrial Facilities', 'Infrastructure Projects']
  },
  {
    id: 2,
    title: 'Renovation',
    description: 'Professional renovation and remodeling services to upgrade and modernize existing structures with contemporary designs.',
    icon: Hammer,
    features: ['Interior Renovation', 'Exterior Upgrades', 'Kitchen & Bathroom Remodeling', 'Structural Improvements']
  },
  {
    id: 3,
    title: 'Civil Engineering',
    description: 'Expert civil engineering solutions including structural design, site planning, and engineering consultation services.',
    icon: Calculator,
    features: ['Structural Design', 'Site Planning', 'Foundation Engineering', 'Project Management']
  },
  {
    id: 4,
    title: 'Consultancy',
    description: 'Professional construction consultancy services providing expert advice and technical guidance for your projects.',
    icon: Users,
    features: ['Project Planning', 'Cost Estimation', 'Technical Guidance', 'Quality Assurance']
  },
  {
    id: 5,
    title: 'Maintenance',
    description: 'Comprehensive maintenance services to ensure your buildings and infrastructure remain in optimal condition.',
    icon: Wrench,
    features: ['Preventive Maintenance', 'Emergency Repairs', 'System Upgrades', 'Regular Inspections']
  },
  {
    id: 6,
    title: 'Safety & Compliance',
    description: 'Ensuring all projects meet safety standards and regulatory compliance with proper documentation and certification.',
    icon: Shield,
    features: ['Safety Audits', 'Compliance Certification', 'Risk Assessment', 'Safety Training']
  }
];