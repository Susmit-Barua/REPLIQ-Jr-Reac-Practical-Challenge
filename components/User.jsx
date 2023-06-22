import React from "react";
import Link from "next/link";
import { Button, Table } from "flowbite-react";

export default function User({ users }) {
  return (
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
          {users.firstName}
        </Table.Cell>
        <Table.Cell>{users.lastName}</Table.Cell>
        <Table.Cell>{users.email}</Table.Cell>

        <Table.Cell>
          <div className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Detail
          </div>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}
