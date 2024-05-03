import React, { useState } from 'react';
import styles from './admin.module.css'
import CategoryForm from 'src/components/template/CategoryForm';
import GetCategoryList from 'src/components/template/GetCategoryList';
import DeleteCategoryForm from 'src/components/template/DeleteCategoryForm';
const AdminPage = () => {

    return (
        <>
           <GetCategoryList />
           <CategoryForm /> 
           <DeleteCategoryForm />
        </>
    );
};

export default AdminPage;