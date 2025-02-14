import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Users, 
  Radio, 
  ArrowRight,
  Instagram,
  Music,
  Youtube,
  ChevronDown
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const instagramProfiles = [
  { name: 'Stay or Sway', url: 'https://www.instagram.com/stayorsway?igsh=aTUyMmh2b2FhbGY2' },
  { name: 'Podcast', url: 'https://www.instagram.com/midnightshayopod?igsh=MWRiemJsb283dGoweA==' },
  { name: 'Network', url: 'https://www.instagram.com/midnightshayopod?igsh=MWRiemJsb283dGoweA==' },
  { name: 'CEO', url: 'https://www.instagram.com/zumnann?igsh=MWdxaWVhNnRlcDk4aA==' },
];

function SocialNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@midnightshayo?_t=ZT-8ttlwlPK9vi&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="TikTok"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

            {/* Instagram Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors"
                aria-label="Instagram profiles"
              >
                <Instagram className="w-6 h-6" />
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl py-2">
                  {instagramProfiles.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-white hover:bg-purple-600 transition-colors"
                    >
                      {profile.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Watch Now Button */}
          <a
            href="https://youtu.be/noIfKVXtbPs?si=Xweea4VePoLQoZS-"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center space-x-2"
          >
            <Youtube className="w-5 h-5" />
            <span>Watch Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function StatCard({ icon: Icon, number, label }: { icon: any; number: string; label: string }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl text-center">
      <Icon className="w-8 h-8 mx-auto mb-4 text-purple-500" />
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [podcastRef, podcastInView] = useInView({ triggerOnce: true });
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true });
  const [datingRef, datingInView] = useInView({ triggerOnce: true });
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('success');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SocialNav />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            MIDNIGHT SHAYO
          </motion.h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Where Nigerian Gen-Z Culture Comes Alive
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://open.spotify.com/show/7oGmmGOlcXNnAkszIRJmF7?si=OHn94ZIjRlWIoqGeW0q8mQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Listen to Podcast
            </a>
            <button 
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-outline"
            >
              Join the Movement
            </button>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-black to-purple-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard icon={TrendingUp} number="#1" label="Spotify Nigeria Podcast" />
            <StatCard icon={Users} number="55+" label="Countries Reached" />
            <StatCard icon={Music} number="6" label="Sold Out Events" />
          </div>
        </div>
      </motion.section>

      {/* Podcast Section */}
      <motion.section
        ref={podcastRef}
        initial="hidden"
        animate={podcastInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="section-title gradient-text">#1 Spotify Nigeria Podcast</h2>
              <p className="text-lg mb-8">
                Unfiltered conversations that shape the culture. From entertainment to lifestyle, 
                we're bringing you the boldest voices in Nigerian Gen-Z culture.
              </p>
              <a 
                href="https://open.spotify.com/show/7oGmmGOlcXNnAkszIRJmF7?si=OHn94ZIjRlWIoqGeW0q8mQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                Listen Now <Radio className="w-5 h-5" />
              </a>
            </div>
            <div className="flex-1">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/user-content/midnight-shayo-with-zumnan.jpg"
                alt="Midnight Shayo with Zumnan"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        ref={eventsRef}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 bg-gradient-to-b from-black to-purple-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-16">Signature Abuja Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={`https://images.unsplash.com/photo-156${index}266028243-3716f02d2d2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Event ${index}`}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-lg font-bold">Experience the Vibe</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dating Series Section */}
      <motion.section
        ref={datingRef}
        initial="hidden"
        animate={datingInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Stay or Sway</h2>
            <p className="text-xl text-gray-400">Nigeria's First Gen-Z Dating Series</p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Stay or Sway"
              className="w-full h-[600px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-12">
              <div>
                <h3 className="text-3xl font-bold mb-4">Watch the Latest Episode</h3>
                <a 
                  href="https://youtu.be/noIfKVXtbPs?si=Xweea4VePoLQoZS-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center gap-2"
                >
                  Watch Now <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Join the Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be the first to know about new episodes, events, and exclusive content.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-white text-black flex-1"
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {subscribeStatus === 'success' && (
            <p className="text-green-400 mt-4">Thanks for subscribing!</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;