import QRimage from "./assets/image-qr-code.png";

function App() {
  return (
  <main className="smooth max-w-[312px] sm:scale-100 md:scale-105 h-[calc(100vh-20px)]mx-auto" >
    <article className="bg-white p-3 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl  ">
      <img 
      src={QRimage} 
      alt="barQR" 
      className="smooth rounded-lg object-scale-down" />

      {/* Wrapper for text */}
      <div className="py-4 px-5 leading-snug flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="smooth text-xl  leading font-bold text-slate-900">
          Improve your front-end skills by building projects
        </h1>
        <p className="smooth text-[15px] text-slate-500 ">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </article>

    <footer className="mt-8 text-center text-slate-500 text-xs">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https:github.com/NicheP09" className="text-blue-600 hover:underline">
          Peter Yeboah
        </a>
        .
      </footer>
  </main>
  );
}

export default App;
