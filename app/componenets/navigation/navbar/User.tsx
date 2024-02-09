import React from 'react';

const LoggedInUser: React.FC = () => {
  const username = 'Gagan';

  return (
    <div className="logged-in-user">
      <span>Welcome, Gagan</span>
    </div>
  );
};

export default LoggedInUser;
