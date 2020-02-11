import React, { forwardRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import domo from 'ryuu.js';
import MaterialTable from 'material-table';
// Material table icons
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const wbCollection = 'Workbooks';

function Home() {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Created By', field: 'createdBy' },
      { title: 'Updated Date', field: 'updatedDate', type: 'date' },
    ],
    data: [
      {
        id: 'b3ea3d2d-86c5-44e6-a2f4-985136bbbce1',
        name: 'RMIT - Finance Dashboards',
        createdBy: 'Mehmet Baran',
        updatedDate: new Date('2019-12-13')
      },
      {
        id: '1e61d99d-9885-419a-a33e-3be3941ee720',
        name: 'Programmatic Media Optimisation Dashboard',
        createdBy: 'Zerya Betül Baran',
        updatedDate: new Date('2019-12-11')
      },
    ],
  });

  let history = useHistory();

  useEffect(() => {
    domo.get(`/domo/datastores/v1/collections/${wbCollection}/documents/`)
      .then(data => {
        console.log(data);
      })
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <MaterialTable
      icons={tableIcons}
      title="Initiative Workbooks"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      actions={[
        {
          icon: tableIcons.Add,
          tooltip: 'Add New',
          isFreeAction: true,
          onClick: (event) => history.push("/workbook/new")
        },
        {
          icon: tableIcons.Edit,
          tooltip: 'Edit',
          onClick: (event, rowData) => history.push("/workbook/" + rowData.id)
        }
      ]}
      isLoading={isLoading}
    />
  );
}

export default Home;
