const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:3001";

// Async email check
export async function checkEmailAvailability(email) {
  const res = await fetch(`${API_URL}/users?email=${email}`);
  const data = await res.json();

  if (data.length > 0) {
    throw new Error("Email already exists");
  }

  return true;
}

// Final form submission
export async function submitForm(data) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit form");
  }

  return await res.json();
}
