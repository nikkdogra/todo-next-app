"use client";
import React, { useState } from "react";
import { Input, InputProps } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { IFormData } from "@/types";
import { formDataInitVal } from "@/initial-values";

const SIMILAR_INPUT_PROPS: InputProps = {
  isRequired: true,
  isClearable: true,
  type: "text",
  variant: "bordered",
  radius: "none",
  labelPlacement: "outside",
  classNames: {
    inputWrapper: "border-main",
  },
};

export default function CreateTodoForm() {
  const [formData, setFormData] = useState<IFormData>(formDataInitVal);
  const { title, desc } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full gap-4 py-2 items-end">
        <Input
          {...SIMILAR_INPUT_PROPS}
          label="Title"
          placeholder="Enter title here..."
          value={title ?? ""}
          onValueChange={(val) =>
            setFormData({ ...formData, title: val || null })
          }
          onClear={() => setFormData({ ...formData, title: null })}
        />
        <Input
          {...SIMILAR_INPUT_PROPS}
          label="Description"
          placeholder="Enter description here..."
          value={desc ?? ""}
          onValueChange={(val) =>
            setFormData({ ...formData, desc: val || null })
          }
          onClear={() => setFormData({ ...formData, desc: null })}
        />
        <Button radius="none" type="submit" className="bg-main">
          Add
        </Button>
      </div>
    </form>
  );
}
