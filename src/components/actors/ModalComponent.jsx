import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalComponent({ name, movies }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>
        Find out more
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          {movies.map(({ original_title, poster_path, overview, name }) => {
            // const { original_title, poster_path, overview } = movie;
            return (
              <>
                <h1>{original_title || name}</h1>
                <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} />
                <p>{overview}</p>
              </>
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
