import Swal from 'sweetalert2';
import { FaReact } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="p-8 min-h-screen">
      <section className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <FaReact /> React Ready Starter Package
          </h1>
          <p className="text-muted-foreground">
            A Vite + Tailwind + DaisyUI starter with Auth, AOS, Toasts, React
            Query, Axios and more.
          </p>
          <p className="text-muted-foreground mt-6">Created by Mahmud Hasan</p>
        </div>
      </section>
    </div>
  );
}
