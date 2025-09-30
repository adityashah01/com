import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import Button from '../common/Button';

const AboutPreview: React.FC = () => {
  const features = [
    { icon: CheckCircle, text: 'Quality Assurance' },
    { icon: Award, text: 'Industry Certified' },
    { icon: Users, text: 'Expert Team' },
    { icon: Target, text: 'On-time Delivery' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Building Excellence Since 2004
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Energetice Nepal has been at the forefront of Nepal's construction industry for over 
              two decades. We combine traditional craftsmanship with modern technology to deliver 
              exceptional results that stand the test of time.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our commitment to quality, safety, and innovation has made us one of Nepal's most 
              trusted construction companies. From residential homes to large-scale commercial 
              projects, we bring your vision to life.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>

            <Button>Learn More About Us</Button>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Construction site"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <img
                    src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Building design"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
                  <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern building"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </motion.div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl"
              >
                <h4 className="text-2xl font-bold text-orange-500 mb-1">20+</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;