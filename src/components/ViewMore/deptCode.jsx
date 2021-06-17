import React, {useState} from 'react';


function DeptCode(value){
    const [deptCode, setDeptCode]= useState();
    sessionStorage.setItem('deptCode', deptCode);
    return setDeptCode(value);
}

export default DeptCode();