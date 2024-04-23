import { Button, Input, Select, SelectItem, user } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useUsersStore } from "../../stores/user.store";
import { useRolesStore } from "../../stores/rol.store";


const CreateUser = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { OnCreate } = useUsersStore();
  const { OnGetRoles, rol } = useRolesStore()
  const [department, setDepartment] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [complement, setComplement] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rolId, setRolId] = useState(0);
  const CreateUsers = () => {
    OnCreate({
      department: department,
      municipality: municipality,
      complement: complement,
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      rolId: rolId,
    });
    onCloseModal();
  };
  useEffect(() => {
    OnGetRoles()
  }, [])



  return (
    <>
      <Select
        label="Rol"
        placeholder="Selecciona un rol"
        style={{ maxWidth: '30rem' }}
        value={rolId}
        onChange={(e) => setRolId(parseInt(e.target.value))}
      >
        {rol.map((r) => (
          <SelectItem key={r.id} value={r.name}>
            {r.name}
          </SelectItem>
        ))}
      </Select>
      <label>Nombre:</label>
      <Input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ingrese el nombre del usuario"
      />
      <label>Apellido:</label>
      <Input
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Ingrese el apellido"
      />
      <label>Departamento:</label>
      <Input
        onChange={(e) => setDepartment(e.target.value)}
        type="text"
        placeholder="Ingrese el departamento"
      />
      <label>Municipio:</label>
      <Input
        onChange={(e) => setMunicipality(e.target.value)}
        type="text"
        placeholder="Ingrese el municipio"
      />
      <label>Complemento:</label>
      <Input
        onChange={(e) => setComplement(e.target.value)}
        type="text"
        placeholder="Ingrese el complemento"
      />
      <label>Email:</label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Ingrese el email"
      />
      <label>Contraseña:</label>
      <Input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Ingrese la contraseña"
      />

      <div className="flex justify-between mt-5">
        <Button color="danger">CANCELAR</Button>
        <Button
          color="primary"
          onClick={() => {
            CreateUsers();
          }}
        >
          ACEPTAR
        </Button>
      </div>
    </>
  );
};

export default CreateUser;