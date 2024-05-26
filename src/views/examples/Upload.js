import React, { useState, useRef } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Alert,
  ListGroup,
  ListGroupItem,
  Progress,
  Input
} from 'reactstrap';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(newPreviewUrls);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFiles.length === 0) {
      setUploadError('No files selected for upload.');
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('files', file);
    });

    // Example fetch request to upload the files
    fetch('YOUR_UPLOAD_ENDPOINT', {
      method: 'POST',
      body: formData,
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Files uploaded successfully:', data);
        setUploadProgress(0);
        setUploadError(null);
        setSelectedFiles([]);
        setPreviewUrls([]);
      })
      .catch(error => {
        console.error('Error uploading files:', error);
        setUploadError('Failed to upload files.');
        setUploadProgress(0);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <FormGroup className='text-center'>
              <Button color='info' onClick={handleButtonClick}>Choose</Button>
              <Button type="submit" color="primary">Upload</Button>
              <Input
                type="file"
                name="file"
                id="file"
                onChange={handleFileChange}
                multiple
                innerRef={fileInputRef}
                style={{ display: 'none' }}
              />
            </FormGroup>
            {previewUrls.length > 0 && (
              <ListGroup>
                {previewUrls.map((url, index) => (
                  <ListGroupItem key={index}>
                    <img src={url} alt={`Preview ${index}`} style={{ width: '100%' }} />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
            {uploadError && (
              <Alert color="danger" className="mt-3">
                {uploadError}
              </Alert>
            )}
            {uploadProgress > 0 && (
              <Progress value={uploadProgress} className="mt-3">
                {uploadProgress}%
              </Progress>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUpload;
