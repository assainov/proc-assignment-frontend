export const getPeople = async (search) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_HOST}/api/people/?search=${search}`);
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