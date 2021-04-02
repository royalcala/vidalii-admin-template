import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Tab } from '../admin/Admin.Doc.Tabs';
import { TableEdit, TableProps } from "../form/Table.Edit";
// https://codesandbox.io/s/react-hook-form-usefieldarray-vy8fv?file=/src/index.js:1031-1716
function TabMain() {
  const { control, getValues } = useForm<{}>({
    defaultValues: {
      users: [
        { _id: 1, firstName: "Renis", lastName: "Alcala" },
        { _id: 2, firstName: "Roy", lastName: "Alcala" },
        { _id: 3, firstName: "Isabel", lastName: "Alcala" },
      ]
    }
  })


  const config: TableProps['config'] = {
    _id: {
      headTitle: "Id",
      type: 'string'
    },
    firstName: {
      headTitle: "FirstName",
      type: 'string'
    },
    lastName: {
      headTitle: "LastName",
      type: 'string'
    }
  }
  return (<>
    <button onClick={() => {
      console.clear()
      console.log(getValues())
    }}>GetValuesOfTable</button>

    <TableEdit config={config} configArray={{ control, defaultValuesKey: 'users' }} />
  </>
  )
}




const tab: Tab = {
  title: '_Main',
  Component: TabMain,
}
export default tab