
import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    // Frontend demo only. Real authentication comes in Step 4.
    setMessage(
      "The login interface is ready. Authentication is not connected yet."
    );
  }

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Sentinel home">
          <span className="brand-icon">S</span>
          <span>SENTINEL<span className="brand-dot">.</span></span>
        </a>

        <div className="system-status">
          <span className="status-dot" />
          DEFENDER PORTAL
        </div>
      </header>

      <section className="login-layout">
        <div className="intro">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            SECURITY OPERATIONS
          </div>

          <h1>
            Your security.
            <br />
            <span>Our priority.</span>
          </h1>

          <p className="intro-text">
            Monitor suspicious login activity, investigate security
            events, and protect your applications from brute-force attacks.
          </p>

          <div className="feature-list">
            <div className="feature">
              <span className="feature-icon">⌁</span>
              <div>
                <strong>Threat monitoring</strong>
                <p>Review suspicious authentication activity.</p>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">⌖</span>
              <div>
                <strong>IP intelligence</strong>
                <p>Investigate approximate source locations.</p>
              </div>
            </div>

            <div className="feature">
              <span className="feature-icon">◇</span>
              <div>
                <strong>Brute-force defense</strong>
                <p>Detect repeated failed login attempts.</p>
              </div>
            </div>
          </div>

          <div className="intro-footer">
            <span className="status-dot" />
            SECURITY MONITORING PLATFORM
          </div>
        </div>

        <div className="login-card">
          <div className="card-symbol">S</div>

          <p className="card-label">WELCOME BACK</p>
          <h2>Sign in to Sentinel</h2>
          <p className="card-description">
            Enter your credentials to continue.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <div className="password-heading">
              <label htmlFor="password">Password</label>
            </div>

            <div className="password-field">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <button
                className="show-password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button className="sign-in-button" type="submit">
              Sign in <span aria-hidden="true">→</span>
            </button>

            {message && (
              <p className="form-message" role="status">
                {message}
              </p>
            )}
          </form>

          <div className="card-divider">
            <span />
            <span>SECURE ACCESS</span>
            <span />
          </div>

          <p className="security-note">
            <span>◆</span> Your security dashboard will be available
            after authentication is configured.
          </p>
        </div>
      </section>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} SENTINEL SECURITY</span>
        <span>BRUTE FORCE DEFENDER · DEVELOPMENT PREVIEW</span>
      </footer>
    </main>
  );
}

export default App;
