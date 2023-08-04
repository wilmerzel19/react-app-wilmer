import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí deberías realizar la validación del usuario y contraseña,
    // y, si son correctos, almacenar la información en localStorage.
    // Por simplicidad, aquí solo comprobamos si se ingresó un usuario y contraseña.

    if (username && password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      // Puedes agregar más datos del usuario a localStorage si lo deseas.
      window.location.reload(); // Recargar la página para que el estado de inicio de sesión se refleje.
    } else {
      alert('Por favor, ingresa un usuario y contraseña válidos.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-600">
      <h2 className="text-3xl font-bold mb-4">Iniciar sesión</h2>
      <div className="mb-4">
      <h6 className='text-white'>Usuario</h6>
        <input
          type="text"
          placeholder="Usuario"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <h6  className='text-white'>Contraseña</h6>
        <input
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleLogin}
      >
        Ingresar
      </button>
    </div>
  );
};

export default Login;
