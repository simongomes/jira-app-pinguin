const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer SUxpa2VQZW5ndXMuUkBnbWFpbC5jb206YmUzWVBzUEpXemgzUEh3czJFcUFFQzk5",
  },
};

export const fetchIssue = async () => {
  const response = await fetch(
    "http://localhost:3000/api/rest/api/3/issue/IN-3",
    headers
  );

  return response.json();
};
