import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PropsTab, Tab } from '../admin/Admin.Doc.Tabs';
import { TableEdit, TableProps } from "../form/Table.Edit";
import util from "util";

const Mutation = Symbol()
function TabMain({ mutation }: PropsTab) {
  const { control, getValues } = useForm<{}>({
    defaultValues: {
      users: [
        { _id: 1, firstName: "Renis", lastName: "Alcala" },
        { _id: 2, firstName: "Roy", lastName: "Alcala" },
        { _id: 3, firstName: "Isabel", lastName: "Alcala" },
      ]
    }
  })
  mutation.set(Mutation,
    () => {
      //util.inspect for print object to string
      const values = util.inspect(getValues()).replaceAll("'", '"')
      return `#graphql
      userUpdateMyAccount(user:${values}){
        _id
      }
      `
    }
  )

  const config: TableProps['config'] = {
    _id: {
      headTitle: "_id",
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

    <TableEdit config={config} configArray={{ control, defaultValuesKey: 'users', keyName: "_id" }} />
  </>
  )
}




const tab: Tab = {
  title: '_Main',
  Component: TabMain,
}
export default tab