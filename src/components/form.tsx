import React from "react";
import { TextInput } from "@mantine/core";
import Input from "./input";
import { DeleteIcon, DnDIcon } from "../assets";

const Form = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div
      className="w-[50%] h-full flex flex-col border overflow-y-auto rounded-[10px]"
      style={{ boxShadow: "0px 8px 16px -8px #0F0F0F33" }}
    >
      <form className="flex flex-col gap-[20px] w-full p-[24px] border-b">
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="name"
            className="text-[#777E90] font-semibold text-[12px]"
          >
            Specialization
          </label>
          <input
            id="name"
            type="text"
            value={name}
            className={`border py-[12px] px-[14px] w-full h-[40px] rounded-xl text-[18px] font-normal`}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="description"
            className="text-[#777E90] font-semibold text-[12px]"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            className="border py-[12px] px-[14px] w-full h-[100px] rounded-xl text-[18px] font-normal resize-none"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>

      <div className="grid p-[24px] gap-3 overflow-y-auto h-[360px]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <DnDIcon /> React
          </div>

          <button className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg">
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="border-t py-[10px] px-[24px] flex items-end justify-end w-full bg-white">
        <button className="h-10 w-[91px] bg-[#3773ff76] rounded-lg text-[#3772FF]">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Form;
