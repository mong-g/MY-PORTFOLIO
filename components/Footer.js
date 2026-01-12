export default function Footer() {
  return (
    <footer className="bg-bg-color border-t border-white/5 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
          Elijah Alrhoy Ortega &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}