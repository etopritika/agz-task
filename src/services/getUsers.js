async function getUsers() {
  try {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
    return null;
  }
}

export default getUsers;
