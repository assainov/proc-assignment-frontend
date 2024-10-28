export const login = async (email, password) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Login failed');
    }

    const user = await res.json();

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return {
      data: user,
      error: null
    };

  } catch (e) {
    return {
      data: null,
      error: e.message
    };
  }
};