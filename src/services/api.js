export function checkEmailAvailability(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate already-taken emails
      const takenEmails = [
        "test@example.com",
        "admin@example.com",
        "user@example.com",
      ];

      if (takenEmails.includes(email.toLowerCase())) {
        reject({ message: "Email already exists" });
      } else {
        resolve({ available: true });
      }
    }, 1200); // simulate network delay
  });
}
