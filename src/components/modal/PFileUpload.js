// FileUpload.js
import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import FileUploadComponent from "../uploadFile/FileUpload";

const FileUpload = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button className="btn" onClick={handleShow}>
        Submit
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload your File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FileUploadComponent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload File
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FileUpload;
