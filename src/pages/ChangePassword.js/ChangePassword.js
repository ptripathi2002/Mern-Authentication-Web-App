import React from "react";
import PageMenu from "../../components/pageMenu/PageMenu";
import "./ChangePassword.scss";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
const ChangePassword = () => {
  const handleInputChange = () => {};
  return (
    <>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Change Password</h2>
          <div className="--flex-start change-password">
            <Card cardClass={"card"}>
              <>
                <form>
                  <p>
                    <label>Current Password:</label>
                    <PasswordInput
                      placeholder="Password"
                      name="password"
                      //   value={password}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>New Password:</label>
                    <PasswordInput
                      placeholder="Password"
                      name="password"
                      //   value={password}
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    <label>Confirm New Password:</label>
                    <PasswordInput
                      placeholder="Password"
                      name="password"
                      //   value={password}
                      onChange={handleInputChange}
                    />
                  </p>
                  <button
                    type="submit"
                    className="--btn --btn-danger --btn-block"
                  >
                    Change Password
                  </button>
                </form>
              </>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
