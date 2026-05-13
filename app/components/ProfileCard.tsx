export default function ProfileCard({ test }: any) {
  return (
    <div className="relative flex flex-col bg-white rounded-2xl p-0 shadow-sm border border-slate-100 hover:shadow-md transition-all h-full">
      {test.image ? (
        <img
          src={`http://127.0.0.1:8000${test.image}`}
          alt={test.name}
          className="w-full h-40 object-cover rounded-t-2xl"
        />
      ) : (
        <div className="w-full h-40 bg-slate-100 flex items-center justify-center text-slate-400">
          No Image
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-4">{test.name}</h3>
        <p className="text-sm text-slate-500 mb-4 flex-grow">
          Includes {test.parameters.length} specific parameters.
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
          <span className="text-xl font-bold text-slate-900">
            ₹{test.price}
          </span>
          <span className="text-blue-600 text-sm font-bold">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}
