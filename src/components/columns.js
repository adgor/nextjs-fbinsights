import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "FAN PAGE",
    accessor: "pname",
    Cell: (e) => <h4 className="text-sm text-gray-900 ">{e.value}</h4>,
  },

  {
    Header: "TITULLI I POSTIT",
    accessor: "title",
    Cell: (e) => <h4 className="font-semibold text-gray-900 ">{e.value}</h4>,
  },
  {
    Header: "LIKE",
    accessor: "like",
    Cell: (e) => (
      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
        {e.value}
      </span>
    ),
  },
  {
    Header: "COMMENTS",
    accessor: "comment",
  },
  {
    Header: "SHARES",
    accessor: "shares",
  },
  {
    Header: "DATA",
    accessor: "ptime",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MMM/yyyy HH:mm:ss");
    },
  },
  {
    Header: "",
    accessor: "link",
    Cell: (e) => (
      <a
        className="font-medium text-blue-600 hover:text-indigo-900 visited:text-purple-900 "
        href={e.value}
        target="_blank"
      >
        {" "}
        Shiko{" "}
      </a>
    ),
  },
];
