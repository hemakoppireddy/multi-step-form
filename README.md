#  Dynamic Multi-Step Form Application

A **responsive, accessible, and production-ready multi-step form** built using **React** with **client-side routing**, **centralized state management**, **robust validation (sync + async)**, and a **Dockerized mock API**.
This project demonstrates real-world frontend engineering practices used in user onboarding and data-capture workflows.

---

## Demo Video

[Demo Link](https://drive.google.com/file/d/1nVsaeTk4REWfYWlOF5-PyRphIsOR7WKM/view?usp=sharing)

---

##  Project Objectives

* Build a **multi-step form** with protected navigation
* Implement **robust client-side validation**
* Handle **asynchronous email availability checks**
* Manage **global form state** across steps
* Ensure **WCAG 2.1 AA accessibility**
* Provide **responsive UI** for mobile and desktop
* Include **unit tests with ≥70% coverage**
* Run the entire application via **Docker Compose**

---

##  Tech Stack

* **Frontend:** React, React Router, React Hook Form
* **State Management:** React Context API
* **Styling:** Vanilla CSS (modern, responsive, accessible)
* **Testing:** Vitest, Testing Library
* **Mock API:** json-server
* **Containerization:** Docker & Docker Compose
* **Build Tool:** Vite

---

##  Project Structure

```text
src/
├── components/        # Reusable UI components
├── forms/             # Step-based form components
├── routes/            # Page-level routes
├── services/          # API communication
├── state/             # Global form state (Context)
├── utils/             # Business logic helpers
├── styles/            # Global and component CSS
├── tests/             # Unit tests
```

---

##  Setup Instructions

### 1️ Prerequisites

* Node.js ≥ 18
* npm
* Docker & Docker Compose

---

### 2️ Clone the Repository

```bash
git clone <your-github-repo-url>
cd multi-step-form
```

---

### 3️ Install Dependencies (for local dev)

```bash
npm install
```

---

### 4️ Run with Docker (Recommended)

```bash
docker-compose up --build
```

* Frontend: [http://localhost:5173](http://localhost:5173)
* Mock API: [http://localhost:3001/users](http://localhost:3001/users)

>  The frontend communicates with the mock API via Docker network using environment variables.

---

### 5️ Run Locally (Without Docker – Optional)

```bash
npm run dev
```

Ensure you provide the API URL via environment variables if needed.

---

##  Environment Variables

This project uses environment variables for API configuration.

### `.env.example`

```env
VITE_APP_API_URL=http://mock-api:3001
```

>  `.env` files are intentionally **not committed**.
> Only `.env.example` is included for documentation.

---

##  Architectural Decisions

###  Component-Based Design

Each form step and UI element is encapsulated in its own component to ensure:

* Reusability
* Maintainability
* Clear separation of concerns

---

###  State Management

* Global form data is managed using **React Context**
* Prevents prop-drilling
* Ensures data persistence across steps
* Supports full form reset after submission

---

###  Routing Strategy

* Client-side routing via **React Router**
* Nested routes for form steps
* Direct URL access to intermediate steps is prevented

---

##  Form Validation

### Synchronous Validation

* Required fields
* Min/max length checks
* Email format validation
* Immediate feedback on blur or submit

### Asynchronous Validation

* Email availability check via mock API
* Loading indicators during validation
* Accessible live announcements (`aria-live`)

---

##  Conditional Rendering

* Employment fields (`Company Name`, `Job Title`) appear **only when “Employed = Yes”**
* Logic is tested independently for reliability and performance

---

##  Accessibility (WCAG 2.1 AA)

* Semantic HTML (`label`, `fieldset`, `legend`)
* Keyboard-only navigation supported
* Proper ARIA attributes for:

  * Errors
  * Async messages
  * Form controls
* Screen-reader friendly dynamic feedback
* Sufficient color contrast

---

##  Responsive Design

* Mobile-first layout
* Flexbox-based layout system
* Breakpoints optimized for:

  * 375px (mobile)
  * 768px (tablet)
  * 1920px (desktop)
* Touch-friendly buttons and spacing

---

##  Testing

### Run Tests

```bash
npm run test
```

### Run Coverage

```bash
npx vitest run --coverage
```

### Coverage Summary

* **Statements:** 70%
* **Functions:** 70%
* **Lines:** 74%

Tests include:

* Async email validation
* Global state updates & reset
* Conditional rendering logic

---

##  Docker Setup

### Services

* `frontend` – React application
* `mock-api` – json-server mock backend

### Single Command Startup

```bash
docker-compose up
```

---
