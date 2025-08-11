'use client';

export const dynamic = 'force-static';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-white hover:text-neutral-300 transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black rounded"
            >
              Blackline Studios
            </button>
            <p className="text-neutral-300 mb-6 max-w-md">
              Designing products that move business forward. We create digital experiences 
              that drive growth and meaningful results.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@blackline.example"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+919000000000"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Phone"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-300">
              <li><span className="hover:text-white transition-colors cursor-pointer">Product Strategy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Brand & Visual</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">UX/UI Design</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Frontend Development</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Performance & SEO</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Ongoing Support</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      const offset = 80;
                      const top = element.offsetTop - offset;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('work');
                    if (element) {
                      const offset = 80;
                      const top = element.offsetTop - offset;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const top = element.offsetTop - offset;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} Blackline Studios. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center text-neutral-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black rounded"
          >
            Back to top
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
