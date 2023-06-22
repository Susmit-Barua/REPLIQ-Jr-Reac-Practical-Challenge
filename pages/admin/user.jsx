import React, { useState } from "react";
import User from "../../components/User";

import {
  Button,
  Table,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Textarea,
  FileInput,
} from "flowbite-react";

export default function Productlist({ data }) {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  console.log(data);
  return (
    <>
      <div className="mb-3 ">
        <Button
          className="bg-blue-700 "
          color="purple"
          pill
          onClick={() => props.setOpenModal("form-elements")}
        >
          <p>Add User</p>
        </Button>
      </div>

      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="p-0" />
        <Modal.Body>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Name" />
              </div>
              <TextInput id="base" sizing="md" type="Last Name" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Email" />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Gender" />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div className="max-w-md" id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="About" />
              </div>
              <Textarea
                id="description"
                placeholder="About User"
                required
                rows={2}
              />
            </div>
            <div className="max-w-md" id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <FileInput helperText="User image" id="file" />
            </div>
            <Button className="bg-blue-700">
              <p>Submit</p>
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <Table hoverable className="bg-opacity-30">
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell> E-mail</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {data.users?.map((users) => {
          // console.log(productdetail);
          // <Link href={`/admin/user/${users.id}`}>
          return <User users={users} key={users.id} />;
        })}
      </Table>
    </>
  );
}
export const getServerSideProps = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  return {
    props: { data: data },
  };
};
