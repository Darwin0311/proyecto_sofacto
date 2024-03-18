import React, { Component } from "react";
import Swal from 'sweetalert2';
import { Button } from "@nextui-org/react";
import axios from "axios";
import "../../src/index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


class Tabpro extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      IdProveedor: "",
      Empresa: "",
      Contacto: "",
      tipoModal: "",
    },
  };

  peticionGet = () => {
    axios
      .get("http://localhost:3000/Proveedor/P")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPost = async () => {
    delete this.state.form.IdProveedor;
    await axios
      .post("http://localhost:3000/Proveedor/crear", {
        ...this.state.form,
        Empresa: this.state.form.Empresa,
        Contacto: this.state.form.Contacto,
      })
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
        Swal.fire({
          text: 'Proveedor Creado exitosamente',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.refreshPage();
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire('', 'Hubo un problema al actualizar el proveedor', 'error');
      });
  };

  refreshPage = () => {
    window.location.reload();
  };


  peticionPut = () => {
    axios
      .put(
        `http://localhost:3000/Proveedor/modificar/${this.state.form.IdProveedor}`,
        {
          ...this.state.form,
          Empresa: this.state.form.Empresa,
          Contacto: this.state.form.Contacto,
        }
      )
      .then((response) => {
        this.modalInsertar();
        this.peticionGet();
        Swal.fire({
          text: 'Proveedor Actualizado exitosamente',
          icon: 'success',
          timer: 1800,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire('', 'Hubo un problema al actualizar el proveedor', 'error');
      });
  };
  
  peticionDelete = () => {
    axios
      .delete(`http://localhost:3000/Proveedor/eliminar/${this.state.form.IdProveedor}`)
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.peticionGet();
        Swal.fire({
          text: 'Proveedor Eliminado exitosamente',
          icon: 'success',
          timer: 1800,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire('', 'Hubo un problema al eliminar el proveedor', 'error');
      });
  };
  
  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  seleccionarProducto = (proveedor) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        IdProveedor: proveedor.IdProveedor,
        Empresa: proveedor.Empresa,
        Contacto: proveedor.Contacto,
      },
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  componentDidMount() {
    this.peticionGet();
    this.setState({
      form: {
        ...this.state.form,
        tipoModal: "insertar",
      },
    });
  }

  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <br />
        <Button
          className="btn btn-success"
          onClick={() => {
            this.setState({ form: {}, tipoModal: "insertar" });
            this.modalInsertar();
          }}
        >
          Agregar Proveedor
        </Button>
        <br />
        <br />
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>EMPRESA</th>
              <th>CONTACTO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((proveedor) => {
              return (
                <tr key={proveedor.IdProveedor}>
                  <td>{proveedor.IdProveedor}</td>
                  <td>{proveedor.Empresa}</td>
                  <td>{proveedor.Contacto}</td>
                  <td>
                    <Button
                      className="btn btn-primary"
                      onClick={() => {
                        this.seleccionarProducto(proveedor);
                        this.modalInsertar();
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    {"   "}
                    <Button
                      className="btn btn-danger"
                      onClick={() => {
                        this.seleccionarProducto(proveedor);
                        this.setState({ modalEliminar: true });
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            {this.state.tipoModal === "insertar"
              ? "Agregar Proveedor"
              : "Actualizar Proveedor"}
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Empresa:</label>
              <input
                className="form-control"
                type="text"
                name="Empresa"
                onChange={this.handleChange}
                value={form.Empresa || ""}
              />
              <br />
              <label>Contacto:</label>
              <input
                className="form-control"
                type="text"
                name="Contacto"
                onChange={this.handleChange}
                value={form.Contacto || ""}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-primary"
              onClick={
                this.state.tipoModal === "insertar"
                  ? this.peticionPost
                  : this.peticionPut
              }
            >
              {this.state.tipoModal === "insertar"
                ? "Insertar"
                : "Actualizar"}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.modalInsertar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEliminar}>
          <ModalHeader>Eliminar Proveedor</ModalHeader>
          <ModalBody>
            ¿Está seguro de que desea eliminar al proveedor?
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger"
              onClick={this.peticionDelete}
            >
              Sí
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Tabpro;
