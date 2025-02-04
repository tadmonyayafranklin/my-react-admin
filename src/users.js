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
       useNotify,
       useRefresh,
       useDataProvider,
        Button,
       Confirm,
       SelectInput,
       useListContext
   } from 'react-admin';

   const ActiveChoices = [
        { id: 'true', name: 'true' },
        { id: 'false', name: 'false' },
    ];
    
    
    const DeactivateUsersButton = () => {
        const notify = useNotify();
        const refresh = useRefresh();
        const dataProvider = useDataProvider();
        const { selectedIds } = useListContext();
        const [open, setOpen] = React.useState(false);
 
        const handleDeactivate = async () => {
            try {
                await dataProvider.updateMany('users', 
                    {
                        ids: selectedIds,
                        data: { active: false }
                    });
                notify('Users deactivated successfully', { type: 'success' });
                refresh();
            } catch(error) {
                notify(`Error: ${error.message}`, { type: 'warning' });
            }
        };
        return (
            <>
                <Button label="Deactivate" onClick={() => setOpen(true)} />
                <Confirm
                    isOpen={open}
                    title="Deactivate Users"
                    content={`Are you sure you want to deactivate ${selectedIds.length} user(s)?`}
                    onConfirm={handleDeactivate}
                    onClose={() => setOpen(false)}
                />
            </>
        );    
    };
 
    export const UserList = (props) => (
        <List {...props} sx={4} md={6}
            style={{padding: '0 8px'}}
        >
            <Datagrid bulkActionButtons={<DeactivateUsersButton />}>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="email" />
                <TextField label="Active" source="active" />
                <EditButton />
                <ShowButton />
            </Datagrid>
        </List>
    );

   export const UserEdit = (props) => (
       <Edit {...props}>
           <SimpleForm>
               <TextInput source="name" />
               <TextInput source="email" />
               <SelectInput source="active" choices={ActiveChoices} />
           </SimpleForm>
       </Edit>
   );

   export const UserCreate = (props) => (
       <Create {...props}>
           <SimpleForm>
               <TextInput source="name" />
               <TextInput source="email" />
               <SelectInput source="active" choices={ActiveChoices} />
           </SimpleForm>
       </Create>
   );

   export const UserShow = (props) => (
       <Show {...props}>
           <SimpleShowLayout>
               <TextField source="id" />
               <TextField source="name" />
               <TextField source="email" />
               <TextField source="active" />
           </SimpleShowLayout>
       </Show>
   );
   
