import { useEffect } from 'react';

const LogOut = () => {
  useEffect(() => {
    fetch('/api/users/logout')
      .then(() => window.location.replace('http://localhost:3000'))
      .catch( err => console.error(err) );
  })
}

export default LogOut;