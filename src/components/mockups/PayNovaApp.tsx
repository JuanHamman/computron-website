export default function PayNovaApp() {
  return (
    <div className="flex gap-6 justify-center items-start flex-wrap">
      {/* Phone 1 - Home */}
      <div className="w-64 rounded-[2rem] bg-navy-900 border-2 border-white/10 overflow-hidden shadow-2xl">
        <div className="h-6 flex justify-center pt-2">
          <div className="w-20 h-5 rounded-full bg-black" />
        </div>
        <div className="px-4 pb-6 space-y-4">
          <div className="flex justify-between items-center pt-2">
            <div>
              <div className="text-slate-400 text-xs">Welcome back</div>
              <div className="text-white text-sm font-semibold">Jordan Smith</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs font-bold">JS</div>
          </div>

          {/* Balance card */}
          <div className="rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/20 p-4">
            <div className="text-amber-300/80 text-xs mb-1">Total Balance</div>
            <div className="text-white text-3xl font-bold mb-3">$12,847.50</div>
            <div className="flex gap-3">
              <div className="flex-1 bg-amber-400/10 rounded-lg py-2 text-center">
                <div className="text-amber-300 text-xs font-medium">↑ Send</div>
              </div>
              <div className="flex-1 bg-amber-400/10 rounded-lg py-2 text-center">
                <div className="text-amber-300 text-xs font-medium">↓ Request</div>
              </div>
              <div className="flex-1 bg-amber-400/10 rounded-lg py-2 text-center">
                <div className="text-amber-300 text-xs font-medium">⊕ Top Up</div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div>
            <div className="text-white text-xs font-semibold mb-2">Your Cards</div>
            <div className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-3 border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div className="text-white text-[10px] font-medium">FinApp</div>
                <div className="text-amber-400 text-xs font-bold">VISA</div>
              </div>
              <div className="text-white text-sm tracking-widest mb-3">•••• •••• •••• 4829</div>
              <div className="flex justify-between">
                <div className="text-slate-400 text-[10px]">Jordan Smith</div>
                <div className="text-slate-400 text-[10px]">09/27</div>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-white text-xs font-semibold">Recent</div>
              <div className="text-amber-400 text-[10px]">See All</div>
            </div>
            {[
              { name: 'Netflix', amount: '-$15.99', type: 'Entertainment', icon: '🎬' },
              { name: 'Sarah M.', amount: '+$250.00', type: 'Received', icon: '👤' },
              { name: 'Uber Eats', amount: '-$32.50', type: 'Food', icon: '🍔' },
            ].map((t) => (
              <div key={t.name} className="flex items-center justify-between py-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">{t.icon}</div>
                  <div>
                    <div className="text-white text-xs">{t.name}</div>
                    <div className="text-slate-500 text-[10px]">{t.type}</div>
                  </div>
                </div>
                <span className={`text-xs font-medium ${t.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>{t.amount}</span>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around pt-2 border-t border-white/5">
            {['Home', 'Cards', 'Send', 'Savings'].map((t, i) => (
              <div key={t} className={`text-center ${i === 0 ? 'text-amber-400' : 'text-slate-500'}`}>
                <div className="text-[10px]">{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <div className="w-28 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Phone 2 - Send Money */}
      <div className="w-64 rounded-[2rem] bg-navy-900 border-2 border-white/10 overflow-hidden shadow-2xl hidden md:block">
        <div className="h-6 flex justify-center pt-2">
          <div className="w-20 h-5 rounded-full bg-black" />
        </div>
        <div className="px-4 pb-6 space-y-4">
          <div className="flex items-center gap-2 pt-2">
            <div className="text-slate-400 text-xs">←</div>
            <div className="text-white text-sm font-semibold">Send Money</div>
          </div>

          {/* Amount */}
          <div className="text-center py-6">
            <div className="text-slate-500 text-xs mb-2">Enter Amount</div>
            <div className="text-white text-4xl font-bold">$150<span className="text-slate-500">.00</span></div>
          </div>

          {/* Recipient */}
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
            <div className="text-slate-500 text-[10px] mb-2">SENDING TO</div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold">SM</div>
              <div>
                <div className="text-white text-sm">Sarah Mitchell</div>
                <div className="text-slate-500 text-xs">@sarahm • FinApp</div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
            <div className="text-slate-500 text-[10px] mb-1">NOTE</div>
            <div className="text-white text-xs">Dinner last night 🍕</div>
          </div>

          {/* Security badge */}
          <div className="flex items-center justify-center gap-2 py-2">
            <div className="w-4 h-4 text-green-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-green-400 text-[10px]">Secured with biometric authentication</span>
          </div>

          {/* Send button */}
          <div className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-center">
            <span className="text-white text-sm font-semibold">Confirm & Send</span>
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <div className="w-28 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
