/* =========================================
   DATA DOKUMEN
========================================= */

const documents = [

    {
        title: "Pas Foto",

        label: "Google Drive",

        url: "https://drive.google.com/drive/folders/1Y8VwAjh5ANcEcnN5eweu6RwFwLBZxIWL?usp=sharing"
    },

    {
        title: "Rental",

        label: "Google Drive",

        url: "https://drive.google.com/drive/folders/1twIbUJbPX2Eo8FTPLD1zvzgyoiKeJGjC?usp=sharing"
    },

    {
        title: "Berkas - Berkas",

        label: "Google Drive",

        url: "https://drive.google.com/drive/folders/1Vbkp7BeIDNACnuv8pXI6iTTezAzqRVV7?usp=sharing"
    },

    {
        title: "CV Axentra Prima Aksara",

        label: "Google Drive",

        url: "https://drive.google.com/drive/folders/1eG0hj75itB4xGSf5dLN2Ba27UeUESgir?usp=sharing"
    },

    {
        title: "Sertifikat Universitas Sriwijaya",

        label: "Google Drive",

        url: "https://drive.google.com/drive/folders/1xKvFv9KUdsAz5RKxMqYhRGUy4DudrqoO?usp=drive_link"
    },

    {
        title: "Berobat - Graha Eksekutif",

        label: "Google Drive",

        url: "https://drive.google.com/drive/folders/1icVoTCTdZm865gObLT7n1z0R7CxruRiz?usp=drive_link"
    },

    {
        title: "Nur Suci Hikmah",

        label: "Google Drive",

        /* LINK SUCI TERBARU */
        url: "https://drive.google.com/drive/folders/1c3ecoqonzjEoP-eCaGwVjJd6x-6fSJte?usp=sharing",

        full: true
    }

];


/* =========================================
   ELEMENT
========================================= */

const documentGrid =
    document.getElementById("documentGrid");


/* =========================================
   CREATE CARD
========================================= */

documents.forEach((item) => {

    const card =
        document.createElement("a");


    /* Class */

    card.className =
        "document-card";


    /* Full width */

    if (item.full) {

        card.classList.add("full");

    }


    /* Link */

    card.href =
        item.url;


    /* Open new tab */

    card.target =
        "_blank";


    card.rel =
        "noopener noreferrer";


    /* Long title */

    const titleLength =
        item.title.length;


    const titleClass =
        titleLength > 22
            ? "long"
            : "";


    /* HTML */

    card.innerHTML = `

        <div class="card-label">
            ${item.label}
        </div>

        <div class="card-title ${titleClass}">
            ${item.title}
        </div>

        <div class="card-arrow">
            →
        </div>

    `;


    /* Add */

    documentGrid.appendChild(card);

});