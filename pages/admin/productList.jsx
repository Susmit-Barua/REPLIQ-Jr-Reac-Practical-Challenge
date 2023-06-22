import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { fetchApi, baseURL } from "../../utils/fetchApi";

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

export default function Productlist({ products }) {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  return (
    <>
      <div className="mb-3">
        <Button
          className="bg-blue-700"
          color="purple"
          pill
          onClick={() => props.setOpenModal("form-elements")}
        >
          <p>Add Product</p>
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
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Prire" />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="slug" />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div className="max-w-md" id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Product description" />
              </div>
              <Textarea
                id="description"
                placeholder="Product description"
                required
                rows={4}
              />
            </div>
            <div className="max-w-md" id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <FileInput helperText="Product image" id="file" />
            </div>
            <Button className="bg-blue-700">
              <p>Submit</p>
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      <Table hoverable className="bg-opacity-30">
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>slug</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Brand</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {products?.map((productdetail) => {
          // console.log(productdetail);
          return (
            <ProductCard productdetail={productdetail} key={productdetail.id} />
          );
        })}
      </Table>
    </>
  );
}
export const getServerSideProps = async () => {
  const products = await fetchApi(
    `${baseURL}/products/v2/list?store=US&offset=0&categoryId=4209&limit=2&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`
  );

  return {
    props: products,
  };
};
