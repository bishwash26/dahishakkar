

export default function Home() {
return (<> 
    <div id="root">
      <nav
        id="navbar"
        className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-serif">N&amp;N</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#hero"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#lovedOnesMessages"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Messages
                </a>
                <a
                  href="#ourStory"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Story
                </a>
                <a
                  href="#memoriesGallery"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Gallery
                </a>
                <a
                  href="#reelsSection"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reels
                </a>
                <a
                  href="#schedule"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Schedule
                </a>
                <a
                  href="#rsvp"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  RSVP
                </a>
                <a
                  href="#guestbook"
                  className="hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Guestbook
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                id="mobile-menu-button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className="hidden md:hidden bg-neutral-900/90 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#hero"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#lovedOnesMessages"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Messages
            </a>
            <a
              href="#ourStory"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Our Story
            </a>
            <a
              href="#memoriesGallery"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="#reelsSection"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Reels
            </a>
            <a
              href="#schedule"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Schedule
            </a>
            <a
              href="#rsvp"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              RSVP
            </a>
            <a
              href="#guestbook"
              className="block hover:text-pink-300 px-3 py-2 rounded-md text-base font-medium"
            >
              Guestbook
            </a>
          </div>
        </div>
      </nav>
    </div>
   
   
    <div id="root">
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-neutral-900"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/463962658/rendition/1080p/file.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <img
            src="https://withjoy.com/assets/public/marcom-prod/home/hero/wave.svg"
            alt="wave"
            className="w-full hidden md:block"
          />
          <img
            src="https://withjoy.com/assets/public/marcom-prod/home/hero/wave-mobile.svg"
            alt="wave"
            className="w-full block md:hidden"
          />
        </div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate__animated animate__fadeIn">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">
              Nikhil &amp; Nikita
            </h1>
            <div className="w-24 h-1 bg-pink-300 mx-auto mb-6" />
            <p className="text-xl md:text-2xl mb-4 font-light">
              Are getting married
            </p>
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-light">December 15, 2024</p>
              <p className="text-lg md:text-xl font-light">
                Mumbai, Maharashtra
              </p>
            </div>
            <a
              href="#rsvp"
              className="inline-block mt-8 px-8 py-3 bg-pink-300 text-neutral-900 rounded-full hover:bg-pink-400 transition-colors duration-300 animate__animated animate__pulse animate__infinite"
            >
              RSVP Now
            </a>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate__animated animate__bounce animate__infinite">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <section id="lovedOnesMessages" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 animate__animated animate__fadeIn">
            Messages from Our Loved Ones
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bride's Side */}
            <div className="bg-white rounded-lg shadow-xl p-8 animate__animated animate__fadeInLeft">
              <h3 className="text-2xl font-serif text-center mb-8 text-pink-400">
                From Bride's Side
              </h3>
              <div className="space-y-8">
                <div className="message-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-500 text-xl font-serif">
                          S
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Sneha</h4>
                      <p className="text-gray-600 mt-2">
                        My dearest Nikita, watching you grow into this beautiful
                        woman has been a blessing. May your love story continue
                        to inspire us all.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="message-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-500 text-xl font-serif">
                          P
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Priya</h4>
                      <p className="text-gray-600 mt-2">
                        To my sister and best friend, your happiness means the
                        world to me. Nikhil is so lucky to have you in his life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Groom's Side */}
            <div className="bg-white rounded-lg shadow-xl p-8 animate__animated animate__fadeInRight">
              <h3 className="text-2xl font-serif text-center mb-8 text-blue-400">
                From Groom's Side
              </h3>
              <div className="space-y-8">
                <div className="message-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-500 text-xl font-serif">
                          R
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Rahul</h4>
                      <p className="text-gray-600 mt-2">
                        Brother, you've found your perfect match. Nikita is the
                        sister I never had. Wishing you both a lifetime of
                        happiness.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="message-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-500 text-xl font-serif">
                          A
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Amit</h4>
                      <p className="text-gray-600 mt-2">
                        From college days to this beautiful moment, you've come
                        a long way, Nikhil. So happy to see you both together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <section id="ourStory" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 animate__animated animate__fadeIn">
            Our Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center">
                    <span className="text-neutral-800 font-serif text-xl">
                      A
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Anjali Sharma</h4>
                    <p className="text-sm text-gray-400">College Friend</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  I remember when they first met at the college cafeteria.
                  Nikhil couldn't take his eyes off Nikita, and now here we are!
                </p>
              </div>
            </div>
            {/* Story Card 2 */}
            <div
              className="bg-neutral-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center">
                    <span className="text-neutral-800 font-serif text-xl">
                      R
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Raj Malhotra</h4>
                    <p className="text-sm text-gray-400">Childhood Friend</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Their first date was a disaster - the restaurant lost their
                  reservation, it rained, but they couldn't stop laughing about
                  it!
                </p>
              </div>
            </div>
            {/* Story Card 3 */}
            <div
              className="bg-neutral-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center">
                    <span className="text-neutral-800 font-serif text-xl">
                      P
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Priya Patel</h4>
                    <p className="text-sm text-gray-400">Work Colleague</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  The way Nikita's face lights up when she talks about Nikhil at
                  work - that's when I knew they were meant to be!
                </p>
              </div>
            </div>
            {/* Story Card 4 */}
            <div
              className="bg-neutral-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center">
                    <span className="text-neutral-800 font-serif text-xl">
                      V
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Vikram Singh</h4>
                    <p className="text-sm text-gray-400">Family Friend</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Watching them dance together at my wedding, I knew they would
                  be next. Their chemistry was undeniable!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <section id="memoriesGallery" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 animate__animated animate__fadeIn">
            Our Memories Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery items using available image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg animate__animated animate__fadeInUp">
              <img
                src="https://withjoy.com/assets/public/marcom-prod/home/hero/bodymovin/slurpee/bg_stripping.jpg"
                alt="Memory 1"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-serif">First Date</p>
              </div>
            </div>
            {/* Video Memory */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg animate__animated animate__fadeInUp">
              <video className="w-full h-64 object-cover">
                <source
                  src="https://player.vimeo.com/progressive_redirect/playback/463962658/rendition/1080p/file.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-serif">Beach Day</p>
              </div>
            </div>
            {/* Placeholder with gradient */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-pink-200 to-pink-400 animate__animated animate__fadeInUp">
              <div className="w-full h-64 flex items-center justify-center">
                <p className="text-white text-lg font-serif">
                  More memories coming soon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <section id="reelsSection" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 text-white animate__animated animate__fadeIn">
            Celebration Reels
          </h2>
          <div className="relative">
            {/* Previous Button */}
            <button
              id="prevBtn"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Reels Container */}
            <div
              id="reelsContainer"
              className="flex gap-4 overflow-x-hidden scroll-smooth"
            >
              {/* Reel 1 */}
              <div className="flex-shrink-0 w-80 rounded-lg overflow-hidden">
                <div className="relative aspect-[9/16] bg-neutral-800">
                  <video
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://player.vimeo.com/progressive_redirect/playback/463962658/rendition/1080p/file.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white">From: Rahul &amp; Priya</p>
                  </div>
                  <button className="absolute top-4 right-4 bg-white/20 rounded-full p-2 hover:bg-white/30 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Reel 2 */}
              <div className="flex-shrink-0 w-80 rounded-lg overflow-hidden">
                <div className="relative aspect-[9/16] bg-neutral-800">
                  <video
                    className="w-full h-full object-cover"

                  >
                    <source
                      src="https://player.vimeo.com/progressive_redirect/playback/463962658/rendition/1080p/file.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white">From: Sneha &amp; Family</p>
                  </div>
                  <button className="absolute top-4 right-4 bg-white/20 rounded-full p-2 hover:bg-white/30 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Next Button */}
              <button
                id="nextBtn"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <section id="schedule" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 animate__animated animate__fadeIn">
            Wedding Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mehendi Ceremony */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-pink-400">
                      Mehendi
                    </h3>
                    <p className="text-neutral-600">December 13, 2024</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-neutral-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    4:00 PM - 8:00 PM
                  </p>
                  <p className="flex items-center text-neutral-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Bride's Residence
                  </p>
                </div>
              </div>
            </div>
            {/* Sangeet Night */}
            <div
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-pink-400">
                      Sangeet
                    </h3>
                    <p className="text-neutral-600">December 14, 2024</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-neutral-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    7:00 PM - 11:00 PM
                  </p>
                  <p className="flex items-center text-neutral-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Golden Palace, Mumbai
                  </p>
                </div>
              </div>
            </div>
            {/* Wedding Ceremony */}
            <div
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-pink-400">
                      Wedding
                    </h3>
                    <p className="text-neutral-600">December 15, 2024</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-neutral-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    11:00 AM - 4:00 PM
                  </p>
                  <p className="flex items-center text-neutral-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Royal Gardens, Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <section id="rsvp" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-8 animate__animated animate__fadeIn">
            RSVP
          </h2>
          <p className="text-center text-neutral-300 mb-12">
            We're excited to celebrate with you! Please let us know if you'll be
            joining us.
          </p>
          <form
            id="rsvpForm"
            className="space-y-6 animate__animated animate__fadeInUp"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                   
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                   
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Will you be attending?*
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="attendance"
                    defaultValue="yes"
                     
                    className="form-radio text-pink-400 focus:ring-pink-400"
                  />
                  <span>Yes, I'll be there!</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="attendance"
                    defaultValue="no"
                     
                    className="form-radio text-pink-400 focus:ring-pink-400"
                  />
                  <span>Sorry, I can't make it.</span>
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium mb-2"
              >
                Number of Guests*
              </label>
              <select
                id="guests"
                 
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
              >
                <option value="">Select number of guests</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message for the Couple
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                defaultValue={""}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300"
              >
                Send RSVP
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <section id="guestbook" className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-8 animate__animated animate__fadeIn">
            Guestbook
          </h2>
          <p className="text-center text-neutral-600 mb-12">
            Leave your wishes and blessings for the happy couple!
          </p>
          {/* Add Message Form */}
          <form
            id="guestbookForm"
            className="max-w-2xl mx-auto mb-16 animate__animated animate__fadeInUp"
          >
            <div className="bg-white rounded-lg shadow-xl p-6 space-y-6">
              <div>
                <label
                  htmlFor="guestName"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="guestName"
                   
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="guestMessage"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Your Message*
                </label>
                <textarea
                  id="guestMessage"
                  rows={4}
                   
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                  defaultValue={""}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300"
                >
                  Post Message
                </button>
              </div>
            </div>
          </form>
          {/* Messages Display */}
          <div
            id="messagesContainer"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Sample Messages */}
            <div className="bg-white rounded-lg shadow-xl p-6 transform hover:-translate-y-1 transition-transform duration-300 animate__animated animate__fadeInUp">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-pink-500 text-xl font-serif">A</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Anjali Mehta</h4>
                  <p className="text-neutral-600 mt-2">
                    Wishing you both a lifetime of love, laughter, and
                    happiness. May your journey together be filled with
                    beautiful moments!
                  </p>
                  <p className="text-neutral-400 text-sm mt-2">
                    Posted on Nov 15, 2023
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg shadow-xl p-6 transform hover:-translate-y-1 transition-transform duration-300 animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500 text-xl font-serif">R</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Rahul Singh</h4>
                  <p className="text-neutral-600 mt-2">
                    You two are perfect for each other! Can't wait to celebrate
                    your special day. Congratulations!
                  </p>
                  <p className="text-neutral-400 text-sm mt-2">
                    Posted on Nov 10, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   
   
    <div id="root">
      <footer id="footer" className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Wave SVG at top */}
          <div className="w-full mb-12">
            <img
              src="https://withjoy.com/assets/public/marcom-prod/home/hero/wave.svg"
              alt="wave"
              className="w-full transform rotate-180 hidden md:block"
            />
            <img
              src="https://withjoy.com/assets/public/marcom-prod/home/hero/wave-mobile.svg"
              alt="wave"
              className="w-full transform rotate-180 block md:hidden"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-serif mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#lovedOnesMessages"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    Messages
                  </a>
                </li>
                <li>
                  <a
                    href="#ourStory"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#memoriesGallery"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl font-serif mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p>For any queries, please reach out to:</p>
                <p className="text-pink-300">wedding@nikhilandnikita.com</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href="#"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="hover:text-pink-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* RSVP */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-serif mb-4">Join Us</h3>
              <p className="mb-4">Don't forget to RSVP for our special day!</p>
              <a
                href="#rsvp"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-neutral-900 bg-pink-300 hover:bg-pink-400 transition-colors duration-300"
              >
                RSVP Now
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-neutral-400">
              © 2024 Nikhil &amp; Nikita. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500 mt-2">
              Made with ❤️ for our special day
            </p>
          </div>
        </div>
      </footer>
    </div>
</>);
};
