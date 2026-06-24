import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/animations/variants';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true, className }) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn('mb-12', centered && 'text-center', className)}
    >
      {subtitle && (
        <span className="text-primary font-semibold tracking-wider uppercase text-sm block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
    </motion.div>
  );
};
