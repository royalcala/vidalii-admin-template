import React from 'react'
import DocHeader, { Props as HeaderProps } from "./Admin.Doc.Header";
import DocTabs, { Tab } from "./Admin.Doc.Tabs";
import DocFooter from "components/core/admin/Admin.Doc.Footer";

interface Props {
    breadcrum: HeaderProps['breadcrum'],
    tabs: Tab[],
}

export function Doc(props: Props) {
    //mutation is together, queries is for each tab,
    //mutation params with reac-router-dom useParams() for get the id 
    const mutation: HeaderProps['gql']['mutation'] = new Map()
    return (
        <>
            <DocHeader
                breadcrum={props.breadcrum}
                gql={{
                    mutation
                }}
            />
            <DocTabs tabs={props.tabs} mutation={mutation} />
            <DocFooter />
        </>
    )
}