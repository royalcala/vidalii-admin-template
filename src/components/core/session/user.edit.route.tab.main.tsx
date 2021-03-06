import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PropsTab, Tab } from '../admin/Admin.Doc.Tabs';
import { TableEdit, TableProps } from "../form/Table.Edit";
import util from "util";
import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import { Form, FormProps } from '../form/form';




const Mutation = Symbol()
function TabMain({ mutation }: PropsTab) {
  const { control, getValues } = useForm<{}>()
  let params: any = useParams();
  const { loading, error, data } = useQuery(`#graphql
 {
    user:userFind(operators:"${params._id}") {
    _id
    name
    lastname
    email
    phone
    groups      
  }
}
  `)

  mutation.set(Mutation,
    () => {
      //util.inspect for print object to string
      const values = util.inspect(getValues()).replaceAll("'", '"')
      return `#graphql
      userUpdate(
        user: ${values},
        _id:\"${params._id}\"){
        _id
      }
      `
    }
  )

  const config: FormProps['config'] = {
    name: {
      alias: "Name",
      type: 'string'
    },
    lastname: {
      alias: "LastName",
      type: 'string'
    }
  }
  if (loading) return 'loading...'
  else if (error) return 'Error:' + JSON.stringify(error)
  else
    return <Form
      data={data.user[0]}
      config={config}
      control={control}
    />
  // return (<>
  //   <button onClick={() => {
  //     console.clear()
  //     console.log(getValues())
  //   }}>GetValuesOfTable</button>

  //   <TableEdit config={config} configArray={{ control, defaultValuesKey: 'users', keyName: "_id" }} />
  // </>
  // )
}




const tab: Tab = {
  title: '_Main',
  Component: TabMain,
}
export default tab