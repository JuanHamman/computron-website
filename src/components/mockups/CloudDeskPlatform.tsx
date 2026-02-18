export default function CloudDeskPlatform() {
  const columns = [
    {
      title: 'To Do',
      color: 'slate',
      cards: [
        { title: 'Design system tokens', tag: 'Design', tagColor: 'purple', priority: 'Medium' },
        { title: 'API rate limiting', tag: 'Backend', tagColor: 'blue', priority: 'High' },
      ],
    },
    {
      title: 'In Progress',
      color: 'blue',
      cards: [
        { title: 'User dashboard redesign', tag: 'Frontend', tagColor: 'green', priority: 'High' },
        { title: 'Payment webhook handler', tag: 'Backend', tagColor: 'blue', priority: 'Critical' },
        { title: 'Mobile responsive fixes', tag: 'Frontend', tagColor: 'green', priority: 'Medium' },
      ],
    },
    {
      title: 'In Review',
      color: 'yellow',
      cards: [
        { title: 'Client portal auth flow', tag: 'Full Stack', tagColor: 'orange', priority: 'High' },
      ],
    },
    {
      title: 'Done',
      color: 'green',
      cards: [
        { title: 'Database migration v2', tag: 'Backend', tagColor: 'blue', priority: 'Critical' },
        { title: 'Onboarding email sequence', tag: 'Marketing', tagColor: 'pink', priority: 'Low' },
      ],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-t-xl bg-navy-800 border border-white/10 overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="h-8 bg-navy-900 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
          <div className="flex-1 text-center text-xs text-slate-500">Project Management Platform</div>
        </div>

        <div className="flex min-h-[420px]">
          {/* Sidebar */}
          <div className="w-44 bg-navy-900/50 border-r border-white/5 p-3 hidden sm:block">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">PM</div>
              <span className="text-white text-xs font-semibold">Projects</span>
            </div>
            {['Board', 'Timeline', 'Calendar', 'Time Log', 'Reports', 'Client Portal', 'Team'].map((item, i) => (
              <div key={item} className={`px-2 py-1.5 rounded text-[11px] mb-0.5 ${i === 0 ? 'bg-purple-500/10 text-purple-400' : 'text-slate-400'}`}>
                {item}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="text-[10px] text-slate-500 mb-2">PROJECTS</div>
              {['Website Redesign', 'Mobile App v2', 'API Integration'].map((p) => (
                <div key={p} className="px-2 py-1 text-[11px] text-slate-400">{p}</div>
              ))}
            </div>
          </div>

          {/* Kanban */}
          <div className="flex-1 p-3 overflow-x-auto">
            <div className="flex justify-between items-center mb-3">
              <div className="text-white text-xs font-semibold">Website Redesign — Sprint 4</div>
              <div className="flex gap-1">
                {['Board', 'List', 'Timeline'].map((v, i) => (
                  <div key={v} className={`px-2 py-1 rounded text-[10px] ${i === 0 ? 'bg-purple-500/10 text-purple-400' : 'text-slate-500'}`}>{v}</div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 min-w-[600px]">
              {columns.map((col) => (
                <div key={col.title} className="flex-1 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-medium text-white">{col.title}</span>
                    <span className="text-[10px] text-slate-500 bg-white/5 px-1.5 rounded">{col.cards.length}</span>
                  </div>
                  <div className="space-y-2">
                    {col.cards.map((card) => (
                      <div key={card.title} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-1 mb-1.5">
                          <span className={`px-1.5 py-0.5 rounded text-[9px] bg-${card.tagColor}-400/10 text-${card.tagColor}-400`}>{card.tag}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[9px] ${card.priority === 'Critical' ? 'bg-red-400/10 text-red-400' : card.priority === 'High' ? 'bg-orange-400/10 text-orange-400' : card.priority === 'Medium' ? 'bg-yellow-400/10 text-yellow-400' : 'bg-slate-400/10 text-slate-400'}`}>{card.priority}</span>
                        </div>
                        <div className="text-white text-[11px] font-medium">{card.title}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border border-white/20" />
                          <div className="text-slate-500 text-[9px]">2d ago</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 bg-gradient-to-b from-navy-700 to-navy-800 rounded-b-xl mx-8 border-x border-b border-white/10" />
    </div>
  );
}
