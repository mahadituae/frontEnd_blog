
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
        <div className="text-center">
            <p className="text-lg font-medium text-gray-600">Generating AI Content...</p>
            <p className="text-sm text-gray-500 mt-2">This can take a moment, especially on the first load.</p>
        </div>
    </div>
  );
};

export default LoadingSpinner;
