
export default function HomeLayout({ children }) {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <header>
        <h1>Welcome to the Home Page</h1>
        <hr />
      </header>
      <main>{children}</main>
    </div>
  );
}
