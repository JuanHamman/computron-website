export default function ShopFlowDashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Laptop frame */}
      <div className="rounded-t-xl bg-navy-800 border border-white/10 overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="h-8 bg-navy-900 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
          <div className="flex-1 text-center text-xs text-slate-500">E-Commerce Analytics Dashboard</div>
        </div>

        {/* Dashboard */}
        <div className="flex min-h-[400px]">
          {/* Sidebar */}
          <div className="w-48 bg-navy-900/50 border-r border-white/5 p-4 hidden sm:block">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">EC</div>
              <span className="text-white text-sm font-semibold">Dashboard</span>
            </div>
            {['Dashboard', 'Analytics', 'Products', 'Orders', 'Customers', 'Reports', 'Settings'].map((item, i) => (
              <div key={item} className={`px-3 py-2 rounded-lg text-xs mb-1 ${i === 0 ? 'bg-blue-500/10 text-blue-400' : 'text-slate-400'}`}>
                {item}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 p-4 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white text-sm font-semibold">Dashboard Overview</div>
                <div className="text-slate-500 text-xs">January 2025</div>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-400">7 Days</div>
                <div className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-xs text-blue-400">30 Days</div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Revenue', value: '$124,563', change: '+12.5%', up: true },
                { label: 'Orders', value: '1,429', change: '+8.2%', up: true },
                { label: 'Customers', value: '3,842', change: '+15.3%', up: true },
                { label: 'Avg Order', value: '$87.12', change: '-2.1%', up: false },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-slate-500 text-xs mb-1">{s.label}</div>
                  <div className="text-white text-lg font-bold">{s.value}</div>
                  <div className={`text-xs ${s.up ? 'text-green-400' : 'text-red-400'}`}>{s.change}</div>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="rounded-lg bg-white/[0.03] border border-white/5 p-4">
              <div className="text-white text-xs font-semibold mb-3">Revenue Trend</div>
              <div className="flex items-end gap-1 h-32">
                {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95, 88, 72, 82, 78, 92, 88, 95, 100, 90, 85, 92, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-blue-500/40 to-blue-400/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="rounded-lg bg-white/[0.03] border border-white/5 overflow-hidden">
              <div className="px-4 py-3 text-white text-xs font-semibold border-b border-white/5">Recent Orders</div>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-4 py-2 text-slate-500 font-medium">Order</th>
                    <th className="text-left px-4 py-2 text-slate-500 font-medium hidden sm:table-cell">Customer</th>
                    <th className="text-left px-4 py-2 text-slate-500 font-medium">Amount</th>
                    <th className="text-left px-4 py-2 text-slate-500 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#4521', customer: 'Acme Corp', amount: '$1,250', status: 'Completed', color: 'green' },
                    { id: '#4520', customer: 'TechStart', amount: '$890', status: 'Processing', color: 'yellow' },
                    { id: '#4519', customer: 'GlobalRetail', amount: '$2,100', status: 'Completed', color: 'green' },
                    { id: '#4518', customer: 'LocalShop', amount: '$445', status: 'Shipped', color: 'blue' },
                  ].map((o) => (
                    <tr key={o.id} className="border-b border-white/5">
                      <td className="px-4 py-2 text-white">{o.id}</td>
                      <td className="px-4 py-2 text-slate-400 hidden sm:table-cell">{o.customer}</td>
                      <td className="px-4 py-2 text-white">{o.amount}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs bg-${o.color}-400/10 text-${o.color}-400`}>{o.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop base */}
      <div className="h-4 bg-gradient-to-b from-navy-700 to-navy-800 rounded-b-xl mx-8 border-x border-b border-white/10" />
    </div>
  );
}
