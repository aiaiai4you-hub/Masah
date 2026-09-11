import React from 'react';

const Properties = () => {
  const stats = [
    { label: "إجمالي الأراضي", value: "94.2%", trend: "+2.1%", color: "#1a252f" },
    { label: "الأراضي الموثقة", value: "47", trend: "+18.7%", color: "#2c3e50" }
  ];

  const layers = [
    { name: "قطع الأراضي", visible: true, type: "خطوط" },
    { name: "المباني والمنشآت", visible: true, type: "رسم مساحي" },
    { name: "الشبكة المساحية", visible: false, type: "خطوط" },
    { name: "أحياء وضواحي", visible: true, type: "رسم مساحي" },
    { name: "المناطق المخططة", visible: false, type: "مناطق" }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 lg:p-8" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">إدارة العقارات والأراضي</h1>
          <p className="text-slate-500 mt-1">استعراض وتوثيق كافة العقارات والطبقات المساحية</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <span className="text-slate-500 text-sm">{stat.label}</span>
            <div className="text-2xl font-bold text-slate-800 mt-2">{stat.value}</div>
            <span className="text-emerald-600 text-xs font-semibold mt-1 inline-block">{stat.trend}</span>
          </div>
        ))}
      </div>

      {/* Layers List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">الطبقات المساحية</h2>
        <div className="space-y-3">
          {layers.map((layer, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="font-medium text-slate-700">{layer.name}</span>
              <span className="text-xs px-2 py-1 bg-slate-200 rounded text-slate-600">{layer.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
