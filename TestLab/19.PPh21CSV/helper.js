const csvBulanan = document.getElementById("csvbulanan");
const csvTemplate = document.getElementById("csvtemplate");

csvBulanan.addEventListener("click", () => {
  downloadFile("wspph.csv", '"ronal";"saja"\n"kamu";"saja"');
});

function downloadFile(filename, text) {
  let a = document.createElement("a");
  a.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  a.setAttribute("download", filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

csvTemplate.addEventListener("click", () => {
    const downloadUrl = 'https://drive.google.com/uc?id=1SYwg6JptfHmS5J03A038NoLhWj8S2rbO&export=download';
    const a = document.createElement('a');
    a.setAttribute('href',downloadUrl);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
