export const COLUMNS = [
  {
    Header: "FAN PAGE",
    Footer: "FAN PAGE",
    accessor: "pname",
    Cell: (e) => <h4 className="text-sm text-gray-900 ">{e.value}</h4>,
  },

  {
    Header: "TITULLI I POSTIT",
    Footer: "TITULLI I POSTIT",
    accessor: "title",
    Cell: (e) => <h4 className="font-semibold text-gray-900 ">{e.value}</h4>,
  },
  {
    Header: "LIKE",
    Footer: "LIKE",
    accessor: "like",
    Cell: (e) => (
      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
        {e.value}
      </span>
    ),
  },
  {
    Header: "COMMENTS",
    Footer: "COMMENTS",
    accessor: "comment",
  },
  {
    Header: "SHARES",
    Footer: "SHARES",
    accessor: "shares",
  },
  {
    Header: "DATA",
    Footer: "DATA",
    accessor: "ptime",
  },
  {
    Header: "",
    Footer: "",
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
