const STORAGE_KEY = "registeredEmails";

function getStoredEmails() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveEmail(email) {
  const emails = getStoredEmails();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...emails, email.toLowerCase()])
  );
}

export function checkEmailAvailability(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const storedEmails = getStoredEmails();

      if (storedEmails.includes(email.toLowerCase())) {
        reject({ message: "Email already exists" });
      } else {
        resolve({ available: true });
      }
    }, 1000);
  });
}

export function submitForm(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      saveEmail(data.email);
      resolve({
        success: true,
        message: "Form submitted successfully",
      });
    }, 1200);
  });
}
