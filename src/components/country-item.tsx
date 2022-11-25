import React from "react";

type Props = {
  name: string;
  code: string;
};

export const CountryItem = (props: Props) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div>
          <p className="text-gray-900">{props.name}</p>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{props.code}</p>
      </td>
    </tr>
  );
};
