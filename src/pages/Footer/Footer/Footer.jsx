export default function Footer(){
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <div>
        <p>© {new Date().getFullYear()} React Starter. All rights reserved.</p>
      </div>
    </footer>
  );
}
