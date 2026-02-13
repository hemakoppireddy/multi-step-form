import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="app-container">
      <div className="card home-card">
        <h1 className="home-title">User Registration</h1>

        <p className="home-subtitle">
          Complete a quick multi-step form to get started.
          Your information is secure and easy to manage.
        </p>

        <Link to="/form" className="btn primary home-btn">
          Start Registration
        </Link>
      </div>
    </main>
  );
}
