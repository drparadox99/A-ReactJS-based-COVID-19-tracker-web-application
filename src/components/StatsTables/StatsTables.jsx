import React, { useState, useEffect } from "react";
import styles from "./StatsTables.module.css";
import MUIDataTable from "mui-datatables";
import CountUp from "react-countup";
import { TableRow, TableCell } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import LineGraph from "../LineGraph/LineGraph";
import Chart from "../Chart/Chart";
import { fetchData } from "../../api";

const StatsTables = ({ geography, continentSelected }) => {
  const [data, setData] = useState([]);
  const [selectedCaseTypeGraph, setSelectedCaseTypeGraph] = useState("cases");
  const [usFlag, setUsFlag] = useState("");

  const columns = [
    {
      name: "flag",
      label: "Country",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div key={tableMeta.rowData[1]}>
            <img
              className={styles.tables_country_flags}
              src={value !== "none" ? value : usFlag}
              alt=""
            />
            <span className={styles.countryName}>{tableMeta.rowData[1]}</span>
          </div>
        )
      }
    },

    {
      name: "name",
      label: "Name",
      options: {
        display: "none",
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            {value === "USA" ? setUsFlag(tableMeta["rowData"][0]) : ""}
            {updateValue}
          </>
        )
      }
    },

    {
      name: "confirmed",
      label: "Confirmed",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const val =
            value !== 0 ? (
              <CountUp start={0} end={value} duration={2.5} separator="," />
            ) : (
              "Unknown"
            );
          return <div className={styles.col1}>{val}</div>;
        }
      }
    },
    {
      name: "recovered",
      label: "Recovered",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const val =
            value !== 0 ? (
              <CountUp start={0} end={value} duration={2.5} separator="," />
            ) : (
              "Unknown"
            );
          return <div className={styles.col2}>{val}</div>;
        }
      }
    },
    {
      name: "deceased",
      label: "Deceased",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const val =
            value !== 0 ? (
              <CountUp start={0} end={value} duration={2.5} separator="," />
            ) : (
              "Unknown"
            );
          return <div className={styles.col3}>{val}</div>;
        }
      }
    },
    {
      name: "critical",
      label: "Critical",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const val =
            value !== 0 ? (
              <CountUp start={0} end={value} duration={2.5} separator="," />
            ) : (
              "Unknown"
            );
          return <div className={styles.col4}>{val}</div>;
        }
      }
    },
    {
      name: "active",
      label: "Active",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const val =
            value !== 0 ? (
              <CountUp start={0} end={value} duration={2.5} separator="," />
            ) : (
              "Unknown"
            );
          return <div className={styles.col5}>{val}</div>;
        }
      }
    },
    {
      name: "tests",
      label: "Tests",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div className={styles.col6}>
            <CountUp start={0} end={value} duration={2.5} separator="," />
          </div>
        )
      }
    },
    {
      name: "population",
      label: "Population",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const val =
            value !== 0 ? (
              <CountUp start={0} end={value} duration={2.5} separator="," />
            ) : (
              "Unknown"
            );
          return <div className={styles.col7}>{val}</div>;
        }
      }
    }
  ];

  const detecterClickLineGraph = (type) => {
    setSelectedCaseTypeGraph(type);
  };

  const options = {
    filter: true,
    filterType: false,
    download: false,
    print: false,
    responsive: "simple", //stacked// simple
    selectableRows: "none",
    expandableRows: true,
    expandableRowsHeader: false,
    rowsPerPage: 15,
    rowsPerPageOptions: [15, 30, 40],
    //renderExpandableRow: (rowData) => (<div>{lineGraph(rowData)}</div>)
    renderExpandableRow: (rowData, rowDataChart) => {
      const colSpan = rowData.length + 1;
      return (
        <>
          <TableRow>
            <TableCell colSpan={3}>
              <div
                onClick={(e) => detecterClickLineGraph("cases")}
                className={`${styles.typeGraph} ${
                  selectedCaseTypeGraph === "cases" && styles.effetClic
                } `}
              >
                Confirmed
              </div>
            </TableCell>
            <TableCell colSpan={3}>
              <div
                onClick={(e) => detecterClickLineGraph("deaths")}
                className={`${styles.typeGraph} ${
                  selectedCaseTypeGraph === "deaths" && styles.effetClic
                } `}
              >
                Deaths
              </div>
            </TableCell>
            <TableCell colSpan={3}>
              <div
                onClick={(e) => detecterClickLineGraph("recovered")}
                className={`${styles.typeGraph} ${
                  selectedCaseTypeGraph === "recovered" && styles.effetClic
                } `}
              >
                Recovered
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={colSpan}>
              <LineGraph
                casesType={selectedCaseTypeGraph}
                country={rowData[0]["key"]}
                continentSelected={continentSelected}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={colSpan}>
              <Chart data={rowDataChart} />
            </TableCell>
          </TableRow>
        </>
      );
    }
  };

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          tableRoot: {
            backgroundColor: "#364061 !important"
          },
          //ce qui englobe la table
          paper: {
            backgroundColor: "#161e2c",
            width: "100% !important",

            height: "250px !important",
            outline: "none",

            padding: "1px",
            //backgroundColor: "yellow !important",
            // color: "Pink",
            borderRadius: "15px !important",
            "& tr:nth-child(even)": {
              // backgroundColor: "#364061 !important"
              backgroundColor: "#1B2435 !important"
            },
            boxShadow: "none"
          },
          caption: {
            backgroundColor: "blue !important"
          }
        },

        //toolbar
        MUIDataTableToolbar: {
          root: {
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            backgroundColor: "#1B2435 !important"
          }
        },

        //Header
        MuiTableCell: {
          root: {
            border: "none !important"
          },
          head: {
            padding: "0px",
            borderSpacing: "2px",
            borderCollapse: "separate",
            // backgroundColor: "#2e3b55 !important"
            backgroundColor: "#1B2435 !important"
          }
        },
        //Pour le text du header
        MUIDataTableHeadCell: {
          root: {
            color: "#ebffeb !important",
            fontWeight: "bold !important",
            fontSize: "1.2rem !important",
            fontFamily: "Open Sans !important"
          }
        },

        //text for the entire table //refers to the table cells
        MUIDataTableBodyCell: {
          root: {
            color: "white",
            padding: "5px",
            border: "none"
          }
        },
        //l'inverse de "& tr:nth-child(even)" (à partir de la première ligne)
        MUIDataTableBodyRow: {
          root: {
            // backgroundColor: "#3d486c !important"
            backgroundColor: "#161e2c !important"
          }
        },
        //footer :pagination widgets
        MuiTableFooter: {
          root: {
            "& .MuiToolbar-root": {
              // backgroundColor: "#2e3b55 !important"
              backgroundColor: "#1B2435 !important"
            }
          }
        },
        //Entire footer
        MUIDataTableFooter: {
          root: {
            // backgroundColor: "#2e3b55 !important",
            backgroundColor: "#1B2435 !important",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px"
          }
        },
        //Text for the footer and pagination
        MuiTypography: {
          root: {
            color: "white !important"
          }
        },
        //For the icons for the footer and pagination
        MuiInputBase: {
          root: {
            color: "white !important"
          }
        },
        //For the icons for the footer and pagination
        MuiSvgIcon: {
          root: {
            color: "white !important"
          }
        },

        //pour toute les icônes de la table
        MuiIconButton: {
          label: {
            //backgroundColor: "red"
          }
        },

        //tableau de filtrage
        MuiPaper: {
          root: {
            backgroundColor: "#2e3b55"
          }
        },
        MUIDataTableFilter: {
          root: {
            backgroundColor: "#2e3b55"
          }
        }
      }
    });

  useEffect(() => {
    const fetchMyAPI = async () => {
      const data = await fetchData(geography);
      setData(data);
    };
    fetchMyAPI();
  }, [geography]);

  return (
    <>
      {data !== undefined ? (
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Covid-19 Stats"}
            data={data}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default React.memo(StatsTables);
