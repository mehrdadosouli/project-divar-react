import React from 'react';
import styles from './admin.module.css'
const AdminPage = () => {
    const submitHandler=()=>{

    }
    return (
        <div className={styles.admin}>
            <h1>دسته بندی جدید</h1>
            {/* <p></p> */}
            <form onSubmit={submitHandler} className={styles.form}>
                <div>
                    <label htmlFor="category">اسم دسته بندی</label>
                    <input type="text" id='category' />
                </div>
                <div>
                    <label htmlFor="slug">اسلاگ</label>
                    <input type="text" id='slug' />
                </div>
                <div>
                    <label htmlFor="icon">آیکون</label>
                    <input type="text" id='icon' />
                </div>
                <button type='submit'>ایجاد</button>
            </form>
        </div>
    );
};

export default AdminPage;