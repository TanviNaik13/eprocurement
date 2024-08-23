import "./Download.css"

const Download = () => {
  const downloads = [
    { no: 1, name: 'LibreOffice Suite', url: 'https://www.libreoffice.org/download', fileSize: '10-Jul-2021', size: '1024 KB' },
    { no: 2, name: 'Autocad DWF Viewer', url: 'https://viewer.autodesk.com/', fileSize: '12-Jul-2021', size: '2048 KB' },
    { no: 3, name: 'PDF Reader', url: 'http://get.adobe.com/reader', fileSize: '12-Jul-2021', size: '3072 KB' },
    { no: 4, name: 'PDF Creator', url: 'http://www.pdfforge.org/download', fileSize: '12-Jul-2021', size: '4096 KB' },
    { no: 5, name: 'JRE Download', url: 'http://java.sun.com/javase/downloads/index.jsp', fileSize: '12-Jul-2021', size: '5120 KB' },
    { no: 6, name: 'JRE 8 Download', url: 'https://eprocure.gov.in/mmp/jre-windows-i586.exe', fileSize: '12-Jul-2021', size: '6144 KB' },
    { no: 7, name: 'GePNIC-eBrochure', url: 'https://eprocure.gov.in/cppp/sites/default/files/brochure/GePNIC_Brochure.pdf', fileSize: '01-Jan-2024', size: '2048 KB' },
    { no: 8, name: 'Firefox ESR Browser', url: 'https://ftp.mozilla.org/pub/firefox/releases/52.0.2esr/win32/en-US/Firefox Setup 52.0.2esr.exe', fileSize: '01-Oct-2021', size: '1024 KB' },
    { no: 9, name: 'BOQ Downloads', url: 'V3_BOQ_ItemWiseGST_HSN_4Decimals.xls', fileSize: '08-Nov-2022', size: '302 KB' },
    { no: 10, name: 'User Creation Data Sheet', url: 'user_datasheet.pdf', size: '107.25 KB' },
    { no: 11, name: 'Tender Creation Data Sheet', url: 'tender_datasheet.pdf', size: '242.83 KB' },
    { no: 12, name: 'Corrigendum Creation Data Sheet', url: 'corrigendum_inputform.pdf', size: '48.20 KB' },
    { no: 13, name: 'DSC for Foreign Bidders', url: 'DSC_For_Foreign_Bidders.pdf', size: '277.09 KB' },
    { no: 14, name: 'System Malfunction Procedure', url: 'SystemMalfunctionProcedure.pdf', size: '260.49 KB' },
    { no: 15, name: 'Resources Required', url: 'resources.pdf', size: '820.03 KB' },
    { no: 16, name: 'Form for DSC Deactivation For Bidders', url: 'DSC_Deactivation_Format_for_Bidders.pdf', size: '35.18 KB' },
    { no: 17, name: 'Nodal Officer Block Form', url: 'Nodal_Officer_Block_Form.pdf', size: '780.29 KB' },
    { no: 18, name: 'Model Tender Doc (MTC) for Proc. of Goods in .pdf', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Goods%20NIC.pdf', size: '102.24 KB' },
    { no: 19, name: 'Model Tender Doc (MTC) for Proc. of Goods in .word', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Word%20Goods%20NIC.docx', size: '242.83 KB' },
    { no: 20, name: 'MTC for Proc. of Non Consultancy Services in .pdf', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Services%20NIC.pdf', size: '780.29 KB' },
    { no: 21, name: 'MTC for Proc. of Non Consultancy Services in .word', url: 'https://eprocure.gov.in/cppp/sites/default/files/standard_biddingdocs/MTD%20Word%20Services%20NIC.docx', size: '102.24 KB' },
    { no: 22, name: 'Configuration required for Edge Browser', url: 'Settings_for_Edge_Browser.pdf', size: '548.09 KB' }
  ];

  return (
   <div className='bcg'>
    <div className='fulltable'>

     <div className="downloads-table-container">
        <h1 className='headding'>DOWNLOADS</h1>
      <table className="downloads-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Downloads</th>
            <th>URL</th>
            <th>File Size (in KB)</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((download, index) => (
            <tr key={index}>
              <td>{download.no}</td>
              <td>{download.name}</td>
              <td><a href={download.url} target="_blank" rel="noopener noreferrer">{download.url}</a></td>
              <td>{download.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
   </div>
  );
};

export default Download;