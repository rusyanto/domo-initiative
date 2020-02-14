import React, { forwardRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { OPEN_SNACKBAR_ERROR } from '../../redux/actionTypes';

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

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  let history = useHistory();

  useEffect(() => {
    domo.get(`/domo/datastores/v1/collections/${wbCollection}/documents/`)
      .then(documents => {
        let tableData = [];
        documents.forEach(document => {
          tableData.push({
            id: document.id,
            initativeName: document.content.initiativeName,
            createdBy: document.content.createdBy,
            updatedOn: new Date(document.updatedOn)
          });
        });
        setData(tableData);
      })
      .catch(err => {
        dispatch({
          type: OPEN_SNACKBAR_ERROR,
          payload: { msg: err.name + ': ' + err.message }
        });
      })
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <MaterialTable
      icons={tableIcons}
      title="Initiative Workbooks"
      columns={[
        { title: 'Name', field: 'initativeName' },
        { title: 'Created By', field: 'createdBy' },
        { title: 'Updated Date', field: 'updatedOn', type: 'date' },
      ]}
      data={data}
      editable={{
        onRowDelete: oldData =>
          domo.delete(`/domo/datastores/v1/collections/${wbCollection}/documents/${oldData.id}`)
            .then(resp => {
              setData(state => {
                return state.filter((workbook, index) => workbook.id !== oldData.id);
              });
            })
            .catch(err => {
              dispatch({
                type: OPEN_SNACKBAR_ERROR,
                payload: { msg: err.name + ': ' + err.message }
              });
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
