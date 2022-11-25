import React, { ChangeEventHandler } from "react";

interface Props {
  onChange?: ChangeEventHandler | undefined;
}

export const SearchInput = (props: Props) => {
  return (
    <div className="bg-white flex items-center mt-5">
      <div className="border rounded overflow-hidden flex">
        <input
          onChange={props.onChange}
          type="text"
          className="px-4 py-2"
          placeholder="Search by code"
        />
      </div>
    </div>
  );
};
