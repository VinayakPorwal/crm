import React from "react";
import * as XLSX from "xlsx";

const ExportToExcelButton = ({ data, filename }) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, `${filename}.xlsx`);
  };

  return (
    <button
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={exportToExcel}
    >
      Export to Excel
    </button>
  );
};

export default ExportToExcelButton;
