"use client";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import clsx from "clsx";
import Todo from "./Todo";

export default function TodoList() {
  const [showCompleted, setShowCompleted] = useState(false);
  return (
    <>
      <ButtonGroup radius="none" className="me-auto">
        <Button
          className={clsx(!showCompleted && "bg-main")}
          onPress={() => setShowCompleted(false)}
        >
          To Do
        </Button>
        <Button
          className={clsx(showCompleted && "bg-main")}
          onPress={() => setShowCompleted(true)}
        >
          Completed
        </Button>
      </ButtonGroup>
      <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto p-2 bg-black mt-4">
        <Todo title="Doing Workout" desc="I have to do pushup at 6 PM" />
        <Todo title="Doing Workout" desc="I have to do pushup at 6 PM" />
        <Todo title="Doing Workout" desc="I have to do pushup at 6 PM" />
      </div>
    </>
  );
}
