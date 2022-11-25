import { ChangeEvent, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CountryData, CountryVars } from "../src/Interfaces";
import { GET_COUNTRIES } from "../src/services/graphql";
import useDebounce from "../src/utils/useDebounce";
import { CountryItem, TableHeader, SearchInput } from "../src/components";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);

  const { data } = useQuery<CountryData, CountryVars>(GET_COUNTRIES, {
    variables: { code: debouncedSearch.toUpperCase() },
  });

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  const renderTableItem = () =>
    data?.countries.map((country) => (
      <CountryItem key={country.code} name={country.name} code={country.code} />
    ));

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Countries</h2>
        </div>
        <SearchInput onChange={handleSearchChange} />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <TableHeader />
              <tbody>{renderTableItem()}</tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to {data?.countries.length} of{" "}
                {data?.countries.length} Entries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
