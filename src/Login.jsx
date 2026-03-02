import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, Phone, MapPin, Eye, EyeOff } from "lucide-react";
import "./App.css";

function Login() {
  const [page, setPage] = useState("login"); // login, signup, forgot, changepass
  const navigate = useNavigate();

  // LOGIN STATE
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // SIGNUP STATE
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupCity, setSignupCity] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  // FORGOT PASSWORD STATE
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);

  // CHANGE PASSWORD STATE
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);

  // HANDLE LOGIN
  const handleLogin = () => {
    if (loginUsername === "admin" && loginPassword === "1234") {
      alert("✓ Login Successful!");
      localStorage.setItem("user", JSON.stringify({ username: loginUsername, role: "admin" }));
      navigate("/admin");
    } else if (loginUsername && loginPassword) {
      alert("✓ Citizen Login Successful!");
      localStorage.setItem("user", JSON.stringify({ username: loginUsername, role: "citizen" }));
      navigate("/citizen");
    } else {
      alert("❌ Please enter username and password");
    }
  };

  // HANDLE SIGNUP
  const handleSignup = () => {
    if (signupName && signupEmail && signupUsername && signupPassword && signupPhone && signupCity) {
      alert("✓ Sign Up Successful! You can now login.");
      setSignupSuccess(true);
      setTimeout(() => {
        setPage("login");
        setSignupSuccess(false);
        resetSignupForm();
      }, 2000);
    } else {
      alert("❌ Please fill in all fields");
    }
  };

  // HANDLE FORGOT PASSWORD
  const handleForgotPassword = () => {
    if (forgotEmail) {
      alert("✓ Password reset link sent to " + forgotEmail);
      setForgotSuccess(true);
      setTimeout(() => {
        setPage("login");
        setForgotSuccess(false);
        setForgotEmail("");
      }, 2000);
    } else {
      alert("❌ Please enter your email");
    }
  };

  // HANDLE CHANGE PASSWORD
  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("❌ Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("❌ New passwords do not match");
      return;
    }

    if (newPassword.length < 4) {
      alert("❌ Password must be at least 4 characters");
      return;
    }

    // Simulate password change
    alert("✓ Password Changed Successfully!");
    setChangePasswordSuccess(true);
    setTimeout(() => {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setChangePasswordSuccess(false);
      setPage("login");
    }, 2000);
  };

  const resetSignupForm = () => {
    setSignupName("");
    setSignupEmail("");
    setSignupUsername("");
    setSignupPassword("");
    setSignupPhone("");
    setSignupCity("");
  };

  return (
    <div className="auth-container">
      {/* LEFT SIDE - BRANDING */}
      <div className="auth-left">
        <div className="auth-branding">
          <h1>Smart City</h1>
          <p>One Platform for All City Services</p>
          <div className="branding-features">
            <div className="feature">✓ Easy Access to City Services</div>
            <div className="feature">✓ Report Issues & Get Updates</div>
            <div className="feature">✓ Real-time Notifications</div>
            <div className="feature">✓ Connect with City Officials</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - AUTH FORMS */}
      <div className="auth-right">
        {/* LOGIN PAGE */}
        {page === "login" && (
          <div className="form-container">
            <h2>Welcome Back!</h2>
            <p className="form-subtitle">Login to your account</p>

            <div className="form-group">
              <label>Username</label>
              <div className="input-wrapper">
                <User size={18} />
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button
                  className="toggle-password"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button className="auth-btn login-btn" onClick={handleLogin}>
              Sign In
            </button>

            <div className="auth-links">
              <button
                className="link-btn"
                onClick={() => setPage("changepass")}
              >
                Change Password
              </button>
              <span> | </span>
              <button
                className="link-btn"
                onClick={() => setPage("forgot")}
              >
                Forgot Password?
              </button>
            </div>

            <div className="divider">Or</div>

            <p className="signup-text">
              Don't have an account?{" "}
              <button
                className="link-btn"
                onClick={() => setPage("signup")}
              >
                Sign Up
              </button>
            </p>

            <Link to="/" className="back-home-link">
              ← Back to Home
            </Link>
          </div>
        )}

        {/* SIGNUP PAGE */}
        {page === "signup" && (
          <div className="form-container">
            <h2>Create Account</h2>
            <p className="form-subtitle">Join our smart city community</p>

            {signupSuccess && (
              <div className="success-banner">✓ Account Created Successfully!</div>
            )}

            <div className="form-row">
              <div className="form-group half">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <User size={18} />
                  <input
                    type="text"
                    placeholder="Full name"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group half">
                <label>Email</label>
                <div className="input-wrapper">
                  <Mail size={18} />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Username</label>
                <div className="input-wrapper">
                  <User size={18} />
                  <input
                    type="text"
                    placeholder="Choose username"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group half">
                <label>Password</label>
                <div className="input-wrapper">
                  <Lock size={18} />
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    placeholder="Create password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                  <button
                    className="toggle-password"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  >
                    {showSignupPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Phone</label>
                <div className="input-wrapper">
                  <Phone size={18} />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group half">
                <label>City</label>
                <div className="input-wrapper">
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder="Your city"
                    value={signupCity}
                    onChange={(e) => setSignupCity(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button className="auth-btn signup-btn" onClick={handleSignup}>
              Create Account
            </button>

            <p className="login-text">
              Already have an account?{" "}
              <button
                className="link-btn"
                onClick={() => setPage("login")}
              >
                Login
              </button>
            </p>
          </div>
        )}

        {/* FORGOT PASSWORD PAGE */}
        {page === "forgot" && (
          <div className="form-container">
            <h2>Reset Password</h2>
            <p className="form-subtitle">Enter your email to receive reset link</p>

            {forgotSuccess && (
              <div className="success-banner">✓ Reset link sent to your email!</div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
              </div>
            </div>

            <p className="info-text">
              We'll send you a link to reset your password via email.
            </p>

            <button className="auth-btn forgot-btn" onClick={handleForgotPassword}>
              Send Reset Link
            </button>

            <p className="back-text">
              Remember your password?{" "}
              <button
                className="link-btn"
                onClick={() => setPage("login")}
              >
                Back to Login
              </button>
            </p>
          </div>
        )}

        {/* CHANGE PASSWORD PAGE */}
        {page === "changepass" && (
          <div className="form-container">
            <h2>Change Password</h2>
            <p className="form-subtitle">Update your account password</p>

            {changePasswordSuccess && (
              <div className="success-banner">✓ Password Changed Successfully!</div>
            )}

            <div className="form-group">
              <label>Current Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <button
                  className="toggle-password"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>New Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  className="toggle-password"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <p className="info-text">
              Password must be at least 4 characters long.
            </p>

            <button className="auth-btn changepass-btn" onClick={handleChangePassword}>
              Update Password
            </button>

            <p className="back-text">
              <button
                className="link-btn"
                onClick={() => setPage("login")}
              >
                Back to Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;