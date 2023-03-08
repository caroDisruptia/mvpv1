import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const DownloadHTML = (html) => {
  console.log("html", html);
  html2canvas(html).then((canvas) => {
    let imgWidth = 200;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL("img/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("download.pdf");
  });
};
