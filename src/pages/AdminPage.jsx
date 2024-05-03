import CategoryForm from 'src/components/template/CategoryForm';
import GetCategoryList from 'src/components/template/GetCategoryList';
const AdminPage = () => {

    return (
        <>
           <GetCategoryList />
           <CategoryForm /> 
        </>
    );
};

export default AdminPage;