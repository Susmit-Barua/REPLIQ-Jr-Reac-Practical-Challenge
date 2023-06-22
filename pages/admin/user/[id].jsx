import React from "react";
import { No, Table, Card, Dropdown } from "flowbite-react";
export default function userdetail({ data }) {
  return (
    <div>
      <Card>
        <div className="flex justify-end px-4 pt-4">
          <Dropdown inline label="">
            <Dropdown.Item>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                href="#"
              >
                <p>Edit</p>
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                href="#"
              >
                <p>Export Data</p>
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                href="#"
              >
                <p>Delete</p>
              </a>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex flex-col items-center pb-10">
          {/* <No
            Display
            Name
            alt="Bonnie image"
            className="mb-3 rounded-full shadow-lg"
            height="96"
            src={data.image}
            width="96"
          /> */}
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {data.firstName}
            {data.lastName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data.company.department}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              href="#"
            >
              <p>Order Detail</p>
            </a>
            <a
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              href="#"
            >
              <p>Message</p>
            </a>
          </div>
        </div>
      </Card>
      <Table className="bg-opacity-30">
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Name
            </Table.Cell>
            <Table.Cell>
              {data.firstName}
              {data.lastName}
            </Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>E-mail</p>
            </Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>

            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>Gender</p>
            </Table.Cell>
            <Table.Cell>{data.gender}</Table.Cell>

            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>Phone</p>
            </Table.Cell>
            <Table.Cell>{data.phone}</Table.Cell>

            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>Birth date</p>
            </Table.Cell>
            <Table.Cell>{data.birthDate}</Table.Cell>

            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Edit</p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>Postal code</p>
            </Table.Cell>
            <Table.Cell>
              {data.address.state}
              {data.address.postalCode}
            </Table.Cell>

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
      </Table>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://dummyjson.com/users");

  const data = await response.json();
  const paths = data.users.map((value) => {
    return {
      params: { id: String(value.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/users/${params.id}`);
  const data = await response.json();
  // console.log(products);
  return {
    props: { data: data },
  };
};
