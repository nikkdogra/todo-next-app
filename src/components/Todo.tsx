"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button, ButtonProps } from "@nextui-org/button";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import clsx from "clsx";

interface ITodoProps {
  title: string;
  desc: string;
}

const SIMILAR_BTN_PROPS: ButtonProps = {
  isIconOnly: true,
  radius: "full",
  className: "bg-transparent text-2xl",
};

export default function Todo({ title, desc }: Readonly<ITodoProps>) {
  return (
    <Card radius="none" shadow="lg" fullWidth className="min-h-fit">
      <CardBody>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 pe-4">
            <h4 className="text-2xl font-bold text-main">{title}</h4>
            <p className="text-xs">{desc}</p>
          </div>
          <div className="flex gap-1">
            <Button
              {...SIMILAR_BTN_PROPS}
              className={clsx(
                SIMILAR_BTN_PROPS.className,
                "hover:bg-red-500 text-red-500 hover:text-white"
              )}
            >
              <AiOutlineDelete />
            </Button>
            <Button
              {...SIMILAR_BTN_PROPS}
              className={clsx(
                SIMILAR_BTN_PROPS.className,
                "hover:bg-main text-main hover:text-white"
              )}
            >
              <FaCheck />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
