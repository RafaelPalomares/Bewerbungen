// Liste der Dokumente
const documents = [
    { title: "Lebenslauf", fileName: "Rafael_Lebenslauf.pdf" },
    { title: "Motivationsschreiben", fileName: "Motivationsschreiben_DevOps_Rafael.pdf" },
];

// Liste der älteren Motivationsschreiben, immer vor bewerbung das aktuelle hierhin verschieben und oben neues einstellen.
const motivationArchive = [
    { title: "Motivationsschreiben DevOps", fileName: "Motivationsschreiben_DevOps_Rafael.pdf" },
    
  

];

// Funktion zum Generieren der Dateiliste
function generateFileList() {
    const fileList = document.getElementById('fileList');

    documents.forEach(doc => {
        const section = document.createElement('div');
        const heading = document.createElement('h2');
        const link = document.createElement('a');

        heading.textContent = doc.title;
        link.textContent = doc.fileName;
        link.href = `files/${doc.fileName}`; // Pfad zur Datei
        link.target = "_blank"; // Öffnet die Datei in einem neuen Tab

        section.appendChild(heading);
        section.appendChild(link);
        fileList.appendChild(section);
    });

    // Erstellen des Archivs für ältere Motivationsschreiben
    const archiveList = document.createElement('div');
    archiveList.innerHTML = '<h2>Archiv</h2>';

    motivationArchive.forEach(doc => {
        const archiveSection = document.createElement('div');
        const archiveHeading = document.createElement('h3');
        const archiveLink = document.createElement('a');

        archiveHeading.textContent = doc.title;
        archiveLink.textContent = doc.fileName;
        archiveLink.href = `files/${doc.fileName}`; // Pfad zur Datei
        archiveLink.target = "_blank"; // Öffnet die Datei in einem neuen Tab

        archiveSection.appendChild(archiveHeading);
        archiveSection.appendChild(archiveLink);
        archiveList.appendChild(archiveSection);
    });

    fileList.appendChild(archiveList);
}

// Aufruf der Funktion beim Laden der Seite
window.onload = generateFileList;