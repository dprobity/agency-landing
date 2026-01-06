import React, { useState } from 'react';
import { Phone, Users, TrendingUp, CheckCircle, ArrowRight, Clock, DollarSign, Zap, Calendar, Play } from 'lucide-react';

export default function ProbityTriggersLanding() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ProbityTriggers
          </div>
          <button 
            onClick={() => setShowCalendar(!showCalendar)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
          >
            <Calendar size={18} />
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section with VSL */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30 text-blue-300 text-sm">
              🚀 Done-For-You AI Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Add <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">$81k/Month</span> to Your Real Estate Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              AI voice agents making 15,000+ calls per day. We build, you profit. Zero tech headaches.
            </p>
          </div>

          {/* VSL Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* YouTube/Loom Embed Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-blue-700 transition-all transform hover:scale-110">
                    <Play size={32} fill="white" />
                  </div>
                  <p className="text-gray-400 text-sm">📹 Replace this with your Loom or YouTube embed</p>
                  <div className="mt-4 bg-gray-800/50 rounded-lg p-4 max-w-md mx-auto">
                    <p className="text-xs text-gray-500 font-mono">
                      {`<iframe src="YOUR_LOOM_OR_YOUTUBE_URL"`}<br/>
                      {`width="100%" height="100%">`}<br/>
                      {`</iframe>`}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Optional: Uncomment below to use actual YouTube embed */}
              {/* 
              <iframe 
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="ProbityTriggers Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
              
              {/* Optional: Uncomment below to use Loom embed */}
              {/*
              <iframe 
                className="w-full aspect-video"
                src="https://www.loom.com/embed/YOUR_LOOM_ID"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>

          {/* CTA Buttons Below Video */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowCalendar(!showCalendar)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Calendar size={20} />
              Book Your Strategy Call
            </button>
            <button className="border-2 border-blue-500 hover:bg-blue-500/10 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              See Case Studies
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>30-Day Results Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>Done-For-You Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      {showCalendar && (
        <section className="py-20 px-6 bg-gray-900/50 border-y border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Book Your Free Strategy Call
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Let's discuss how we can add $81k/month to your agency
            </p>
            
            {/* Calendar Embed Placeholder */}
            <div className="bg-black rounded-2xl border border-gray-800 p-8 min-h-[600px] flex items-center justify-center">
              <div className="text-center max-w-lg">
                <Calendar size={64} className="mx-auto mb-6 text-blue-500" />
                <h3 className="text-xl font-bold mb-4">Calendar Embed Goes Here</h3>
                <div className="bg-gray-900 rounded-lg p-6 text-left">
                  <p className="text-sm text-gray-400 mb-4">Replace this section with your calendar provider embed:</p>
                  <div className="space-y-3 text-xs text-gray-500 font-mono bg-black p-4 rounded">
                    <p>📅 <strong className="text-blue-400">Calendly:</strong></p>
                    <p className="pl-4">{`<div class="calendly-inline-widget"`}<br/>
                    {`data-url="YOUR_CALENDLY_URL"></div>`}</p>
                    
                    <p className="mt-4">📅 <strong className="text-blue-400">Cal.com:</strong></p>
                    <p className="pl-4">{`<iframe src="YOUR_CAL_URL"`}<br/>
                    {`width="100%" height="600px"></iframe>`}</p>
                    
                    <p className="mt-4">📅 <strong className="text-blue-400">TidyCal / Other:</strong></p>
                    <p className="pl-4">Paste your embed code here</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowCalendar(false)}
                  className="mt-6 text-gray-500 hover:text-white transition-colors"
                >
                  Close Calendar
                </button>
              </div>
            </div>
            
            {/* Optional: Uncomment to use Calendly */}
            {/*
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/YOUR_USERNAME" 
              style={{minWidth: '320px', height: '700px'}}
            ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            */}
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-5xl font-bold text-blue-400 mb-2">15,000+</div>
            <div className="text-gray-400">Calls Per Day</div>
          </div>
          <div className="p-6">
            <div className="text-5xl font-bold text-cyan-400 mb-2">$81k</div>
            <div className="text-gray-400">Average Monthly Revenue Increase</div>
          </div>
          <div className="p-6">
            <div className="text-5xl font-bold text-blue-400 mb-2">2x</div>
            <div className="text-gray-400">More Qualified Meetings</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">1. Discovery Call</h3>
              <p className="text-gray-400">We analyze your current process and identify AI opportunities that will drive immediate revenue.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">2. We Build Everything</h3>
              <p className="text-gray-400">Our team implements your custom AI infrastructure. Voice agents, workflows, integrations—all done-for-you.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">3. You Scale</h3>
              <p className="text-gray-400">Watch qualified leads and meetings pour in while we handle optimization and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What You <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Phone, title: 'AI Voice Agents', desc: 'Human-like voice agents that qualify leads, book appointments, and follow up—24/7.' },
              { icon: Users, title: 'Lead Qualification System', desc: 'Automatically score and route leads to your best closers at the perfect time.' },
              { icon: Clock, title: 'Automated Follow-Ups', desc: 'Never lose a deal to poor follow-up. Our AI nurtures every lead until they convert.' },
              { icon: DollarSign, title: 'Revenue Dashboard', desc: 'Track ROI in real-time. See exactly how much revenue our AI is generating.' },
              { icon: Zap, title: 'CRM Integration', desc: 'Seamlessly connects with your existing tools. No data migration headaches.' },
              { icon: TrendingUp, title: 'Ongoing Optimization', desc: 'We continuously improve your AI systems to maximize performance.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <feature.icon size={24} className="text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Real Results from <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Real Agencies</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-lg">Grand Estate Agency</div>
                  <div className="text-gray-500 text-sm">Miami, FL</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 italic">"ProbityTriggers added $81k in monthly revenue in just 60 days. Their AI voice agents handle everything while we focus on closing deals. Game-changer."</p>
              <div className="text-blue-400 font-semibold">+$81k Monthly Revenue</div>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
                <div>
                  <div className="font-bold text-lg">Skyline Realty Group</div>
                  <div className="text-gray-500 text-sm">Austin, TX</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 italic">"We doubled our qualified meetings without hiring more staff. The AI system pays for itself 10x over."</p>
              <div className="text-cyan-400 font-semibold">2x Qualified Meetings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Lead Your Market with AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get instant access to our 4-minute demo showing exactly how we'll double your meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-semibold"
            />
            <button 
              onClick={handleSubmit}
              className="bg-black hover:bg-gray-900 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 whitespace-nowrap"
            >
              {isSubmitted ? '✓ Sent!' : 'Get Demo Video'}
            </button>
          </div>
          <p className="text-sm text-blue-100 mt-4">No credit card required. Watch instantly.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            ProbityTriggers
          </div>
          <p className="text-gray-500 mb-6">Done-For-You AI Infrastructure for Real Estate Agencies</p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <p className="text-gray-600 text-sm mt-6">© 2026 ProbityTriggers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
