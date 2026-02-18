export default function VitalTrackApp() {
  return (
    <div className="flex gap-6 justify-center items-start flex-wrap">
      {/* Phone 1 - Home Screen */}
      <div className="w-64 rounded-[2rem] bg-navy-900 border-2 border-white/10 overflow-hidden shadow-2xl">
        {/* Notch */}
        <div className="h-6 flex justify-center pt-2">
          <div className="w-20 h-5 rounded-full bg-black" />
        </div>
        <div className="px-4 pb-6 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center pt-2">
            <div>
              <div className="text-slate-400 text-xs">Good morning</div>
              <div className="text-white text-sm font-semibold">Alex Johnson</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
          </div>

          {/* Daily summary card */}
          <div className="rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 p-3">
            <div className="text-white text-xs font-semibold mb-2">Today&apos;s Progress</div>
            <div className="flex justify-between">
              {[
                { label: 'Calories', value: '1,847', max: '2,200' },
                { label: 'Steps', value: '8,432', max: '10,000' },
                { label: 'Water', value: '6', max: '8 cups' },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-emerald-400/30 flex items-center justify-center mx-auto mb-1 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-400 border-t-transparent border-r-transparent" style={{ transform: 'rotate(45deg)' }} />
                    <span className="text-white text-xs font-bold">{m.value.split(',').pop()}</span>
                  </div>
                  <div className="text-slate-400 text-[10px]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Log Workout', icon: '💪', bg: 'from-blue-500/20 to-blue-600/10' },
              { label: 'Log Meal', icon: '🥗', bg: 'from-orange-500/20 to-orange-600/10' },
              { label: 'Track Weight', icon: '⚖️', bg: 'from-purple-500/20 to-purple-600/10' },
              { label: 'Set Reminder', icon: '⏰', bg: 'from-pink-500/20 to-pink-600/10' },
            ].map((a) => (
              <div key={a.label} className={`rounded-lg bg-gradient-to-br ${a.bg} border border-white/5 p-3 text-center`}>
                <div className="text-lg mb-1">{a.icon}</div>
                <div className="text-white text-xs">{a.label}</div>
              </div>
            ))}
          </div>

          {/* Recent workout */}
          <div>
            <div className="text-white text-xs font-semibold mb-2">Recent Workouts</div>
            {[
              { name: 'Upper Body', duration: '45 min', cal: '320 cal' },
              { name: 'Morning Run', duration: '30 min', cal: '280 cal' },
            ].map((w) => (
              <div key={w.name} className="flex items-center justify-between py-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xs">✓</div>
                  <div>
                    <div className="text-white text-xs">{w.name}</div>
                    <div className="text-slate-500 text-[10px]">{w.duration}</div>
                  </div>
                </div>
                <span className="text-emerald-400 text-xs">{w.cal}</span>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around pt-2 border-t border-white/5">
            {['Home', 'Workout', 'Nutrition', 'Profile'].map((t, i) => (
              <div key={t} className={`text-center ${i === 0 ? 'text-emerald-400' : 'text-slate-500'}`}>
                <div className="text-[10px]">{t}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-28 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Phone 2 - Workout Detail */}
      <div className="w-64 rounded-[2rem] bg-navy-900 border-2 border-white/10 overflow-hidden shadow-2xl hidden md:block">
        <div className="h-6 flex justify-center pt-2">
          <div className="w-20 h-5 rounded-full bg-black" />
        </div>
        <div className="px-4 pb-6 space-y-4">
          <div className="flex items-center gap-2 pt-2">
            <div className="text-slate-400 text-xs">←</div>
            <div className="text-white text-sm font-semibold">Workout</div>
          </div>

          {/* Timer */}
          <div className="text-center py-4">
            <div className="text-4xl font-bold text-white mb-1">24:35</div>
            <div className="text-slate-400 text-xs">Active Time</div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Heart Rate', value: '142', unit: 'bpm' },
              { label: 'Calories', value: '186', unit: 'cal' },
              { label: 'Sets Done', value: '8', unit: '/12' },
            ].map((m) => (
              <div key={m.label} className="text-center p-2 rounded-lg bg-white/[0.03]">
                <div className="text-white text-sm font-bold">{m.value}<span className="text-slate-400 text-xs">{m.unit}</span></div>
                <div className="text-slate-500 text-[10px]">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Current exercise */}
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3">
            <div className="text-emerald-400 text-[10px] mb-1">CURRENT EXERCISE</div>
            <div className="text-white text-sm font-semibold">Bench Press</div>
            <div className="text-slate-400 text-xs">Set 3 of 4 — 12 reps × 60kg</div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Exercise list */}
          {['Bench Press', 'Incline DB Press', 'Cable Flyes', 'Tricep Dips'].map((e, i) => (
            <div key={e} className="flex items-center gap-3 py-1">
              <div className={`w-5 h-5 rounded-full border ${i < 2 ? 'bg-emerald-400 border-emerald-400' : 'border-white/20'} flex items-center justify-center`}>
                {i < 2 && <span className="text-white text-[8px]">✓</span>}
              </div>
              <span className={`text-xs ${i === 2 ? 'text-white font-medium' : i < 2 ? 'text-slate-500 line-through' : 'text-slate-400'}`}>{e}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-2">
          <div className="w-28 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
