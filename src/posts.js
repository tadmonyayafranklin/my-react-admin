import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ShowButton,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    Show,
    SimpleShowLayout,
    ReferenceField,
    ReferenceInput,
    DateField,
    Filter,
    SelectInput,
    Pagination,
    DateInput,
    SelectField
} from 'react-admin';

const userChoices = [
    {id: 'name', name: 'name'},
];

const StatusChoices = [
    { id: 'Published', name: 'Published' },
    { id: 'Draft', name: 'Draft' },
];

const PostFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Author" source="userId" reference="users" />
        <SelectInput label="Status" source="status" choices={StatusChoices} />
        {/* Add more filters as needed */}
    </Filter>
);



export const PostList = (props) => (
    <List {...props} filters={<PostFilter />} pagination={<Pagination/>} sort={
        { field: 'id', order: 'ASC'}}
        sx={4} md={4}
        style={{padding: '0 8px'}}
    >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField label="Author" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedDate" />
            {/* Apply custom status formatting */}
            <TextField source="status" label="Status" />
            {/* Add buttons */}
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput multiline source="body" />
            <DateInput source="publishedDate" />
            <SelectInput source="status" choices={StatusChoices} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="id" />
            <ReferenceInput label="Author" source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" />
            <DateInput source="publishedDate" />
            <SelectInput source="status" choices={StatusChoices} />
        </SimpleForm>
    </Create>
);

export const PostShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ReferenceField label="Author" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedDate" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);
