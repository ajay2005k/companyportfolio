'use client';

export const dynamic = 'force-static';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Designing products that
          <br />
          <span className="text-neutral-300">move business forward</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto">
          We partner with ambitious companies to create digital experiences that drive growth, 
          engagement, and meaningful results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('work')}
            className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
          >
            View Our Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:border-white/40 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
          >
            Start a Project
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black rounded"
          aria-label="Scroll to About section"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
