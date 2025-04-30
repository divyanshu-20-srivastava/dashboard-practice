const statusColors = {
  "In Sampling Phase": "text-yellow-500",
  Delivered: "text-green-500",
  "In Production Phase": "text-blue-500",
};

const projects = [
  { name: "Product Name", status: "In Sampling Phase", date: "13/09/2022" },
  { name: "Product Name", status: "Delivered", date: "13/09/2022" },
  { name: "Product Name", status: "In Production Phase", date: "13/09/2022" },
  { name: "Product Name", status: "In Sampling Phase", date: "13/09/2022" },
  { name: "Product Name", status: "Delivered", date: "13/09/2022" },
  { name: "Product Name", status: "In Production Phase", date: "13/09/2022" },
];

const ProjectStatus = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-playfair font-semibold">Project Status</h2>
        <button className="text-sm text-gray-500 font-monster underline">
          View All
        </button>
      </div>

      <div className="space-y-4 max-h-[420px] overflow-y-auto scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between font-monster py-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded" />
              <div>
                <p className="font-medium ">{project.name}</p>
                <p
                  className={`text-sm italic  font-semibold ${
                    statusColors[project.status as keyof typeof statusColors]
                  }`}
                >
                  {project.status}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{project.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatus;
