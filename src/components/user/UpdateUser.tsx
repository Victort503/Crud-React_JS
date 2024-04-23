import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useUsersStore } from "../../stores/user.store";

interface Props {
  closeModal: () => void;
  id: number;
  name: string;
}



const UpdateUser = (props: Props) => {
  const { OnUpdate } = useUsersStore();
  const [name, setName] = useState("");

  // Initialize the name state with the name prop
  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  const UpdateUser = () => {
    OnUpdate(props.id, { name });
    props.closeModal(); // Close the modal after updating the user
  };

  return (
    <>
      <label>Nombre:</label>
      <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <div className="flex justify-between mt-5">
        <Button color="danger" onPress={props.closeModal}>
          CANCELAR
        </Button>
        <Button color="primary" onClick={() => UpdateUser()}>
          ACEPTAR
        </Button>
      </div>
    </>
  );
};

export default UpdateUser;