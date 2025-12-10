import { FileText, Download } from "lucide-react";

const DataSheets = () => {
  const datasheets = [
    {
      name: "BK Watermain Lubricant",
      file: "/datasheets/BK_LUBRICANT_DATA_SHEET.pdf",
      category: "Pipe Jointing",
    },
    {
      name: "BK Standard Watermain Lubricant",
      file: "/datasheets/BK_STAND_LUBE_DATA_SHEET.pdf",
      category: "Pipe Jointing",
    },
    {
      name: "Standard Lube",
      file: "/datasheets/STANDARD_LUBE_DATA_SHEET.pdf",
      category: "Pipe Jointing",
    },
    {
      name: "Prover Lubricant",
      file: "/datasheets/Prover_Lubricant.pdf",
      category: "Lubricants",
    },
    {
      name: "AL63",
      file: "/datasheets/AL63.pdf",
      category: "Lubricants",
    },
    {
      name: "FJ9220 Chain Lubricant",
      file: "/datasheets/FJ9220_CHAIN_LUBRICANT.pdf",
      category: "Chain Solutions",
    },
    {
      name: "Cub Puffers",
      file: "/datasheets/CUB_PUFFERS_DATA_SHEET.pdf",
      category: "Graphites",
    },
    {
      name: "No.1 Flake Graphite",
      file: "/datasheets/NO.1_FLAKE_GRAPHITE.pdf",
      category: "Graphites",
    },
    {
      name: "No.2 Flake Graphite",
      file: "/datasheets/NO.2_FLAKE_GRAPHITE.pdf",
      category: "Graphites",
    },
    {
      name: "Microfyne Graphite",
      file: "/datasheets/MICROFYNE_GRAPHITE_DATA_SHEET.pdf",
      category: "Graphites",
    },
    {
      name: "9092 Microfyne Graphite",
      file: "/datasheets/9092_MICROFYNE_GRAPHITE.pdf",
      category: "Graphites",
    },
    {
      name: "9092 Graphite",
      file: "/datasheets/9092_GRAPHITE.pdf",
      category: "Graphites",
    },
    {
      name: "Grograph 201",
      file: "/datasheets/GROGRAPH_201.pdf",
      category: "Graphites",
    },
  ];

  const categories = ["Pipe Jointing", "Lubricants", "Chain Solutions", "Graphites"];

  return (
    <section id="datasheets" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Product Data Sheets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download technical specifications and safety data sheets for our products
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySheets = datasheets.filter(
              (sheet) => sheet.category === category
            );
            if (categorySheets.length === 0) return null;

            return (
              <div key={category} className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categorySheets.map((sheet, index) => (
                    <a
                      key={index}
                      href={sheet.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card-hover rounded-xl p-5 flex items-center gap-4 group transition-all duration-300 hover:border-primary/30"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground truncate">
                          {sheet.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">PDF Document</p>
                      </div>
                      <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataSheets;
