import React from "react";
import { Table } from "flowbite-react";

export default function ProductCard({ productdetail }) {
  return (
    <>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
            {productdetail.name}
          </Table.Cell>
          <Table.Cell>{productdetail.id}</Table.Cell>
          <Table.Cell>{productdetail.colour}</Table.Cell>
          <Table.Cell>{productdetail.brandName}</Table.Cell>
          <Table.Cell>{productdetail.price.current.text}</Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>Edit</p>
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  );
}
