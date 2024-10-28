import { useAuthStore } from 'state/useAuthStore';

export const getPeople = async (search) => {
  const user = useAuthStore.getState().user;

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/api/v1/search?search=${search}`, {
      method: 'GET',
      headers: config.headers
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await res.json();

    return {
      data: data.results,
      error: null
    };

  } catch (e) {
    return {
      data: null,
      error: e.message
    };
  }
};