import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/common/Button';
import { APP_CONFIG } from '@/constants/config';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - {APP_CONFIG.businessName}</title>
      </Helmet>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button as={Link} to="/">
          Return Home
        </Button>
      </div>
    </>
  );
};
