import ReactModal from 'react-modal';
import React from 'react';
import '../components/assets/css/modal.css'
import metmask from '../components/assets/images/metamsk.png'
const MetaMaskPopup = ({ isOpen, onRequestClose, onDownloadClick }) => {
  const modalStyles = {
		overlay: {
		  backgroundColor: 'rgba(0, 0, 0, 0.5)',
		  display: 'flex',
		  justifyContent: 'center',
		  alignItems: 'center',
		},
		content: {
		  border: 'none',
		  borderRadius: '8px',
		  padding: '20px',
		  maxWidth: '400px',
		  width: '100%',
		  backgroundColor: '#fff',
		  textAlign: 'center',
		  margin: '0 auto',
		  maxHeight: '40vh', // Adjust the maximum height as required
		  overflow: 'auto',
		},
	
    // New styles for the image
    logoContainer: {
      marginBottom: '10px',
    },
    logoImage: {
      width: '250px',
      height: 'auto',
    },
  };
  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }
  return (
    // <ReactModal
    //   isOpen={isOpen}
    //   onRequestClose={onRequestClose}
    //   contentLabel="MetaMask Not Installed"
    //   style={modalStyles}
    //   ariaHideApp={false}
    // >
    //   <div style={modalStyles.logoContainer}>
    //     <img
    //       src={metmask}
    //       alt="MetaMask"
    //       style={modalStyles.logoImage}
    //     />
    //   </div>
    //   <h2 style={{ marginBottom: '10px' ,color:"gray"}}>MetaMask Not Installed</h2>
    //   <p style={{ marginBottom: '20px',color:"black" }}>
    //     Please install MetaMask to proceed.
    //   </p>
    //   <button
    //     style={{
    //       backgroundColor: '#007bff',
    //       color: '#fff',
    //       border: 'none',
    //       borderRadius: '4px',
    //       padding: '8px 16px',
    //       cursor: 'pointer',
    //     }}
    //     onClick={onDownloadClick}
    //   >
    //     Download MetaMask
    //   </button>
    // </ReactModal>
	<div class="modal-overlay">
  <div class="modal-content">
    <div class="logo-container">
      <img src={metmask} alt="MetaMask" class="logo-image"/>
    </div>
    <h2 class="modal-title">MetaMask Not Installed</h2>
    <p class="modal-text">Please install MetaMask to proceed.</p>
    <button class="modal-button" onClick={onDownloadClick}>Download MetaMask</button>
  </div>
</div>

  );
};

export default MetaMaskPopup;
