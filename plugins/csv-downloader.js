export default ({ app }, inject) => {
  // Function to convert an array of objects to CSV
  const downloadCSV = (arrayOfObjects, filename = 'download.csv') => {
    if (!arrayOfObjects || !arrayOfObjects.length) {
      return;
    }

    // Create CSV header
    const header = Object.keys(arrayOfObjects[0]).join(',') + '\n';

    // Create CSV rows
    const rows = arrayOfObjects
      .map(obj =>
        Object.values(obj)
          .map(value => `"${value}"`) // Wrap each value in quotes to handle commas within values
          .join(',')
      )
      .join('\n');

    // Combine header and rows
    const csvContent = `data:text/csv;charset=utf-8,${header}${rows}`;

    // Create a temporary anchor element for downloading the file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  // Inject the function into the Vue context as $downloadCSV
  // so it can be used in components via this.$downloadCSV
  inject('downloadCSV', downloadCSV);
};
