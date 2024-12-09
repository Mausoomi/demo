import GroupTable from "../Components/GroupTable";
import TableHead from "../Components/TableHead";

export default function Home() {
  return (
    <div className=" bg-white rounded-xl  p-4">
      <TableHead />
      <GroupTable />
    </div>
  );
}
