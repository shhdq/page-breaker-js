const PageBreaker = (() => {
  const insertPageBreaks = (tableId, rowsPerPage) => {
    const table = document.getElementById(tableId);
    if (!table) {
      console.error(`Table with ID ${tableId} not found.`);
      return;
    }

    const rows = table.querySelectorAll('tbody tr');
    const totalRows = rows.length;

    for (let i = rowsPerPage; i < totalRows; i += rowsPerPage) {
      const pageBreakRow = document.createElement('tr');
      pageBreakRow.className = 'page-break';
      rows[i - 1].insertAdjacentElement('afterend', pageBreakRow);
    }
  };

  return {
    insertPageBreaks
  };
})();
