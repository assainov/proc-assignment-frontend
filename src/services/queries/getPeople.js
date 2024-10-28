export const getPeople = async (search) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/api/v1/search?search=${search}`);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await res.json();

    console.log(data.results);
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