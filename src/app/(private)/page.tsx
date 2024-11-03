import CreateTodoForm from "@/components/CreateTodoForm";
import DeleteAll from "@/components/DeleteAll";
import TodoList from "@/components/TodoList";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <div className="w-full h-dvh py-8">
      <h1 className="text-center text-white text-4xl">My Todos</h1>
      <Card radius="none" className="w-[90%] max-w-[700px] mx-auto my-8">
        <CardHeader>
          <CreateTodoForm />
        </CardHeader>
        <Divider className="my-4" />
        <CardBody>
          <TodoList />
        </CardBody>
        <CardFooter>
          <DeleteAll />
        </CardFooter>
      </Card>
    </div>
  );
}
