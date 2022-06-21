import useAuth from "hooks/useAuth";

const DashboardView = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Dashboard page</h2>
      <p>Email address: {user.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default DashboardView;
