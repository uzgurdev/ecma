import { Table } from "@mantine/core";
import { Types } from "../moduls/specialization";

interface TableElmProps {
  elements: Types.IEntity.Specialization[];
}

function TableElm({ elements }: TableElmProps) {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.id + 1}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.info}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div
      className="w-[50%] h-full flex flex-col border overflow-y-auto rounded-[10px]"
      style={{ boxShadow: "0px 8px 16px -8px #0F0F0F33" }}
    >
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Specialization</Table.Th>
            <Table.Th>Info</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {elements.length !== 0 ? (
            rows
          ) : (
            <>
              <h1>No Data Found</h1>
            </>
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
}
